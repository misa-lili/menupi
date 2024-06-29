import { get } from "svelte/store"
import { faker } from "@faker-js/faker"
import {
  eventBus,
  isAdminStored,
  menuBackedUpStored,
  menuStored,
} from "../store"
import { tick } from "svelte"

const airline = faker.airline

export function addTitle() {
  const menu: Menu = get(menuStored)
  menu.json.titles.push({
    uuid: crypto.randomUUID(),
    value: faker.commerce.productName(),
  })
  menuStored.set(menu)
}

export function moveTitle(title: Title, direction: "up" | "down") {
  const menu: Menu = get(menuStored)
  const index = menu.json.titles.indexOf(title)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === menu.json.titles.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = menu.json.titles[index]
  menu.json.titles[index] = menu.json.titles[newIndex]
  menu.json.titles[newIndex] = temp
  menuStored.set(menu)
}

export function removeTitle(title: Title) {
  const menu: Menu = get(menuStored)
  menu.json.titles = menu.json.titles.filter((t) => t !== title)
  menuStored.set(menu)
}

export function addHeader() {
  const menu: Menu = get(menuStored)
  menu.json.headers.push({
    uuid: crypto.randomUUID(),
    value: faker.commerce.productName(),
  })
  menuStored.set(menu)
}

export function moveHeader(header: Header, direction: "up" | "down") {
  const menu: Menu = get(menuStored)
  const index = menu.json.headers.indexOf(header)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === menu.json.headers.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = menu.json.headers[index]
  menu.json.headers[index] = menu.json.headers[newIndex]
  menu.json.headers[newIndex] = temp
  menuStored.set(menu)
}

export function removeHeader(header: Header) {
  const menu: Menu = get(menuStored)
  menu.json.headers = menu.json.headers.filter((h) => h !== header)
  menuStored.set(menu)
}

export function addGroup() {
  const menu: Menu = get(menuStored)
  menu.json.groups.push({
    uuid: crypto.randomUUID(),
    value: airline.airline().name,
    cols: [
      {
        uuid: crypto.randomUUID(),
        value: "Flight number",
      },
      {
        uuid: crypto.randomUUID(),
        value: "Seat",
      },
    ],
    items: [
      {
        uuid: crypto.randomUUID(),
        value: airline.airplane().name,
        descriptions: [
          {
            uuid: crypto.randomUUID(),
            value: getFlightDescriotion(),
          },
        ],
        prices: [
          {
            uuid: crypto.randomUUID(),
            value: airline.flightNumber(),
          },
          { uuid: crypto.randomUUID(), value: airline.seat() },
        ],
      },
    ],
  })
  menuStored.set(menu)
}

export function moveGroup(group: Group, direction: "up" | "down") {
  const menu: Menu = get(menuStored)
  const index = menu.json.groups.indexOf(group)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === menu.json.groups.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = menu.json.groups[index]
  menu.json.groups[index] = menu.json.groups[newIndex]
  menu.json.groups[newIndex] = temp
  menuStored.set(menu)
}

export function removeGroup(group: Group) {
  const menu: Menu = get(menuStored)
  menu.json.groups = menu.json.groups.filter((g) => g !== group)
  menuStored.set(menu)
}

export function addColumn(group: Group) {
  const menu: Menu = get(menuStored)

  menu.json.groups = menu.json.groups.map((g) => {
    if (g === group) {
      if (g.cols === undefined) g.cols = []
      g.cols.push({
        uuid: crypto.randomUUID(),
        value: faker.commerce.product(),
      })
    }
    return g
  })

  menuStored.set(menu)
}

export function moveColumn(
  group: Group,
  col: Column,
  direction: "up" | "down",
) {
  const menu: Menu = get(menuStored)
  const index = group.cols.indexOf(col)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === group.cols.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = group.cols[index]
  group.cols[index] = group.cols[newIndex]
  group.cols[newIndex] = temp
  menuStored.set(menu)
}

export function removeColumn(group: Group, col: Column) {
  const menu: Menu = get(menuStored)
  group.cols = group.cols.filter((c) => c !== col)
  menuStored.set(menu)
}

export function addItem(group: Group) {
  const menu: Menu = get(menuStored)
  group.items.push({
    uuid: crypto.randomUUID(),
    value: airline.airplane().name,
    descriptions: [
      { uuid: crypto.randomUUID(), value: getFlightDescriotion() },
    ],
    prices: [
      { uuid: crypto.randomUUID(), value: airline.flightNumber() },
      { uuid: crypto.randomUUID(), value: airline.seat() },
    ],
  })
  menuStored.set(menu)
}

export async function moveItem(
  group: Group,
  item: Item,
  direction: "up" | "down",
) {
  const menu: Menu = get(menuStored)

  if (!group) return

  const index = group.items.indexOf(item)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === group.items.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = group.items[index]
  group.items[index] = group.items[newIndex]
  group.items[newIndex] = temp
  menuStored.set(menu)

  if (item.uuid) {
    const target = document.getElementById(item.uuid)
    await tick()
    target?.scrollIntoView({ behavior: "smooth", block: "center" })
    await tick()
    target?.focus()
  }
}

export function removeItem(group: Group, item: Item) {
  const menu: Menu = get(menuStored)

  if (!group) return

  group.items = group.items.filter((i) => i !== item)

  menuStored.set(menu)
}

export function addDescription(item: Item) {
  const menu: Menu = get(menuStored)
  item.descriptions.push({
    uuid: crypto.randomUUID(),
    value: getFlightDescriotion(),
  })
  menuStored.set(menu)
}

export function moveDescription(
  item: Item,
  description: Description,
  direction: "up" | "down",
) {
  const menu: Menu = get(menuStored)
  const index = item.descriptions.indexOf(description)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === item.descriptions.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = item.descriptions[index]
  item.descriptions[index] = item.descriptions[newIndex]
  item.descriptions[newIndex] = temp
  menuStored.set(menu)
}

export function removeDescription(item: Item, description: Description) {
  const menu: Menu = get(menuStored)
  item.descriptions = item.descriptions.filter((d) => d !== description)
  menuStored.set(menu)
}

export function addPrice(item: Item) {
  const menu: Menu = get(menuStored)
  item.prices.push({
    uuid: crypto.randomUUID(),
    value: airline.flightNumber(),
  })
  menuStored.set(menu)
}

export function movePrice(item: Item, price: Price, direction: "up" | "down") {
  const menu: Menu = get(menuStored)
  const index = item.prices.indexOf(price)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === item.prices.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = item.prices[index]
  item.prices[index] = item.prices[newIndex]
  item.prices[newIndex] = temp
  menuStored.set(menu)
}

export function removePrice(item: Item, price: Price) {
  const menu: Menu = get(menuStored)
  item.prices = item.prices.filter((p) => p !== price)
  menuStored.set(menu)
}

export function addFooter() {
  const menu: Menu = get(menuStored)
  menu.json.footers.push({
    uuid: crypto.randomUUID(),
    value: faker.commerce.productDescription(),
  })
  menuStored.set(menu)
}

export function moveFooter(footer: Footer, direction: "up" | "down") {
  const menu: Menu = get(menuStored)
  const index = menu.json.footers.indexOf(footer)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === menu.json.footers.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = menu.json.footers[index]
  menu.json.footers[index] = menu.json.footers[newIndex]
  menu.json.footers[newIndex] = temp
  menuStored.set(menu)
}

export function removeFooter(footer: Footer) {
  const menu: Menu = get(menuStored)
  menu.json.footers = menu.json.footers.filter((f) => f !== footer)
  menuStored.set(menu)
}

function getFlightDescriotion() {
  // prettier-ignore
  return `[${airline.aircraftType()}] ${airline.flightNumber()}, ${airline.airport().name}`
}

export async function save() {
  const menu = get(menuStored)
  if (!confirm("Are you sure you want to save?")) return

  const password = prompt("Enter password")

  const response = await fetch("http://localhost:4321/menus", {
    method: "PATCH",
    body: JSON.stringify({
      name: menu.name,
      password,
      newJson: menu.json,
    }),
  })

  if (!response.ok) {
    console.error(response)
    console.error(await response.text())
    alert("Error")
  }

  if (response.ok) {
    alert("Saved")
    menuBackedUpStored.set(JSON.parse(JSON.stringify(menu)))
  }
}

export async function rollback() {
  if (!confirm("Are you sure you want to rollback?")) return

  menuStored.set(JSON.parse(JSON.stringify(get(menuBackedUpStored))))
  eventBus.trigger("render", {})
}

export async function login() {
  const response = await fetch("http://localhost:4321/menus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: get(menuStored).name,
      password: prompt("Enter your password"),
    }),
  })

  if (response.ok) {
    // verified
    isAdminStored.set(true)
  } else {
    // invalid password
    alert("Failed to login")
  }
}

export function logout() {
  isAdminStored.set(false)
}

export async function createNewMenu() {
  const name = prompt("Enter the name of the new menu")
  if (name === null) {
    return
  }
  const exist = await fetch(`http://localhost:4321/menus`, {
    method: "POST",
    body: JSON.stringify({ name }),
  })
  if (!exist.ok) {
    return alert("Name already exists")
  }
  const email = prompt("Enter your email")
  if (email === null) {
    return
  }
  const password = prompt("Enter your password")
  if (password === null) {
    return
  }
  const confirmPassword = prompt("Confirm your password")
  if (confirmPassword !== password) {
    return alert("Passwords do not match")
  }

  const response = await fetch("http://localhost:4321/menus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })

  if (response.ok) {
    alert("New menu created")
    window.location.replace(`/${name}`)
  } else {
    alert("Failed to create new menu")
  }
}
