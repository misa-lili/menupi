import { writable } from "svelte/store"

export const isAdminStored = writable<boolean>(true)
export const menuStored = writable<Menu>()
export const menuBackedUpStored = writable<Menu>()
export const eventBus = createEventBus()

function createEventBus() {
  const { subscribe, set } = writable({})

  return {
    subscribe,
    trigger: (event: string, detail: any) => {
      set({ event, detail })
    },
  }
}
