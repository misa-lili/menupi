<script lang="ts">
  import { isAdminStored } from "../store"

  export let description: Description
</script>

{#if description.src}
  <img
    src={`https://menupi.s3.ap-northeast-2.amazonaws.com/${description.src}`}
    alt={description.value}
  />
{:else}
  <div
    class="description-value"
    contenteditable={$isAdminStored}
    on:input={(e) => (description.value = e.target.textContent)}
  >
    {description.value}
  </div>
{/if}
