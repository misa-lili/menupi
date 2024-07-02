<script lang="ts">
  import { isAdminStored } from "../store"

  export let footer: Footer
</script>

{#if footer.src}
  <img
    src={`https://menupi.s3.ap-northeast-2.amazonaws.com/${footer.src}`}
    alt={footer.value}
  />
{:else}
  <div
    class="footer-value"
    contenteditable={$isAdminStored}
    on:input={(e) => (footer.value = e.target.textContent)}
  >
    {footer.value}
  </div>
{/if}
