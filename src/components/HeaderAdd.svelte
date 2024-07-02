<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"
</script>

<button
  class="headers-add"
  class:hidden={!$isAdminStored}
  aria-label="header add"
  on:click={() => utils.addHeader()}
>
  <img src="add.svg" alt="add" /> Header
</button>
