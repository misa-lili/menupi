<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let group: Column
  export let column: Column
</script>

<div class="flex">
  <button
    class="column-move-up"
    class:hidden={!$isAdminStored}
    aria-label="column move up"
    on:click={() => utils.moveColumn(group, column, "up")}
  >
    <img src="arrow_up.svg" alt="arrow up" />
  </button>
  <button
    class="column-move-down"
    class:hidden={!$isAdminStored}
    aria-label="column move down"
    on:click={() => utils.moveColumn(group, column, "down")}
  >
    <img src="arrow_down.svg" alt="arrow down" />
  </button>
  {#if !column.src}
    <button
      class:hidden={!$isAdminStored}
      aria-label="column image upload"
      on:click={() => utils.uploadImage(column)}
    >
      <img src="image.svg" alt="image" />
    </button>
  {:else}
    <button
      class:hidden={!$isAdminStored}
      aria-label="column image remove"
      on:click={() => utils.removeImage(column)}
    >
      <img src="hide_image.svg" alt="hide image" />
    </button>
  {/if}
  <button
    class="column-remove"
    class:hidden={!$isAdminStored}
    aria-label="column remove"
    on:click={() => utils.removeColumn(group, column)}
  >
    <img src="delete.svg" alt="delete" />
  </button>
</div>
