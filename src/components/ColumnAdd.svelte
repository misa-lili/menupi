<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"

  export let group: Group
</script>

<button
  class="cols-add"
  class:hidden={!$isAdminStored}
  aria-label="column add"
  on:click={() => utils.addColumn(group)}
>
  <img src="add.svg" alt="add" /> Column
</button>
