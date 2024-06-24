<script lang="ts">
  import { eventBus, isAdmin } from "../store"
  import {
    addTitle,
    addHeader,
    moveHeader,
    removeHeader,
    addGroup,
    moveGroup,
    removeGroup,
    addItem,
    moveItem,
    removeItem,
    addFooter,
    moveFooter,
    removeFooter,
    save,
  } from "../libs/utils"
  import { onDestroy, onMount, tick } from "svelte"

  export let menu: Menu
  let menuBackedUp: Menu = JSON.parse(JSON.stringify(menu))

  eventBus.subscribe(({ event, detail }) => {
    const events = {
      save: () => {
        save(menu, menuBackedUp)
      },
      rollback: () => {
        if (!confirm("Are you sure you want to roll back?")) return
        menu = JSON.parse(JSON.stringify(menuBackedUp))
      },
      render: () => {
        menu = menu
      },
    }

    if (events[event]) {
      events[event]()
    }
  })

  onDestroy(() => {
    eventBus.subscribe(() => {})
  })
</script>

<section id="skin">
  <div id="section--title">
    {#each menu.json.titles || [] as title, idx (title.uuid)}
      {#if idx === 0}
        <div
          id={title.uuid}
          class="title-value"
          contenteditable={$isAdmin}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {:else if idx === 1}
        <div
          id={title.uuid}
          class="text-center"
          contenteditable={$isAdmin}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {:else if idx === 2}
        <div
          id={title.uuid}
          class="header text-end"
          contenteditable={$isAdmin}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {/if}
    {/each}
    {#if $isAdmin && menu.json.titles.length < 3}
      <button on:click={() => addTitle(menu)}> Add New Title</button>
    {/if}
  </div>

  <!-- Header -->
  <section id="headers">
    {#each menu.json.headers || [] as header, idx (header.uuid)}
      {#if $isAdmin}
        <div class="editor">
          <button on:click={() => moveHeader(menu, header, "up")}> Up </button>
          <button on:click={() => moveHeader(menu, header, "down")}>
            Down
          </button>
          <button on:click={() => removeHeader(menu, header)}>
            Remove Header
          </button>
        </div>
      {/if}
      <p
        id={header.uuid}
        contenteditable={$isAdmin}
        on:input={(e) => (header.value = e.target.textContent)}
      >
        {header.value}
      </p>
    {/each}
    {#if $isAdmin}
      <button on:click={() => addHeader(menu)}> Add New Header</button>
    {/if}
  </section>

  {#each menu.json.groups || [] as group, idx (group.uuid)}
    {#if $isAdmin}
      <div class="group-editor">
        <button
          on:click={async () => {
            moveGroup(menu, group, "up")
            await tick()
            document
              .getElementById(group.uuid)
              .scrollIntoView({ behavior: "smooth", block: "center" })
            await tick()
            document.getElementById(group.uuid).focus({ preventScroll: true })
          }}
        >
          Up
        </button>
        <button
          on:click={async (target) => {
            moveGroup(menu, group, "down")
            await tick()
            document
              .getElementById(group.uuid)
              .scrollIntoView({ behavior: "smooth", block: "center" })
            await tick()
            document.getElementById(group.uuid).focus({ preventScroll: true })
          }}
        >
          Down
        </button>
        <button on:click={() => removeGroup(menu, group)}>
          Remove Group
        </button>
      </div>
    {/if}
    <div class="group">
      <div class="grid">
        <div
          id={group.uuid}
          class="group--value uppercase"
          contenteditable={$isAdmin}
          on:input={(e) => (group.value = e.target.textContent)}
        >
          {group.value}
        </div>

        {#each group.cols || [] as col, idx (col.uuid)}
          {#if idx === 0}
            <div
              id={col.uuid}
              class="column center"
              contenteditable={$isAdmin}
              on:input={(e) => (col.value = e.target.textContent)}
            >
              {col.value}
            </div>
          {:else if idx === 1}
            <div
              id={col.uuid}
              class="column center"
              contenteditable={$isAdmin}
              on:input={(e) => (col.value = e.target.textContent)}
            >
              {col.value}
            </div>
          {/if}
        {/each}
      </div>
      <hr />
      <ul>
        {#each group.items || [] as item (item.uuid)}
          {#if $isAdmin}
            <div class="item-editor">
              <button on:click={() => moveItem(menu, item, "up")}> Up </button>
              <button on:click={() => moveItem(menu, item, "down")}>
                Down
              </button>
              <button on:click={() => removeItem(menu, item)}>
                Remove Item
              </button>
            </div>
          {/if}
          <li>
            <div class="grid">
              <div>
                <div
                  id={item.uuid}
                  class="item--value uppercase"
                  contenteditable={$isAdmin}
                  on:input={(e) => (item.value = e.target.textContent)}
                >
                  {item.value}
                </div>
                {#each item.descriptions || [] as description, idx (description.uuid)}
                  <div
                    id={description.uuid}
                    class="item--description"
                    contenteditable={$isAdmin}
                    on:input={(e) => (description.value = e.target.textContent)}
                  >
                    {description.value}
                  </div>
                {/each}
              </div>
              {#each item.prices || [] as price, idx (price.uuid)}
                <div
                  id={price.uuid}
                  class="center item--price"
                  contenteditable={$isAdmin}
                  on:input={(e) => (price.value = e.target.textContent)}
                >
                  {price.value}
                </div>
              {/each}
            </div>
          </li>
        {/each}
      </ul>
      {#if $isAdmin}
        <button on:click={() => addItem(menu, group)}> Add New Item </button>
      {/if}
    </div>
  {/each}
  {#if $isAdmin}
    <button on:click={() => addGroup(menu)}> Add New Group </button>
  {/if}

  <!-- Footer -->
  <section id="footer">
    {#each menu.json.footers || [] as footer, idx (footer.uuid)}
      {#if $isAdmin}
        <div class="footer-editor">
          <button on:click={() => moveFooter(menu, footer, "up")}> Up </button>
          <button on:click={() => moveFooter(menu, footer, "down")}>
            Down
          </button>
          <button on:click={() => removeFooter(menu, footer)}>
            Remove Footer
          </button>
        </div>
      {/if}
      <p
        id={footer.uuid}
        class="footer"
        contenteditable={$isAdmin}
        on:input={(e) => (footer.value = e.target.textContent)}
      >
        {footer.value}
      </p>
    {/each}
    {#if $isAdmin}
      <button on:click={() => addFooter(menu)}> Add New Footer</button>
    {/if}
  </section>
</section>

<style>
  hr {
    @apply h-px  bg-stone-600 border-0 m-0;
  }

  div.editor {
    @apply -mt-0;
  }

  section#skin {
    @apply container m-auto;

    @apply w-full p-12;
    @apply lg:max-w-screen-md lg:p-16;

    @apply text-base text-stone-800;
    @apply rounded-3xl;
    @apply bg-gradient-to-r from-stone-200 to-stone-300;
  }

  #section--title {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  section#headers {
    @apply mb-36;
    @apply text-sm leading-6;
  }

  section#headers p {
    @apply my-4;
  }

  div.column {
    @apply text-center;
    @apply text-xs font-serif italic;
  }

  section#footer {
    @apply mt-36;
    @apply text-sm leading-6;
  }

  section#footer p {
    @apply my-4;
  }

  .title-value {
    font-weight: 800;
    opacity: 0.9;
  }

  .header {
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    font-family: serif;
  }

  .group {
    margin-bottom: 2.5rem;
  }

  .group--value {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  .group-editor {
    margin-top: 1rem;
  }

  .item-editor {
    margin-top: 2rem;
    margin-bottom: -1rem;
  }

  button {
    opacity: 0.5;
    font-size: 12px;
  }

  .grid {
    display: grid;
    grid-template-columns: 8fr 2fr 2fr;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item--value {
    font-weight: 600;
  }

  .item--description {
    font-size: 14px;
    opacity: 0.8;
    font-style: italic;
  }

  .item--price {
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    font-family: serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
