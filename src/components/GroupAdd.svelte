<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"
</script>

<button
  class="groups-add"
  class:hidden={!$isAdminStored}
  aria-label="group add"
  on:click={() => utils.addGroup()}
>
  <img src="add.svg" alt="add" /> Group
</button>
