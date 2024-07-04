<script lang="ts">
  import { menuStored, isAdminStored } from "../store"
  import * as utils from "../libs/utils"
  import TitleToolbar from "../components/TitleToolbar.svelte"
  import TitleAdd from "../components/TitleAdd.svelte"
  import TitleValue from "../components/TitleValue.svelte"
  import HeaderToolbar from "../components/HeaderToolbar.svelte"
  import HeaderValue from "../components/HeaderValue.svelte"
  import HeaderAdd from "../components/HeaderAdd.svelte"
  import GroupToolbar from "../components/GroupToolbar.svelte"
  import GroupValue from "../components/GroupValue.svelte"
  import GroupAdd from "../components/GroupAdd.svelte"
  import FooterToolbar from "../components/FooterToolbar.svelte"
  import FooterValue from "../components/FooterValue.svelte"
  import FooterAdd from "../components/FooterAdd.svelte"
  import ColumnAdd from "../components/ColumnAdd.svelte"
  import ColumnValue from "../components/ColumnValue.svelte"
  import ColumnToolbar from "../components/ColumnToolbar.svelte"
  import ItemToolbar from "../components/ItemToolbar.svelte"
  import ItemValue from "../components/ItemValue.svelte"
  import ItemAdd from "../components/ItemAdd.svelte"
  import DescriptionToolbar from "../components/DescriptionToolbar.svelte"
  import DescriptionValue from "../components/DescriptionValue.svelte"
  import DescriptionAdd from "../components/DescriptionAdd.svelte"
  import PriceToolbar from "../components/PriceToolbar.svelte"
  import PriceValue from "../components/PriceValue.svelte"
  import PriceAdd from "../components/PriceAdd.svelte"
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
        <HeaderToolbar {header} />
        <HeaderValue {header} />
      </div>
    {/each}
    <HeaderAdd />
  </section>

  <section class="groups">
    {#each $menuStored.json.groups || [] as group, idx (group.uuid)}
      <div id={group.uuid} class="group">
        <GroupToolbar {group} />
        <GroupValue {group} />
        <div class="columns">
          {#each group.columns || [] as column, idx (column.uuid)}
            <div id={column.uuid} class="column">
              <ColumnToolbar {group} {column} />
              <ColumnValue {column} />
            </div>
          {/each}
          <ColumnAdd {group} />
        </div>
        <div class="items">
          {#each group.items || [] as item, idx (item.uuid)}
            <div id={item.uuid} class="item">
              <ItemToolbar {group} {item} />
              <ItemValue {item} />
              <div class="descriptions">
                {#each item.descriptions || [] as description, idx (description.uuid)}
                  <div id={description.uuid} class="description">
                    <DescriptionToolbar {item} {description} />
                    <DescriptionValue {description} />
                  </div>
                {/each}
                <DescriptionAdd {item} />
              </div>
              <div class="prices">
                {#each item.prices || [] as price, idx (price.uuid)}
                  <div id={price.uuid} class="price">
                    <PriceToolbar {item} {price} />
                    <PriceValue {price} />
                  </div>
                {/each}
                <PriceAdd {item} />
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
        <FooterValue {footer} />
      </div>
    {/each}
    <FooterAdd />
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

  .headers {
    @apply border border-dashed border-red-500 m-2 p-2;
  }
  .header {
    @apply border-2 rounded-2xl border-red-500 m-2 p-2;
  }

  .groups {
    @apply border border-dashed border-red-500 m-2 p-2;
  }
  .group {
    @apply border-2 rounded-2xl border-red-500 m-2 p-2;
  }

  .columns {
    @apply border border-dashed border-yellow-500 m-2 p-2;
  }
  .column {
    @apply border-2 rounded-2xl border-yellow-500 m-2 p-2;
  }

  .items {
    @apply border border-dashed border-blue-500 m-2 p-2;
  }
  .item {
    @apply border-2 rounded-2xl border-blue-500 m-2 p-2;
  }

  .descriptions {
    @apply border border-dashed border-orange-500 m-2 p-2;
  }
  .description {
    @apply border-2 rounded-2xl border-orange-500 m-2 p-2;
  }

  .prices {
    @apply border border-dashed border-green-500 m-2 p-2;
  }
  .price {
    @apply border-2 rounded-2xl border-green-500 m-2 p-2;
  }

  .footers {
    @apply border border-dashed border-red-500 m-2 p-2;
  }
  .footer {
    @apply border-2 rounded-2xl border-red-500 m-2 p-2;
  }
</style>
