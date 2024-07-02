<script lang="ts">
  import { isAdminStored } from "../store"

  export let column: Column
</script>

{#if column.src}
  <img
    src={`https://menupi.s3.ap-northeast-2.amazonaws.com/${column.src}`}
    alt={column.value}
  />
{:else}
  <div
    class="column-value"
    contenteditable={$isAdminStored}
    on:input={(e) => (column.value = e.target.textContent)}
  >
    {column.value}
  </div>
{/if}
