import { defineConfig } from "astro/config"
import bun from "astro-bun-adapter"
import svelte from "@astrojs/svelte"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [svelte(), tailwind()],
  adapter: bun(),
  redirects: {
    "/": {
      status: 302,
      destination: "/main",
    },
  },
  build: {
    sourcemap: false,
    minify: false,
  },
})
