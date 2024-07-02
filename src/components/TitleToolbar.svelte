<script lang="ts">
  import { menuStored, isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let title: Title
</script>

<div class="flex">
  <button
    class="title-move-up"
    class:hidden={!$isAdminStored}
    aria-label="title move up"
    on:click={() => utils.moveTitle(title, "up")}
  >
    <img src="arrow_up.svg" alt="arrow up" />
  </button>
  <button
    class="title-move-down"
    class:hidden={!$isAdminStored}
    aria-label="title move down"
    on:click={() => utils.moveTitle(title, "down")}
  >
    <img src="arrow_down.svg" alt="arrow down" />
  </button>
  {#if !title.src}
    <button
      class:hidden={!$isAdminStored}
      aria-label="title image upload"
      on:click={() => utils.uploadImageTitle(title)}
    >
      <img src="image.svg" alt="image" />
    </button>
  {:else}
    <button
      class:hidden={!$isAdminStored}
      aria-label="title image remove"
      on:click={() => utils.removeImageTitle(title)}
    >
      <img src="hide_image.svg" alt="hide image" />
    </button>
  {/if}
  <button
    class="title-remove"
    class:hidden={!$isAdminStored}
    aria-label="title remove"
    on:click={() => utils.removeTitle(title)}
  >
    <img src="delete.svg" alt="delete" />
  </button>
</div>
