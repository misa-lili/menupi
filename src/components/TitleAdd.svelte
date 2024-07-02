<script lang="ts">
  import { menuStored, isAdminStored } from "../store"
  import * as utils from "../libs/utils"
</script>

<button
  class="titles-add"
  class:hidden={!$isAdminStored}
  aria-label="title add"
  on:click={() => utils.addTitle()}
>
  <img src="add.svg" alt="add" /> Title
</button>
