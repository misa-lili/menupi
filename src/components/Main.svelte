<script lang="ts">
  import { menu as menuStored, isAdmin } from "../store"
  import Vinos from "../skins/Vinos.svelte"
  import Default from "../skins/Default.svelte"

  export let menu: Menu

  $menuStored = menu

  const components = [Default, Vinos]

  function changeSkin() {
    if (
      confirm(
        "저장하지 않은 변경 사항이 있다면 잃게 됩니다.\n그래도 스킨을 변경하시겠습니까?",
      ) === false
    ) {
      return
    }

    if (menu.skinIdx === 0) {
      menu.skinIdx = 1
    } else {
      menu.skinIdx = 0
    }
  }

  function login() {
    $isAdmin = true
  }

  function logout() {
    $isAdmin = false
  }
</script>

<button on:click={login}>Login</button>
<button on:click={logout}>Logout</button>
<button on:click={changeSkin}>Change Skin</button>

{#if menu.skinIdx === 0}
  <Default />
{:else if menu.skinIdx === 1}
  <Vinos />
{:else}
  <p>Unknown skin</p>
{/if}

<style>
  p {
    color: mediumaquamarine;
  }
</style>
