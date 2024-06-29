<script lang="ts">
  import { menuStored, isAdminStored } from "../store"
  import * as utils from "../libs/utils"
</script>

<section class="skin">
  <section class="titles">
    {#each $menuStored.json.titles || [] as title, idx (title.uuid)}
      <div id={title.uuid} class="title">
        <button
          class="title-move-up"
          class:hidden={!$isAdminStored}
          on:click={() => utils.moveTitle(title, "up")}
        >
          Up
        </button>
        <button
          class="title-move-down"
          class:hidden={!$isAdminStored}
          on:click={() => utils.moveTitle(title, "down")}
        >
          Down
        </button>
        <button
          class="title-remove"
          class:hidden={!$isAdminStored}
          on:click={() => utils.removeTitle(title)}
        >
          Remove Title
        </button>
        <div
          class="title-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (title.value = e.target.textContent)}
        >
          {title.value}
        </div>
      </div>
    {/each}
    <button
      class="titles-add"
      class:hidden={!$isAdminStored}
      on:click={utils.addTitle}
    >
      Add Title
    </button>
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
      on:click={utils.addHeader}
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
        <div
          class="group-value"
          contenteditable={$isAdminStored}
          on:input={(e) => (group.value = e.target.textContent)}
        >
          {group.value}
        </div>
        <div class="cols">
          {#each group.cols || [] as col, idx (col.uuid)}
            <div id={col.uuid} class="col">
              <button
                class="col-move-up"
                class:hidden={!$isAdminStored}
                on:click={() => utils.moveColumn(group, col, "up")}
              >
                Up
              </button>
              <button
                class="col-move-down"
                class:hidden={!$isAdminStored}
                on:click={() => utils.moveColumn(group, col, "down")}
              >
                Down
              </button>
              <button
                class="col-remove"
                class:hidden={!$isAdminStored}
                on:click={() => utils.removeColumn(group, col)}
              >
                Remove Col
              </button>
              <div
                class="col-value"
                contenteditable={$isAdminStored}
                on:input={(e) => (col.value = e.target.textContent)}
              >
                {col.value}
              </div>
            </div>
          {/each}
          <button
            class="cols-add"
            class:hidden={!$isAdminStored}
            on:click={() => utils.addColumn(group)}
          >
            Add Column
          </button>
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
                    <button
                      class="description-move-up"
                      class:hidden={!$isAdminStored}
                      on:click={() =>
                        utils.moveDescription(item, description, "up")}
                    >
                      Up
                    </button>
                    <button
                      class="description-move-down"
                      class:hidden={!$isAdminStored}
                      on:click={() =>
                        utils.moveDescription(item, description, "down")}
                    >
                      Down
                    </button>
                    <button
                      class="description-remove"
                      class:hidden={!$isAdminStored}
                      on:click={() =>
                        utils.removeDescription(item, description)}
                    >
                      Remove Description
                    </button>
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
                <button
                  class="descriptions-add"
                  class:hidden={!$isAdminStored}
                  on:click={() => utils.addDescription(item)}
                >
                  Add Description
                </button>
              </div>
              <div class="prices">
                {#each item.prices || [] as price, idx (price.uuid)}
                  <div id={price.uuid} class="price">
                    <button
                      class="price-move-up"
                      class:hidden={!$isAdminStored}
                      on:click={() => utils.movePrice(item, price, "up")}
                    >
                      Up
                    </button>
                    <button
                      class="price-move-down"
                      class:hidden={!$isAdminStored}
                      on:click={() => utils.movePrice(item, price, "down")}
                    >
                      Down
                    </button>
                    <button
                      class="price-remove"
                      class:hidden={!$isAdminStored}
                      on:click={() => utils.removePrice(item, price)}
                    >
                      Remove Price
                    </button>
                    <div
                      class="price-value"
                      contenteditable={$isAdminStored}
                      on:input={(e) => (price.value = e.target.textContent)}
                    >
                      {price.value}
                    </div>
                  </div>
                {/each}
                <button
                  class="prices-add"
                  class:hidden={!$isAdminStored}
                  on:click={() => utils.addPrice(item)}
                >
                  Add Price
                </button>
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
      on:click={utils.addGroup}
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
  .skin {
    @apply container m-auto;

    @apply w-full p-12;
    @apply lg:max-w-screen-md lg:p-16;

    @apply text-stone-800;
    @apply rounded-3xl;
    @apply bg-gradient-to-r from-stone-200 to-stone-300;
  }

  .titles {
    @apply border border-dashed border-red-500 m-2 p-2;
  }
  .title {
    @apply border-2 rounded-2xl  border-red-500 m-2 p-2;
  }
  .title-value {
  }

  .headers {
    @apply border border-dashed border-red-500 m-2 p-2;
  }
  .header {
    @apply border-2 rounded-2xl border-red-500 m-2 p-2;
  }
  .header-value {
  }

  .groups {
    @apply border border-dashed border-red-500 m-2 p-2;
  }
  .group {
    @apply border-2 rounded-2xl border-red-500 m-2 p-2;
  }
  .group-value {
  }

  .cols {
    @apply border border-dashed border-yellow-500 m-2 p-2;
  }
  .col {
    @apply border-2 rounded-2xl border-yellow-500 m-2 p-2;
  }
  .col-value {
  }

  .items {
    @apply border border-dashed border-blue-500 m-2 p-2;
  }
  .item {
    @apply border-2 rounded-2xl border-blue-500 m-2 p-2;
  }
  .item-value {
  }

  .descriptions {
    @apply border border-dashed border-orange-500 m-2 p-2;
  }
  .description {
    @apply border-2 rounded-2xl border-orange-500 m-2 p-2;
  }
  .description-value {
  }

  .prices {
    @apply border border-dashed border-green-500 m-2 p-2;
  }
  .price {
    @apply border-2 rounded-2xl border-green-500 m-2 p-2;
  }
  .price-value {
  }

  .footers {
    @apply border border-dashed border-red-500 m-2 p-2;
  }
  .footer {
    @apply border-2 rounded-2xl border-red-500 m-2 p-2;
  }
  .footer-value {
  }
</style>
