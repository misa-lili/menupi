<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let group: Group
  export let item: Item
</script>

<div class="flex">
  <button
    class="item-move-up"
    class:hidden={!$isAdminStored}
    aria-label="item move up"
    on:click={() => utils.moveItem(group, item, "up")}
  >
    <img src="arrow_up.svg" alt="arrow up" />
  </button>
  <button
    class="item-move-down"
    class:hidden={!$isAdminStored}
    aria-label="item move down"
    on:click={() => utils.moveItem(group, item, "down")}
  >
    <img src="arrow_down.svg" alt="arrow down" />
  </button>
  {#if !item.src}
    <button
      class:hidden={!$isAdminStored}
      aria-label="item image upload"
      on:click={() => utils.uploadImage(item)}
    >
      <img src="image.svg" alt="image" />
    </button>
  {:else}
    <button
      class:hidden={!$isAdminStored}
      aria-label="item image remove"
      on:click={() => utils.removeImage(item)}
    >
      <img src="hide_image.svg" alt="hide image" />
    </button>
  {/if}
  <button
    class="item-remove"
    class:hidden={!$isAdminStored}
    aria-label="item remove"
    on:click={() => utils.removeItem(group, item)}
  >
    <img src="delete.svg" alt="delete" />
  </button>
</div>
