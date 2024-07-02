<script lang="ts">
  import { menuStored, isAdminStored } from "../store"
  import * as utils from "../libs/utils"
  import { onMount } from "svelte"
  import TitleToolbar from "../components/TitleToolbar.svelte"
  import TitleValue from "../components/TitleValue.svelte"
  import TitleAdd from "../components/TitleAdd.svelte"
</script>

<section class="skin">
  <section class="titles">
    {#each $menuStored.json.titles || [] as title, idx (title.uuid)}
      <div id={title.uuid} class="title">
        <TitleToolbar {title} />
        <TitleValue {title} />
      </div>
    {/each}
    <TitleAdd />
  </section>

  <section class="headers">
    {#each $menuStored.json.headers || [] as header, idx (header.uuid)}
      <div id={header.uuid} class="header">
        <button
          class="header-move-up"
          class:hidden={!$isAdminStored}
          on:click={() => utils.moveHeader(header, "up")}
        >
          Up
        </button>
        <button
          class="header-move-down"
          class:hidden={!$isAdminStored}
          on:click={() => utils.moveHeader(header, "down")}
        >
          Down
        </button>
        <button
          class="header-remove"
          class:hidden={!$isAdminStored}
          on:click={() => utils.removeHeader(header)}
        >
          Remove Header
        </button>
        <div
          class="header-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (header.value = e.target.textContent)}
        >
          {header.value}
        </div>
      </div>
    {/each}
    <button
      class="headers-add"
      class:hidden={!$isAdminStored}
      on:click={() => utils.addHeader()}
    >
      Add Header
    </button>
  </section>

  <section class="groups">
    {#each $menuStored.json.groups || [] as group, idx (group.uuid)}
      <div id={group.uuid} class="group">
        <button
          class="group-move-up"
          class:hidden={!$isAdminStored}
          on:click={() => utils.moveGroup(group, "up")}
        >
          Up
        </button>
        <button
          class="group-move-down"
          class:hidden={!$isAdminStored}
          on:click={() => utils.moveGroup(group, "down")}
        >
          Down
        </button>
        <button
          class="group-remove"
          class:hidden={!$isAdminStored}
          on:click={() => utils.removeGroup(group)}
        >
          Remove Group
        </button>
        <div class="grid grid-cols-12 w-full border-t border-orange-300/10">
          <div
            class="group-value col-span-8"
            contenteditable={$isAdminStored}
            on:input={(e) => (group.value = e.target.textContent)}
          >
            {group.value}
          </div>
          <div class="cols col-span-4">
            <div class="grid grid-cols-12 w-full">
              {#each group.cols || [] as col, idx (col.uuid)}
                <div id={col.uuid} class="col col-span-6">
                  <div
                    class="col-value"
                    contenteditable={$isAdminStored}
                    on:input={(e) => (col.value = e.target.textContent)}
                  >
                    {col.value}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="items">
          {#each group.items || [] as item, idx (item.uuid)}
            <div id={item.uuid} class="item">
              <button
                class="item-move-up"
                class:hidden={!$isAdminStored}
                on:click={() => utils.moveItem(group, item, "up")}
              >
                Up
              </button>
              <button
                class="item-move-down"
                class:hidden={!$isAdminStored}
                on:click={() => utils.moveItem(group, item, "down")}
              >
                Down
              </button>
              <button
                class="item-remove"
                class:hidden={!$isAdminStored}
                on:click={() => utils.removeItem(group, item)}
              >
                Remove Item
              </button>

              <div class="grid grid-cols-12">
                <div
                  class="item-value col-span-8"
                  contenteditable={$isAdminStored}
                  on:input={(e) => (item.value = e.target.textContent)}
                >
                  {item.value}
                </div>
                <div class="prices col-span-4">
                  <div class="grid grid-cols-12">
                    {#each item.prices || [] as price, idx (price.uuid)}
                      <div id={price.uuid} class="price col-span-6">
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
            </div>
          {/each}
          <button
            class="items-add"
            class:hidden={!$isAdminStored}
            on:click={() => utils.addItem(group)}
          >
            Add Item
          </button>
        </div>
      </div>
    {/each}
    <button
      class="groups-add"
      class:hidden={!$isAdminStored}
      on:click={() => utils.addGroup()}
    >
      Add Group
    </button>
  </section>

  <section class="footers">
    {#each $menuStored.json.footers || [] as footer, idx (footer.uuid)}
      <div id={footer.uuid} class="footer">
        <button
          class="footer-move-up"
          class:hidden={!$isAdminStored}
          on:click={() => utils.moveFooter(footer, "up")}
        >
          Up
        </button>
        <button
          class="footer-move-down"
          class:hidden={!$isAdminStored}
          on:click={() => utils.moveFooter(footer, "down")}
        >
          Down
        </button>
        <button
          class="footer-remove"
          class:hidden={!$isAdminStored}
          on:click={() => utils.removeFooter(footer)}
        >
          Remove Footer
        </button>
        <div
          class="footer-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (footer.value = e.target.textContent)}
        >
          {footer.value}
        </div>
      </div>
    {/each}
    <button
      class="footers-add"
      class:hidden={!$isAdminStored}
      on:click={utils.addFooter}
    >
      Add Footer
    </button>
  </section>
</section>

<style lang="postcss">
  /* Noto Sans KR */
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
  /* Noto Serif KR */
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap");

  .skin {
    @apply container m-auto;

    @apply w-full px-6 py-12;
    @apply lg:max-w-screen-md lg:p-16;

    @apply text-base text-stone-800;
    @apply rounded-3xl;

    color: rgba(205, 156, 112, 0.8);
    background-image: linear-gradient(
      to right,
      rgb(47, 55, 46),
      rgb(37, 45, 36)
    );

    font-family: "Noto Serif KR", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  .titles {
    @apply mb-12;
  }
  .title {
  }
  .title-value {
    @apply text-6xl;
    font-family: "Noto Serif KR", serif;
  }

  .headers {
    @apply mb-12;
  }
  .header {
    @apply text-sm;
    @apply pr-1;
  }
  .header-value {
    @apply font-thin;
    font-family: "Noto Serif KR", serif;
  }

  .groups {
    @apply mb-12;
  }
  .group {
    @apply mb-12;
  }
  .group-value {
    @apply tracking-wider;
    @apply text-2xl font-medium my-6;
  }

  .cols {
    @apply flex gap-4;
  }
  .col {
    @apply items-center justify-center self-center text-center;
  }
  .col-value {
    font-family: "Noto Serif KR", serif;
    font-weight: 100;
    font-style: italic;
  }

  .items {
  }
  .item {
    @apply mb-6;
  }
  .item-value {
    @apply font-medium;
  }

  .descriptions {
  }
  .description {
  }
  .description-value {
    @apply font-thin text-xs;
    @apply mt-1 pr-1;
  }

  .prices {
  }
  .price {
    @apply items-center justify-center self-center text-center;
  }
  .price-value {
    font-family: "Noto Serif KR", serif;
    font-weight: 100;
    font-style: italic;
  }

  .footers {
    @apply border-t border-orange-300/10 pt-10;
  }
  .footer {
    @apply pr-2;
  }
  .footer-value {
    @apply text-sm;
    @apply font-light;
  }
</style>
