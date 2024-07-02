<script lang="ts">
  import { isAdminStored } from "../store"

  export let price: Price
</script>

{#if price.src}
  <img
    src={`https://menupi.s3.ap-northeast-2.amazonaws.com/${price.src}`}
    alt={price.value}
  />
{:else}
  <div
    class="price-value"
    contenteditable={$isAdminStored}
    on:input={(e) => (price.value = e.target.textContent)}
  >
    {price.value}
  </div>
{/if}
