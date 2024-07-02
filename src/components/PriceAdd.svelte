<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let item: Item
</script>

<button
  class="cols-add"
  class:hidden={!$isAdminStored}
  aria-label="price add"
  on:click={() => utils.addPrice(item)}
>
  <img src="add.svg" alt="add" /> Price
</button>
