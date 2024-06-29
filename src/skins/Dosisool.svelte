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
        <div class="cols">
          {#each group.cols || [] as col, idx (col.uuid)}
            <div id={col.uuid} class="col">
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
    @apply container m-auto;

    @apply w-full p-12;
    @apply lg:max-w-screen-md lg:p-16;

    @apply text-base text-stone-800;
    @apply rounded-3xl;
    /* @apply bg-gradient-to-r from-teal-900 to-green-950; */

    color: rgba(205, 156, 112, 0.8);
    background-image: linear-gradient(
      to right,
      rgb(47, 55, 46),
      rgb(37, 45, 36)
    );
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

  .cols {
  }
  .col {
  }
  .col-value {
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
