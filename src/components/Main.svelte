<script lang="ts">
  import { isAdmin, eventBus } from "../store"
  import Vinos from "../skins/Vinos.svelte"
  import Default from "../skins/Default.svelte"

  export let menu: Menu

  function changeSkin() {
    if (
      confirm(
        "저장하지 않은 변경 사항이 있다면 잃게 됩니다.\n그래도 스킨을 변경하시겠습니까?",
      ) === false
    ) {
      return
    }

    if (menu.json.skinIdx === 0) {
      menu.json.skinIdx = 1
    } else {
      menu.json.skinIdx = 0
    }
  }

  async function login() {
    const response = await fetch("http://localhost:4321/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: menu.name,
        password: prompt("Enter your password"),
      }),
    })

    if (response.ok) {
      // verified
      $isAdmin = true
    } else {
      // invalid password
      alert("Failed to login")
    }
  }

  function logout() {
    $isAdmin = false
  }

  async function createNewMenu() {
    const name = prompt("Enter the name of the new menu")
    if (name === null) {
      return
    }
    const exist = await fetch(`http://localhost:4321/menus`, {
      method: "POST",
      body: JSON.stringify({ name }),
    })
    if (!exist.ok) {
      return alert("Name already exists")
    }
    const email = prompt("Enter your email")
    if (email === null) {
      return
    }
    const password = prompt("Enter your password")
    if (password === null) {
      return
    }
    const confirmPassword = prompt("Confirm your password")
    if (confirmPassword !== password) {
      return alert("Passwords do not match")
    }

    const response = await fetch("http://localhost:4321/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    if (response.ok) {
      alert("New menu created")
      window.location.replace(`/${name}`)
    } else {
      alert("Failed to create new menu")
    }
  }
</script>

<main>
  <section id="top">
    {#if $isAdmin}
      <!-- <button on:click={changeSkin}>Change Skin</button> -->
      <button on:click={() => eventBus.trigger("save")}>Save</button>
      <button on:click={() => eventBus.trigger("rollback")}>Roll Back</button>
    {/if}
  </section>

  {#if menu.json.skinIdx === 0}
    <!-- <Default {menu} /> -->
    <Vinos {menu} />
  {:else if menu.json.skinIdx === 1}
    <Vinos {menu} />
  {:else}
    <p>Unknown skin</p>
  {/if}

  <section id="bottom">
    <div>
      {#if !$isAdmin}
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
