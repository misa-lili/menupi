<script lang="ts">
  export let menu: Menu

  let isAdmin = true
  const menuBackedUp = JSON.parse(JSON.stringify(menu))

  function addGroup() {
    menu.groups.push({
      uuid: "new-group",
      value: "New Group",
      cols: [],
      items: [
        {
          uuid: "new-item",
          value: "New Item",
          descriptions: [{ value: "Description" }],
          prices: [{ value: "Price 1" }, { value: "Price 2" }],
        },
      ],
    })
    menu = menu
  }

  function moveGroup(group: Group, direction: "up" | "down") {
    const index = menu.groups.indexOf(group)
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === menu.groups.length - 1)
    ) {
      return
    }
    const newIndex = direction === "up" ? index - 1 : index + 1
    const temp = menu.groups[index]
    menu.groups[index] = menu.groups[newIndex]
    menu.groups[newIndex] = temp
    menu = menu
  }

  function removeGroup(group: Group) {
    menu.groups = menu.groups.filter((g) => g !== group)
    menu = menu
  }

  function addItem(group: Group) {
    group.items.push({
      uuid: "new-item",
      value: "New Item",
      descriptions: [{ value: "Description" }],
      prices: [{ value: "Price 1" }, { value: "Price 2" }],
    })
    menu = menu
  }

  function moveItem(item: Item, direction: "up" | "down") {
    const group = menu.groups.find((group) => group.items.includes(item))
    const index = group.items.indexOf(item)
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === group.items.length - 1)
    ) {
      return
    }
    const newIndex = direction === "up" ? index - 1 : index + 1
    const temp = group.items[index]
    group.items[index] = group.items[newIndex]
    group.items[newIndex] = temp
    menu = menu
  }

  function removeItem(item: Item) {
    const group = menu.groups.find((group) => group.items.includes(item))
    group.items = group.items.filter((i) => i !== item)
    menu = menu
  }
</script>

<main>
  <div id="section--title">
    <div id="title-value" contenteditable={isAdmin}>
      {menu.titles?.at(0)?.value ?? ""}
    </div>
    <div contenteditable={isAdmin}>{menu.titles.at(1)?.value ?? ""}</div>
    <div id="header" contenteditable={isAdmin}>
      {menu.headers?.at(0)?.value ?? ""}
    </div>
  </div>

  <br />
  <br />
  <br />

  {#each menu.groups || [] as group, idx}
    {#if isAdmin}
      <div class="group-editor">
        <button on:click={() => moveGroup(group, "up")}> Move Group Up </button>
        <button on:click={() => moveGroup(group, "down")}>
          Move Group Down
        </button>
        <button on:click={() => removeGroup(group)}>
          Remove {group.value} Group
        </button>
      </div>
    {/if}
    <div class="group">
      <div class="grid">
        <div class="group--value" contenteditable={isAdmin}>
          {group.value}
        </div>

        <div class="center" contenteditable={isAdmin}>
          {group.cols?.at(0)?.value ?? ""}
        </div>
        <div class="center" contenteditable={isAdmin}>
          {group.cols?.at(1)?.value ?? ""}
        </div>
      </div>
      <hr />
      <ul>
        {#each group.items || [] as item}
          {#if isAdmin}
            <div class="item-editor">
              <button on:click={() => moveItem(item, "up")}>
                Move Item Up
              </button>
              <button on:click={() => moveItem(item, "down")}>
                Move Item Down
              </button>
              <button on:click={() => removeItem(item)}>
                Remove {item.value} Item
              </button>
            </div>
          {/if}
          <li>
            <div class="grid">
              <div>
                <div class="item--value" contenteditable={isAdmin}>
                  {item.value}
                </div>
                <div class="item--description" contenteditable={isAdmin}>
                  {item.descriptions?.at(0)?.value ?? ""}
                </div>
              </div>
              <div class="center item--price" contenteditable={isAdmin}>
                {item.prices?.at(0)?.value ?? ""}
              </div>
              <div class="center item--price" contenteditable={isAdmin}>
                {item.prices?.at(0)?.value ?? ""}
              </div>
            </div>
          </li>
        {/each}
      </ul>
      {#if isAdmin}
        <button on:click={() => addItem(group)}> Add New Item </button>
      {/if}
    </div>
  {/each}
  {#if isAdmin}
    <button on:click={addGroup}> Add New Group </button>
  {/if}
  <br />
  <br />
  <br />

  <!-- Footer -->
  {#each menu.footers || [] as footer}
    <div class="group">
      <div class="grid">
        <div class="group--value" contenteditable={isAdmin}>
          {footer.value}
        </div>
      </div>
    </div>
  {/each}
</main>

<style>
  main {
    margin: auto;
    padding: 10vw;
    max-width: 600px;
    min-height: 100vh;
    height: 100%;
    border-radius: 2rem;
    background: linear-gradient(145deg, #f5f0ea, #e6d9d9);

    color: #1d1918;
    font-size: 16px;
    line-height: 1.6;
  }
  #section--title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #title-value {
    font-weight: 800;
    opacity: 0.9;
  }

  #header {
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    font-family: serif;
  }

  .group {
    margin-bottom: 2.5rem;
  }

  .group--value {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  .group-editor {
    margin-top: 1rem;
  }

  .item-editor {
    margin-top: 2rem;
    margin-bottom: -1rem;
  }

  button {
    opacity: 0.5;
    font-size: 12px;
  }

  hr {
    margin: 0;
    opacity: 0.6;
    background-color: black;
  }

  .grid {
    display: grid;
    grid-template-columns: 8fr 2fr 2fr;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item--value {
    font-weight: 600;
  }

  .item--description {
    font-size: 14px;
    opacity: 0.8;
    font-style: italic;
  }

  .item--price {
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    font-family: serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
