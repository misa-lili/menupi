import { faker } from "@faker-js/faker"
import { eventBus } from "../store"
import { tick } from "svelte"

const airline = faker.airline

export function addTitle(menu: Menu) {
  menu.json.titles.push({
    value: faker.commerce.productName(),
  })
}

export function moveTitle(menu: Menu, title: Title, direction: "up" | "down") {
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
}

export function removeTitle(menu: Menu, title: Title) {
  menu.json.titles = menu.json.titles.filter((t) => t !== title)
}

export function addHeader(menu: Menu) {
  menu.json.headers.push({
    value: faker.commerce.productName(),
  })
}

export function moveHeader(
  menu: Menu,
  header: Header,
  direction: "up" | "down",
) {
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
}

export function removeHeader(menu: Menu, header: Header) {
  menu.json.headers = menu.json.headers.filter((h) => h !== header)
}

export function addGroup(menu: Menu) {
  menu.json.groups.push({
    value: airline.airline().name,
    cols: [
      {
        value: "Flight number",
      },
      {
        value: "Seat",
      },
    ],
    items: [
      {
        value: airline.airplane().name,
        descriptions: [
          {
            value: getFlightDescriotion(),
          },
        ],
        prices: [{ value: airline.flightNumber() }, { value: airline.seat() }],
      },
    ],
  })
}

export function moveGroup(menu: Menu, group: Group, direction: "up" | "down") {
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

  eventBus.trigger("render", {})
}

export function removeGroup(menu: Menu, group: Group) {
  menu.json.groups = menu.json.groups.filter((g) => g !== group)

  eventBus.trigger("render", {})
}

export function addColumn(menu: Menu, group: Group) {
  if (!group.cols) group.cols = []
  group.cols.push({ value: faker.commerce.product() })
}

export function moveColumn(
  menu: Menu,
  group: Group,
  col: Column,
  direction: "left" | "right",
) {
  const index = group.cols.indexOf(col)
  if (
    (direction === "left" && index === 0) ||
    (direction === "right" && index === group.cols.length - 1)
  ) {
    return
  }
  const newIndex = direction === "left" ? index - 1 : index + 1
  const temp = group.cols[index]
  group.cols[index] = group.cols[newIndex]
  group.cols[newIndex] = temp
}

export function addItem(menu: Menu, group: Group) {
  group.items.push({
    value: airline.airplane().name,
    descriptions: [{ value: getFlightDescriotion() }],
    prices: [{ value: airline.flightNumber() }, { value: airline.seat() }],
  })
}

export async function moveItem(
  menu: Menu,
  item: Item,
  direction: "up" | "down",
) {
  const group = menu.json.groups.find((group) => group.items.includes(item))

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

  eventBus.trigger("render", {})

  if (item.uuid) {
    const target = document.getElementById(item.uuid)
    await tick()
    target?.scrollIntoView({ behavior: "smooth", block: "center" })
    await tick()
    target?.focus()
  }
}

export function removeItem(menu: Menu, item: Item) {
  const group = menu.json.groups.find((group) => group.items.includes(item))

  if (!group) return

  group.items = group.items.filter((i) => i !== item)

  eventBus.trigger("render", {})
}

export function addFooter(menu: Menu) {
  menu.json.footers.push({ value: faker.commerce.productDescription() })
}

export function moveFooter(
  menu: Menu,
  footer: Footer,
  direction: "up" | "down",
) {
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
}

export function removeFooter(menu: Menu, footer: Footer) {
  menu.json.footers = menu.json.footers.filter((f) => f !== footer)
}

function getFlightDescriotion() {
  // prettier-ignore
  return `[${airline.aircraftType()}] ${airline.flightNumber()}, ${airline.airport().name}`
}

export async function save(menu: Menu, menuBackedUp: Menu) {
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
    menuBackedUp = JSON.parse(JSON.stringify(menu))
  }
}

function render(menu: Menu) {
  menu = menu
}
