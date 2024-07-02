<script lang="ts">
  import { isAdminStored } from "../store"

  export let group: Group
</script>

{#if group.src}
  <img
    src={`https://menupi.s3.ap-northeast-2.amazonaws.com/${group.src}`}
    alt={group.value}
  />
{:else}
  <div
    class="group-value"
    contenteditable={$isAdminStored}
    on:input={(e) => (group.value = e.target.textContent)}
  >
    {group.value}
  </div>
{/if}
