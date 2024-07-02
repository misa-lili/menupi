<script lang="ts">
  import { menuStored, isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let header: Header
</script>

<div class="flex">
  <button
    class="header-move-up"
    class:hidden={!$isAdminStored}
    aria-label="header move up"
    on:click={() => utils.moveHeader(header, "up")}
  >
    <img src="arrow_up.svg" alt="arrow up" />
  </button>
  <button
    class="header-move-down"
    class:hidden={!$isAdminStored}
    aria-label="header move down"
    on:click={() => utils.moveHeader(header, "down")}
  >
    <img src="arrow_down.svg" alt="arrow down" />
  </button>
  {#if !header.src}
    <button
      class:hidden={!$isAdminStored}
      aria-label="header image upload"
      on:click={() => utils.uploadImage(header)}
    >
      <img src="image.svg" alt="image" />
    </button>
  {:else}
    <button
      class:hidden={!$isAdminStored}
      aria-label="header image remove"
      on:click={() => utils.removeImage(header)}
    >
      <img src="hide_image.svg" alt="hide image" />
    </button>
  {/if}
  <button
    class="header-remove"
    class:hidden={!$isAdminStored}
    aria-label="header remove"
    on:click={() => utils.removeHeader(header)}
  >
    <img src="delete.svg" alt="delete" />
  </button>
</div>
