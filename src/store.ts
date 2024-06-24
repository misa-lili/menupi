import { writable } from "svelte/store"

export const isAdmin = writable(true)
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
