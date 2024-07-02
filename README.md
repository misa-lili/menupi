# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Menupi HTML Structure

```js
<script lang="ts">
  import { menuStored, isAdminStored } from "../store"
</script>

<section class="skin">
  <section class="titles">
    {#each $menuStored.json.titles || [] as title, idx (title.uuid)}
      <div id={title.uuid} class="title">
        <div
          class="title-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      </div>
    {/each}
  </section>

  <section class="headers">
    {#each $menuStored.json.headers || [] as header, idx (header.uuid)}
      <div id={header.uuid} class="header">
        <div
          class="header-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (header.value = e.target.textContent)}
        >
          {header.value}
        </div>
      </div>
    {/each}
  </section>

  <section class="groups">
    {#each $menuStored.json.groups || [] as group, idx (group.uuid)}
      <div id={group.uuid} class="group">
        <div
          class="group-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (group.value = e.target.textContent)}
        >
          {group.value}
        </div>
        <div class="columns">
          {#each group.columns || [] as column, idx (column.uuid)}
            <div id={column.uuid} class="column">
              <div
                class="column-value"
                contenteditable={$isAdminStored}
                on:input={(e) => (column.value = e.target.textContent)}
              >
                {column.value}
              </div>
            </div>
          {/each}
        </div>
        <div class="items">
          {#each group.items || [] as item, idx (item.uuid)}
            <div id={item.uuid} class="item">
              <div
                class="item-value"
                contenteditable={$isAdminStored}
                on:input={(e) => (item.value = e.target.textContent)}
              >
                {item.value}
              </div>
              <div class="descriptions">
                {#each item.descriptions || [] as description, idx (description.uuid)}
                  <div id={description.uuid} class="description">
                    <div
                      class="description-value"
                      contenteditable={$isAdminStored}
                      on:input={(e) =>
                        (description.value = e.target.textContent)}
                    >
                      {description.value}
                    </div>
                  </div>
                {/each}
              </div>
              <div class="prices">
                {#each item.prices || [] as price, idx (price.uuid)}
                  <div id={price.uuid} class="price">
                    <div
                      class="price-value"
                      contenteditable={$isAdminStored}
                      on:input={(e) => (price.value = e.target.textContent)}
                    >
                      {price.value}
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>

  <section class="footers">
    {#each $menuStored.json.footers || [] as footer, idx (footer.uuid)}
      <div id={footer.uuid} class="footer">
        <div
          class="footer-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (footer.value = e.target.textContent)}
        >
          {footer.value}
        </div>
      </div>
    {/each}
  </section>
</section>

<style lang="postcss">
  .skin {
  }

  .titles {
  }
  .title {
  }
  .title-value {
  }

  .headers {
  }
  .header {
  }
  .header-value {
  }

  .groups {
  }
  .group {
  }
  .group-value {
  }

  .columns {
  }
  .column {
  }
  .column-value {
  }

  .items {
  }
  .item {
  }
  .item-value {
  }

  .descriptions {
  }
  .description {
  }
  .description-value {
  }

  .prices {
  }
  .price {
  }
  .price-value {
  }

  .footers {
  }
  .footer {
  }
  .footer-value {
  }
</style>

```
