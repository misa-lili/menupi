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
  import TitleAdd from "../components/TitleAdd.svelte"
  import HeaderToolbar from "../components/HeaderToolbar.svelte"
  import HeaderValue from "../components/HeaderValue.svelte"
  import HeaderAdd from "../components/HeaderAdd.svelte"
  import GroupToolbar from "../components/GroupToolbar.svelte"
  import ItemToolbar from "../components/ItemToolbar.svelte"
  import FooterToolbar from "../components/FooterToolbar.svelte"
  import FooterValue from "../components/FooterValue.svelte"
  import GroupAdd from "../components/GroupAdd.svelte"
  import GroupValue from "../components/GroupValue.svelte"
</script>

<section class="skin">
  <section class="titles">
    {#each $menuStored.json.titles || [] as title, idx (title.uuid)}
      {#if idx === 0}
        <div
          id={title.uuid}
          class="title-1"
          contenteditable={$isAdminStored}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {:else if idx === 1}
        <div
          id={title.uuid}
          class="title-2"
          contenteditable={$isAdminStored}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {:else if idx === 2}
        <div
          id={title.uuid}
          class="title-3"
          contenteditable={$isAdminStored}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      {/if}
    {/each}
    {#if $isAdminStored && $menuStored.json.titles.length < 3}
      <TitleAdd />
    {/if}
  </section>

  <!-- Header -->
  <section class="headers">
    {#each $menuStored.json.headers || [] as header, idx (header.uuid)}
      <div class="header">
        <HeaderToolbar {header} />
        <HeaderValue {header} />
      </div>
    {/each}
    <HeaderAdd />
  </section>

  <section class="groups">
    {#each $menuStored.json.groups || [] as group, idx (group.uuid)}
      <div class="group">
        <GroupToolbar {group} />
        <div class="grid">
          <div class="group-value">
            <GroupValue {group} />
          </div>

          {#each group.columns || [] as column, idx (column.uuid)}
            {#if idx === 0}
              <div
                id={column.uuid}
                class="column center"
                contenteditable={$isAdminStored}
                on:input={(e) => (column.value = e.target.textContent)}
              >
                {column.value}
              </div>
            {:else if idx === 1}
              <div
                id={column.uuid}
                class="column center"
                contenteditable={$isAdminStored}
                on:input={(e) => (column.value = e.target.textContent)}
              >
                {column.value}
              </div>
            {/if}
          {/each}
        </div>
        <hr />
        <ul>
          {#each group.items || [] as item (item.uuid)}
            {#if $isAdminStored}
              <ItemToolbar {group} {item} />
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
                      on:input={(e) =>
                        (description.value = e.target.textContent)}
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
          <button on:click={() => addItem(group)}> Add New Item </button>
        {/if}
      </div>
    {/each}
  </section>

  <GroupAdd />

  <section class="footers">
    {#each $menuStored.json.footers || [] as footer, idx (footer.uuid)}
      <div class="footer">
        <FooterToolbar {footer} />
        <FooterValue {footer} />
      </div>
    {/each}
    {#if $isAdminStored}
      <button on:click={() => addFooter()}> Add New Footer</button>
    {/if}
  </section>
</section>

<style>
  hr {
    @apply h-px  bg-stone-600 border-0 m-0;
  }

  .skin {
    @apply container m-auto;

    @apply w-full p-12;
    @apply lg:max-w-screen-md lg:p-16;

    @apply text-base text-stone-800;
    @apply rounded-3xl;
    @apply bg-gradient-to-r from-stone-200 to-stone-300;
  }

  .titles {
    @apply mb-16;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  .headers {
    @apply mb-16;
  }

  .header {
    @apply my-4;
    @apply text-sm leading-6;
  }

  div.column {
    @apply text-center;
    @apply text-xs font-serif italic;
  }

  .footers {
    @apply mt-36;
  }
  .footer {
    @apply my-4;
    @apply text-sm leading-6;
  }

  .title-1 {
    font-weight: 800;
    opacity: 0.9;
  }

  .title-2 {
    @apply text-center;
  }

  .title-3 {
    @apply text-end;
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    font-family: serif;
  }

  .group {
    margin-bottom: 2.5rem;
  }

  .group-value {
    @apply uppercase;
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
