<script lang="ts">
  import { isAdminStored } from "../store"

  export let title: Title
</script>

{#if title.src}
  <img
    src={`https://menupi.s3.ap-northeast-2.amazonaws.com/${title.src}`}
    alt={title.value}
  />
{:else}
  <div
    class="title-value"
    contenteditable={$isAdminStored}
    on:input={(e) => (title.value = e.target.textContent)}
  >
    {title.value}
  </div>
{/if}
