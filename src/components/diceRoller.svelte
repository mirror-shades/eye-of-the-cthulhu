<script lang="ts">
  import { writable } from "svelte/store";

  // Explicitly type the results store as an array of strings
  const results = writable<string[]>([]);

  // Function to roll a dice and update the tally with 'sides' number of sides
  function rollDice(sides: number): void {
    const roll = 1 + Math.floor(Math.random() * sides);
    results.update((currentResults) => {
      const newResults = [...currentResults, `Roll (d${sides}): ${roll}`];
      // Keep only the last X results, adjust the number to show more or less
      return newResults.slice(-5); // Adjust '-5' to store more or fewer results
    });
  }
</script>

<div class="flex mt-12 flex-col items-center justify-center">
  <ul
    class="menu menu-vertical lg:menu-horizontal bg-accent rounded-box text-black"
  >
    <!-- Simplify by iterating over an array of dice sides -->
    {#each [2, 3, 4, 6, 8, 10, 12, 20, 100] as sides}
      <li>
        <button on:click={() => rollDice(sides)}>d{sides}</button>
      </li>
    {/each}
  </ul>

  <div
    class="results"
    style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"
  >
    <!-- Subscribe to the Svelte store and display recent results, now horizontally -->
    <ul style="display: flex; list-style: none; padding: 0;">
      {#each $results as result, index}
        <li
          style="font-size: {index === $results.length - 1
            ? '1rem'
            : '0.75rem'};"
        >
          {result};&nbsp;
        </li>
      {/each}
    </ul>
  </div>
</div>
