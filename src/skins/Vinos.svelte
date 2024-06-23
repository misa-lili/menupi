<script lang="ts">
  export let menu: Menu

  // function addGroup() {
  //   console.log("hi")
  //   alert("a")

  //   dynamicMenu.groups.push({
  //     value: "New Group",
  //     cols: [{ value: "Col 1" }, { value: "Col 2" }],
  //     items: [
  //       {
  //         value: "New Item",
  //         descriptions: [{ value: "Description" }],
  //         prices: [{ value: "Price 1" }, { value: "Price 2" }],
  //       },
  //     ],
  //   })
  // }
</script>

<main>
  <div id="section--title">
    <div id="title-value" contenteditable="true">
      {menu.titles.at(0)?.value}
    </div>
    <div contenteditable="true">{menu.titles.at(1)?.value}</div>
    <div id="header" contenteditable="true">
      {menu.headers.at(0)?.value}
    </div>
  </div>

  <br />
  <br />
  <br />

  {#each menu.groups as group, idx}
    <div class="group">
      <div class="grid">
        <div class="group--value" contenteditable="true">
          {group.value}
        </div>

        <div class="center" contenteditable="true">
          {group.cols?.at(0)?.value ?? ""}
        </div>
        <div class="center" contenteditable="true">
          {group.cols?.at(1)?.value ?? ""}
        </div>
      </div>
      <hr />
      <ul>
        {#each group.items as item}
          <li>
            <div class="grid">
              <div>
                <div class="item--value" contenteditable="true">
                  {item.value}
                </div>
                <div class="item--description" contenteditable="true">
                  {item.descriptions?.at(0)?.value}
                </div>
              </div>
              <div class="center item--price" contenteditable="true">
                {item.prices.at(0)?.value || ""}
              </div>
              <div class="center item--price" contenteditable="true">
                {item.prices ? item.prices[1].value : ""}
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/each}

  <br />
  <br />
  <br />
  <!-- 
  <button
    id="add-group"
    on:click={() => {
      addGroup()
    }}>add group</button
  > -->

  <!-- Footer -->
  {#each menu.footers as footer}
    <div class="group">
      <div class="grid">
        <div class="group--value" contenteditable="true">
          {footer.value}
        </div>
      </div>
    </div>
  {/each}
</main>

<style>
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

  main {
    margin: auto;
    padding: 10vw;
    max-width: 600px;
    height: 100vh;
    border-radius: 2rem;
    background: linear-gradient(145deg, #f5f0ea, #e6d9d9);

    color: #1d1918;
    font-size: 16px;
    line-height: 1.6;
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

  flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
