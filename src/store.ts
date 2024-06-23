import { writable } from "svelte/store"

export const menu = writable<Menu>()
export const isAdmin = writable(false)
