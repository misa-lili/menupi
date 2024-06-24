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

    if (menu.json.skinIdx === 0) {
      menu.json.skinIdx = 1
    } else {
      menu.json.skinIdx = 0
    }
  }

  function login() {
    $isAdmin = true
  }

  function logout() {
    $isAdmin = false
  }

  async function createNewMenu() {
    const name = prompt("Enter the name of the new menu")
    if (name === null) {
      return alert("Name is required")
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
      return alert("Email is required")
    }
    const password = prompt("Enter your password")
    if (password === null) {
      return alert("Password is required")
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
  {#if menu.json.skinIdx === 0}
    <Default />
  {:else if menu.json.skinIdx === 1}
    <Vinos />
  {:else}
    <p>Unknown skin</p>
  {/if}

  <section>
    <div>
      {#if $isAdmin}
        <button on:click={logout}>Logout</button>
      {:else}
        <button on:click={login}>Login</button>
      {/if}
    </div>
    <div>
      <button on:click={changeSkin}>Change Skin</button>
    </div>
    <div>
      <p>
        <a on:click={createNewMenu}>Create new menu</a>
      </p>
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
  section {
    @apply font-serif font-light text-sm text-stone-600;
    @apply text-end;
    @apply my-9;
  }
</style>
