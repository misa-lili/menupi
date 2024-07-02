<script lang="ts">
  import { isAdminStored } from "../store"
  import * as utils from "../libs/utils"
</script>

<button
  class="footers-add"
  class:hidden={!$isAdminStored}
  aria-label="footer add"
  on:click={() => utils.addFooter()}
>
  <img src="add.svg" alt="add" /> Footer
</button>
