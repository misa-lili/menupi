<script lang="ts">
  import { isAdminStored } from "../store"

  export let header: Header
</script>

{#if header.src}
  <img
    src={`https://menupi.s3.ap-northeast-2.amazonaws.com/${header.src}`}
    alt={header.value}
  />
{:else}
  <div
    class="header-value"
    contenteditable={$isAdminStored}
    on:input={(e) => (header.value = e.target.textContent)}
  >
    {header.value}
  </div>
{/if}
