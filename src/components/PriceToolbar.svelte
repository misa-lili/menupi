<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let item: Item
  export let price: Price
</script>

<div class="flex">
  <button
    class="price-move-up"
    class:hidden={!$isAdminStored}
    aria-label="price move up"
    on:click={() => utils.movePrice(item, price, "up")}
  >
    <img src="arrow_up.svg" alt="arrow up" />
  </button>
  <button
    class="price-move-down"
    class:hidden={!$isAdminStored}
    aria-label="price move down"
    on:click={() => utils.movePrice(item, price, "down")}
  >
    <img src="arrow_down.svg" alt="arrow down" />
  </button>
  {#if !price.src}
    <button
      class:hidden={!$isAdminStored}
      aria-label="price image upload"
      on:click={() => utils.uploadImage(price)}
    >
      <img src="image.svg" alt="image" />
    </button>
  {:else}
    <button
      class:hidden={!$isAdminStored}
      aria-label="price image remove"
      on:click={() => utils.removeImage(price)}
    >
      <img src="hide_image.svg" alt="hide image" />
    </button>
  {/if}
  <button
    class="price-remove"
    class:hidden={!$isAdminStored}
    aria-label="price remove"
    on:click={() => utils.removePrice(item, price)}
  >
    <img src="delete.svg" alt="delete" />
  </button>
</div>
