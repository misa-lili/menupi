<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let footer: Footer
</script>

<div class="flex">
  <button
    class="footer-move-up"
    class:hidden={!$isAdminStored}
    aria-label="footer move up"
    on:click={() => utils.moveFooter(footer, "up")}
  >
    <img src="arrow_up.svg" alt="arrow up" />
  </button>
  <button
    class="footer-move-down"
    class:hidden={!$isAdminStored}
    aria-label="footer move down"
    on:click={() => utils.moveFooter(footer, "down")}
  >
    <img src="arrow_down.svg" alt="arrow down" />
  </button>
  {#if !footer.src}
    <button
      class:hidden={!$isAdminStored}
      aria-label="footer image upload"
      on:click={() => utils.uploadImage(footer)}
    >
      <img src="image.svg" alt="image" />
    </button>
  {:else}
    <button
      class:hidden={!$isAdminStored}
      aria-label="footer image remove"
      on:click={() => utils.removeImage(footer)}
    >
      <img src="hide_image.svg" alt="hide image" />
    </button>
  {/if}
  <button
    class="footer-remove"
    class:hidden={!$isAdminStored}
    aria-label="footer remove"
    on:click={() => utils.removeFooter(footer)}
  >
    <img src="delete.svg" alt="delete" />
  </button>
</div>
