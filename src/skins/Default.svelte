<script lang="ts">
  import { isAdmin } from "../store"
  import { addGroup } from "../libs/utils"

  export let menu: Menu
</script>

<h1>{menu.json.titles?.at(0)?.value ?? "New Menu"}</h1>
<h1>admin: {$isAdmin}</h1>

{#each menu.json.titles as title}
  <h1>{title.value}</h1>
{/each}

{#each menu.json.groups as group}
  <div>
    <h2>{group.value}</h2>
    {#each group.items as item}
      <div>
        <h3>{item.value}</h3>
      </div>
    {/each}
  </div>
{/each}
<button on:click={addGroup}>add group</button>

<style>
  h1 {
    color: red;
  }
</style>
