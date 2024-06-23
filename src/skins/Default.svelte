<script lang="ts">
  import { isAdmin, menu } from "../store"
</script>

<h1>{$menu.titles.at(0).value}</h1>
<h1>admin: {$isAdmin}</h1>

<style>
  h1 {
    color: red;
  }
</style>
