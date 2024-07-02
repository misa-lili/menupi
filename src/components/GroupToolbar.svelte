<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let group: Group
</script>

<div class="flex">
  <button
    class="group-move-up"
    class:hidden={!$isAdminStored}
    aria-label="group move up"
    on:click={() => utils.moveGroup(group, "up")}
  >
    <img src="arrow_up.svg" alt="arrow up" />
  </button>
  <button
    class="group-move-down"
    class:hidden={!$isAdminStored}
    aria-label="group move down"
    on:click={() => utils.moveGroup(group, "down")}
  >
    <img src="arrow_down.svg" alt="arrow down" />
  </button>
  {#if !group.src}
    <button
      class:hidden={!$isAdminStored}
      aria-label="group image upload"
      on:click={() => utils.uploadImage(group)}
    >
      <img src="image.svg" alt="image" />
    </button>
  {:else}
    <button
      class:hidden={!$isAdminStored}
      aria-label="group image remove"
      on:click={() => utils.removeImage(group)}
    >
      <img src="hide_image.svg" alt="hide image" />
    </button>
  {/if}
  <button
    class="group-remove"
    class:hidden={!$isAdminStored}
    aria-label="group remove"
    on:click={() => utils.removeGroup(group)}
  >
    <img src="delete.svg" alt="delete" />
  </button>
</div>
