import { get } from "svelte/store"
import { menu } from "../store"
// import { randomUUID } from "crypto"

export function addGroup() {
  get(menu).json.groups.push({
    value: "New Group",
    cols: [],
    items: [
      {
        uuid: "new-item",
        value: "New Item",
        descriptions: [{ value: "Description" }],
        prices: [{ value: "Price 1" }, { value: "Price 2" }],
      },
    ],
  })
  menu.set(get(menu))
}

export function moveGroup(group: Group, direction: "up" | "down") {
  const index = get(menu).json.groups.indexOf(group)
  if (
    (direction === "up" && index === 0) ||
    (direction === "down" && index === get(menu).json.groups.length - 1)
  ) {
    return
  }
  const newIndex = direction === "up" ? index - 1 : index + 1
  const temp = get(menu).json.groups[index]
  get(menu).json.groups[index] = get(menu).json.groups[newIndex]
  get(menu).json.groups[newIndex] = temp
  menu.set(get(menu))
}

export function removeGroup(group: Group) {
  get(menu).json.groups = get(menu).json.groups.filter((g) => g !== group)
  menu.set(get(menu))
}

export function addItem(group: Group) {
  group.items.push({
    uuid: "new-item",
    value: "New Item",
    descriptions: [{ value: "Description" }],
    prices: [{ value: "Price 1" }, { value: "Price 2" }],
  })
  menu.set(get(menu))
}

export function moveItem(item: Item, direction: "up" | "down") {
  const group = get(menu).json.groups.find((group) =>
    group.items.includes(item),
  )

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
  menu.set(get(menu))
}

export function removeItem(item: Item) {
  const group = get(menu).json.groups.find((group) =>
    group.items.includes(item),
  )

  if (!group) return

  group.items = group.items.filter((i) => i !== item)
  menu.set(get(menu))
}
