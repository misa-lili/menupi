<script lang="ts">
  import { menuStored, isAdminStored } from "../store"
  import * as utils from "../libs/utils"
  import { onMount } from "svelte"
  import TitleToolbar from "../components/TitleToolbar.svelte"
  import TitleValue from "../components/TitleValue.svelte"
  import TitleAdd from "../components/TitleAdd.svelte"
  import HeaderToolbar from "../components/HeaderToolbar.svelte"
  import HeaderValue from "../components/HeaderValue.svelte"
  import HeaderAdd from "../components/HeaderAdd.svelte"
  import GroupToolbar from "../components/GroupToolbar.svelte"
  import GroupValue from "../components/GroupValue.svelte"
  import ColumnValue from "../components/ColumnValue.svelte"
  import ItemToolbar from "../components/ItemToolbar.svelte"
  import ItemValue from "../components/ItemValue.svelte"
  import PriceValue from "../components/PriceValue.svelte"
  import ItemAdd from "../components/ItemAdd.svelte"
  import GroupAdd from "../components/GroupAdd.svelte"
  import FooterToolbar from "../components/FooterToolbar.svelte"
  import FooterValue from "../components/FooterValue.svelte"
  import FooterAdd from "../components/FooterAdd.svelte"
  import DescriptionValue from "../components/DescriptionValue.svelte"
</script>

<section class="skin">
  <section class="titles">
    {#each $menuStored.json.titles || [] as title, idx (title.uuid)}
      <div id={title.uuid} class="title">
        <TitleToolbar {title} />
        <div class="title-value">
          <TitleValue {title} />
        </div>
      </div>
    {/each}
    <TitleAdd />
  </section>

  <section class="headers">
    {#each $menuStored.json.headers || [] as header, idx (header.uuid)}
      <div id={header.uuid} class="header">
        <HeaderToolbar {header} />
        <div class="header-value">
          <HeaderValue {header} />
        </div>
      </div>
    {/each}
    <HeaderAdd />
  </section>

  <section class="groups">
    {#each $menuStored.json.groups || [] as group, idx (group.uuid)}
      <div id={group.uuid} class="group">
        <GroupToolbar {group} />
        <div class="grid grid-cols-12 w-full border-t border-orange-300/10">
          <div class="group-value col-span-8">
            <GroupValue {group} />
          </div>
          <div class="columns col-span-4">
            <div class="grid grid-cols-12 w-full">
              {#each group.columns || [] as column, idx (column.uuid)}
                <div id={column.uuid} class="column column-value col-span-6">
                  <ColumnValue {column} />
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="items">
          {#each group.items || [] as item, idx (item.uuid)}
            <div id={item.uuid} class="item">
              <ItemToolbar {group} {item} />
              <div class="grid grid-cols-12">
                <div class="item-value col-span-8">
                  <ItemValue {item} />
                </div>
                <div class="prices col-span-4">
                  <div class="grid grid-cols-12">
                    {#each item.prices || [] as price, idx (price.uuid)}
                      <div id={price.uuid} class="price price-value col-span-6">
                        <PriceValue {price} />
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
              <div class="descriptions">
                {#each item.descriptions || [] as description, idx (description.uuid)}
                  <div
                    id={description.uuid}
                    class="description description-value"
                  >
                    <DescriptionValue {description} />
                  </div>
                {/each}
              </div>
            </div>
          {/each}
          <ItemAdd {group} />
        </div>
      </div>
    {/each}
    <GroupAdd />
  </section>

  <section class="footers">
    {#each $menuStored.json.footers || [] as footer, idx (footer.uuid)}
      <div id={footer.uuid} class="footer">
        <FooterToolbar {footer} />
        <div class="footer-value">
          <FooterValue {footer} />
        </div>
      </div>
    {/each}
    <FooterAdd />
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

  .columns {
    @apply flex gap-4;
  }
  .column {
    @apply items-center justify-center self-center text-center;
  }
  .column-value {
    font-family: "Noto Serif KR", serif;
    font-weight: 100;
    font-style: italic;
  }

  .items {
  }
  .item {
    @apply font-medium;
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
