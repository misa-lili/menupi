<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let item: Item
</script>

<button
  class="cols-add"
  class:hidden={!$isAdminStored}
  aria-label="description add"
  on:click={() => utils.addDescription(item)}
>
  <img src="add.svg" alt="add" /> Description
</button>
