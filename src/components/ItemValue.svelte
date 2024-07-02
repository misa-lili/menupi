<script lang="ts">
  import { isAdminStored } from "../store"

  export let item: Item
</script>

{#if item.src}
  <img
    src={`https://menupi.s3.ap-northeast-2.amazonaws.com/${item.src}`}
    alt={item.value}
  />
{:else}
  <div
    class="item-value"
    contenteditable={$isAdminStored}
    on:input={(e) => (item.value = e.target.textContent)}
  >
    {item.value}
  </div>
{/if}
