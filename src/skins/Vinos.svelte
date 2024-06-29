<script lang="ts">
  import { menuStored, eventBus, isAdminStored } from "../store"
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

  onDestroy(() => {
    eventBus.subscribe(() => {})
  })
  const unsubscribe = eventBus.subscribe(({ event }) => {
    if (event === "render") {
      $menuStored = $menuStored
    }
  })

  onDestroy(() => {
    if (unsubscribe) unsubscribe()
  })
</script>

<section id="skin">
  <section id="titles">
    {#each $menuStored.json.titles || [] as title, idx (title.uuid)}
      {#if idx === 0}
        <div
          id={title.uuid}
          class="title-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {:else if idx === 1}
        <div
          id={title.uuid}
          class="text-center"
          contenteditable={$isAdminStored}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {:else if idx === 2}
        <div
          id={title.uuid}
          class="header text-end"
          contenteditable={$isAdminStored}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {/if}
    {/each}
    {#if $isAdminStored && $menuStored.json.titles.length < 3}
      <button on:click={() => addTitle($menuStored)}> Add New Title</button>
    {/if}
  </section>

  <!-- Header -->
  <section id="headers">
    {#each $menuStored.json.headers || [] as header, idx (header.uuid)}
      {#if $isAdminStored}
        <div class="editor">
          <button on:click={() => moveHeader($menuStored, header, "up")}>
            Up
          </button>
          <button on:click={() => moveHeader($menuStored, header, "down")}>
            Down
          </button>
          <button on:click={() => removeHeader($menuStored, header)}>
            Remove Header
          </button>
        </div>
      {/if}
      <p
        id={header.uuid}
        contenteditable={$isAdminStored}
        on:input={(e) => (header.value = e.target.textContent)}
      >
        {header.value}
      </p>
    {/each}
    {#if $isAdminStored}
      <button on:click={() => addHeader($menuStored)}> Add New Header</button>
    {/if}
  </section>

  {#each $menuStored.json.groups || [] as group, idx (group.uuid)}
    {#if $isAdminStored}
      <div class="group-editor">
        <button
          on:click={async () => {
            moveGroup($menuStored, group, "up")
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
            moveGroup($menuStored, group, "down")
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
        <button on:click={() => removeGroup($menuStored, group)}>
          Remove Group
        </button>
      </div>
    {/if}
    <div class="group">
      <div class="grid">
        <div
          id={group.uuid}
          class="group--value uppercase"
          contenteditable={$isAdminStored}
          on:input={(e) => (group.value = e.target.textContent)}
        >
          {group.value}
        </div>

        {#each group.cols || [] as col, idx (col.uuid)}
          {#if idx === 0}
            <div
              id={col.uuid}
              class="column center"
              contenteditable={$isAdminStored}
              on:input={(e) => (col.value = e.target.textContent)}
            >
              {col.value}
            </div>
          {:else if idx === 1}
            <div
              id={col.uuid}
              class="column center"
              contenteditable={$isAdminStored}
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
          {#if $isAdminStored}
            <div class="item-editor">
              <button on:click={() => moveItem($menuStored, item, "up")}>
                Up
              </button>
              <button on:click={() => moveItem($menuStored, item, "down")}>
                Down
              </button>
              <button on:click={() => removeItem($menuStored, item)}>
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
                  contenteditable={$isAdminStored}
                  on:input={(e) => (item.value = e.target.textContent)}
                >
                  {item.value}
                </div>
                {#each item.descriptions || [] as description, idx (description.uuid)}
                  <div
                    id={description.uuid}
                    class="item--description"
                    contenteditable={$isAdminStored}
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
                  contenteditable={$isAdminStored}
                  on:input={(e) => (price.value = e.target.textContent)}
                >
                  {price.value}
                </div>
              {/each}
            </div>
          </li>
        {/each}
      </ul>
      {#if $isAdminStored}
        <button on:click={() => addItem($menuStored, group)}>
          Add New Item
        </button>
      {/if}
    </div>
  {/each}
  {#if $isAdminStored}
    <button on:click={() => addGroup($menuStored)}> Add New Group </button>
  {/if}

  <!-- Footer -->
  <section id="footer">
    {#each $menuStored.json.footers || [] as footer, idx (footer.uuid)}
      {#if $isAdminStored}
        <div class="footer-editor">
          <button on:click={() => moveFooter($menuStored, footer, "up")}>
            Up
          </button>
          <button on:click={() => moveFooter($menuStored, footer, "down")}>
            Down
          </button>
          <button on:click={() => removeFooter($menuStored, footer)}>
            Remove Footer
          </button>
        </div>
      {/if}
      <p
        id={footer.uuid}
        class="footer"
        contenteditable={$isAdminStored}
        on:input={(e) => (footer.value = e.target.textContent)}
      >
        {footer.value}
      </p>
    {/each}
    {#if $isAdminStored}
      <button on:click={() => addFooter($menuStored)}> Add New Footer</button>
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

  section#titles {
    @apply mb-16;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  section#headers {
    @apply mb-16;
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
