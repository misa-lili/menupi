<script lang="ts">
  import { isAdmin, menu } from "../store"
  import {
    addGroup,
    moveGroup,
    removeGroup,
    addItem,
    moveItem,
    removeItem,
  } from "../libs/utils"

  const randomGroupValues = [
    "Tintos",
    "Blancos",
    "Rosados",
    "Espumosos",
    "Dulces",
    "Secos",
    "Generosos",
    "Jóvenes",
    "Crianza",
    "Reserva",
    "Gran Reserva",
    "Vendimia Tardía",
  ]
</script>

<section id="skin">
  <div id="section--title">
    <div id="title-value" contenteditable={$isAdmin}>
      {$menu.json.titles?.at(0)?.value ?? "Vinos"}
    </div>
    <div class="text-center" contenteditable={$isAdmin}>
      {$menu.json.titles.at(1)?.value ?? "🍷"}
    </div>
    <div id="header" class="text-end" contenteditable={$isAdmin}>
      {$menu.json.headers?.at(0)?.value ?? "@bar_vinos"}
    </div>
  </div>

  <br />
  <br />
  <br />

  {#each $menu.json.groups || [] as group, idx}
    {#if $isAdmin}
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
        <div class="group--value" contenteditable={$isAdmin}>
          {group.value}
        </div>

        <div class="center" contenteditable={$isAdmin}>
          {group.cols?.at(0)?.value ?? ""}
        </div>
        <div class="center" contenteditable={$isAdmin}>
          {group.cols?.at(1)?.value ?? ""}
        </div>
      </div>
      <hr />
      <ul>
        {#each group.items || [] as item}
          {#if $isAdmin}
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
                <div class="item--value" contenteditable={$isAdmin}>
                  {item.value}
                </div>
                <div class="item--description" contenteditable={$isAdmin}>
                  {item.descriptions?.at(0)?.value ?? ""}
                </div>
              </div>
              <div class="center item--price" contenteditable={$isAdmin}>
                {item.prices?.at(0)?.value ?? ""}
              </div>
              <div class="center item--price" contenteditable={$isAdmin}>
                {item.prices?.at(0)?.value ?? ""}
              </div>
            </div>
          </li>
        {/each}
      </ul>
      {#if $isAdmin}
        <button on:click={() => addItem(group)}> Add New Item </button>
      {/if}
    </div>
  {/each}
  {#if $isAdmin}
    <button on:click={addGroup}> Add New Group </button>
  {/if}
  <br />
  <br />
  <br />

  <!-- Footer -->
  {#each $menu.json.footers || [] as footer}
    <div class="footer" contenteditable={$isAdmin}>
      {footer.value}
    </div>
  {/each}
</section>

<style>
  hr {
    @apply h-px  bg-stone-600 border-0 m-0;
  }
  section#skin {
    @apply container m-auto;

    @apply w-full p-12;
    @apply lg:max-w-screen-md lg:p-16;

    border-radius: 2rem;
    background: linear-gradient(145deg, #f5f0ea, #e6d9d9);
    color: #1d1918;
    font-size: 16px;
    line-height: 1.6;
  }

  #section--title {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
