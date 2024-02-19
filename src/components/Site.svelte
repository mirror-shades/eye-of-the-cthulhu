<script lang="ts">
  import DiceRoller from "./DiceRoller.svelte";
  import PlayerMenu from "./PlayerMenu.svelte";
  import LoadingScreen from "./LoadingScreen.svelte";
  import { loaded } from "../state";
</script>

<main>
  {#if !$loaded}
    <LoadingScreen />
  {/if}
  <div class:hidden={!$loaded}>
    <DiceRoller />
    <PlayerMenu />
  </div>
</main>

<style>
  .hidden {
    display: none;
  }
</style>
