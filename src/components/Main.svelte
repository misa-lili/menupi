<script lang="ts">
  import {
    isAdminStored,
    menuStored,
    eventBus,
    menuBackedUpStored,
  } from "../store"
  import { save, rollback, login, logout, createNewMenu } from "../libs/utils"
  import Vinos from "../skins/Vinos.svelte"
  import Default from "../skins/Default-v1.svelte"
  import Dosisool from "../skins/Dosisool.svelte"

  export let menu: Menu
  $: {
    $menuStored = menu
    $menuBackedUpStored = JSON.parse(JSON.stringify(menu))
  }

  const skins = ["Default-v1", "Vinos", "Dosisool"]
</script>

<main>
  <section id="top">
    {#if $isAdminStored}
      <select name="skins" bind:value={$menuStored.json.skinIdx}>
        {#each skins as skin, idx}
          <option value={idx}> {skin} </option>
        {/each}
      </select>
      <button on:click={save}>
        <img src="save.svg" alt="save" />
      </button>
      <!-- <button on:click={rollback}>Roll Back</button> -->
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
        <button on:click={login}>
          <img src="login.svg" alt="login" />
        </button>
      {:else}
        <button on:click={logout}>
          <img src="logout.svg" alt="logout" />
        </button>
      {/if}
    </div>
    <div></div>
    <div>
      <button on:click={createNewMenu}>
        <img src="add_circle.svg" alt="add menu" />
      </button>
    </div>
    <div>Created by Menupi</div>
    <div>MIT License © 2023 Misa Lili</div>
  </section>
</main>

<style>
  main {
    @apply p-3;
  }

  section#top {
    @apply font-serif font-light text-sm text-stone-600;
    @apply flex justify-end gap-1 mb-2;
  }

  section#bottom {
    @apply font-serif font-extralight text-xs text-stone-600/70;
    @apply flex flex-col items-end;
    @apply my-9;
  }

  :global(button) {
    @apply bg-stone-600 text-white;
    @apply hover:bg-stone-700;
    @apply text-stone-300 font-thin italic font-mono;
    @apply flex;
    @apply pl-0.5 pr-1.5;
  }
</style>
