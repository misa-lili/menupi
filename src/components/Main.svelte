<script lang="ts">
  import {
    isAdminStored,
    menuStored,
    eventBus,
    menuBackedUpStored,
  } from "../store"
  import { save, rollback, login, logout, createNewMenu } from "../libs/utils"
  import Vinos from "../skins/Vinos.svelte"
  import Default from "../skins/Default.svelte"
  import Dosisool from "../skins/Dosisool.svelte"

  export let menu: Menu
  $: {
    $menuStored = menu
    $menuBackedUpStored = JSON.parse(JSON.stringify(menu))
  }

  const skins = ["Default", "Vinos", "Dosisool"]
</script>

<main>
  <section id="top">
    {#if $isAdminStored}
      <select name="skins" bind:value={$menuStored.json.skinIdx}>
        {#each skins as skin, idx}
          <option value={idx}> {skin} </option>
        {/each}
      </select>
      <button on:click={save}>Save</button>
      <button on:click={rollback}>Roll Back</button>
    {/if}
  </section>

  {#if $menuStored.json.skinIdx === 0}
    <Default />
  {:else if $menuStored.json.skinIdx === 1}
    <Vinos />
  {:else if $menuStored.json.skinIdx === 2}
    <Dosisool />
  {/if}

  <section id="bottom">
    <div>
      {#if !$isAdminStored}
        <button on:click={login}>Login</button>
      {:else}
        <button on:click={logout}>Logout</button>
      {/if}
    </div>
    <div></div>
    <div>
      <button on:click={createNewMenu}>Create new menu</button>
    </div>
    <div>Made with Menupi</div>
    <div>
      <p>MIT License © 2023 Misa Lili</p>
    </div>
  </section>
</main>

<style>
  main {
    @apply p-3;
  }

  section#top {
    @apply font-serif font-light text-sm text-stone-600;
    @apply text-end;
  }

  section#bottom {
    @apply font-serif font-light text-sm text-stone-600;
    @apply text-end;
    @apply my-9;
  }

  :global(button) {
    @apply bg-stone-600 text-white p-0 pr-1 mb-0.5;
    @apply hover:bg-stone-700;
    @apply text-stone-300 font-thin italic font-mono;
  }
</style>
