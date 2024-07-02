<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let item: Item
  export let description: Description
</script>

<div class="flex">
  <button
    class="description-move-up"
    class:hidden={!$isAdminStored}
    aria-label="description move up"
    on:click={() => utils.moveDescription(item, description, "up")}
  >
    <img src="arrow_up.svg" alt="arrow up" />
  </button>
  <button
    class="description-move-down"
    class:hidden={!$isAdminStored}
    aria-label="description move down"
    on:click={() => utils.moveDescription(item, description, "down")}
  >
    <img src="arrow_down.svg" alt="arrow down" />
  </button>
  {#if !description.src}
    <button
      class:hidden={!$isAdminStored}
      aria-label="description image upload"
      on:click={() => utils.uploadImage(description)}
    >
      <img src="image.svg" alt="image" />
    </button>
  {:else}
    <button
      class:hidden={!$isAdminStored}
      aria-label="description image remove"
      on:click={() => utils.removeImage(description)}
    >
      <img src="hide_image.svg" alt="hide image" />
    </button>
  {/if}
  <button
    class="description-remove"
    class:hidden={!$isAdminStored}
    aria-label="description remove"
    on:click={() => utils.removeDescription(item, description)}
  >
    <img src="delete.svg" alt="delete" />
  </button>
</div>
