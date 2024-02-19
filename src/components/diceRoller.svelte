<script lang="ts">
  let result = "-"; // Variable to store and display the dice roll result

  // Function to roll a dice of 'sides' number of sides
  function rollDice(sides: number) {
    result = `Roll result: ${1 + Math.floor(Math.random() * sides)}`;
  }
</script>

<div class="flex mt-12 flex-col items-center justify-center">
  <ul
    class="menu menu-vertical lg:menu-horizontal bg-accent rounded-box text-black"
  >
    <li>
      <button on:click={() => rollDice(2)}>d2</button>
    </li>
    <li>
      <button on:click={() => rollDice(4)}>d4</button>
    </li>
    <li>
      <button on:click={() => rollDice(6)}>d6</button>
    </li>
    <li>
      <button on:click={() => rollDice(8)}>d8</button>
    </li>
    <li>
      <button on:click={() => rollDice(10)}>d10</button>
    </li>
    <li>
      <button on:click={() => rollDice(12)}>d12</button>
    </li>
    <li>
      <button on:click={() => rollDice(20)}>d20</button>
    </li>
  </ul>

  <div class="result">
    {#if result}
      <p>{result}</p>
    {/if}
  </div>
</div>
