<script lang="ts">
  export let playerCharacter: any;
  export let description: any;
  export let picture: any;
  import StatBlock from "./statBlock.svelte";
  let attributesArray = Object.entries(playerCharacter.attributes);
  let skillsArray = Object.entries(playerCharacter.skills);
  var result: string = "Roll a skill";
  var colour: string = "bg-primary";
  var tagline: string = "";
  $: if (playerCharacter) {
    attributesArray = Object.entries(playerCharacter.attributes);
    skillsArray = Object.entries(playerCharacter.skills);
    result = "Roll a skill";
    colour = "bg-primary";
    tagline = "-";
  }
  let rollStat = (skill: string, stat: number) => {
    var _roll = Math.floor(Math.random() * 100) + 1;
    if (_roll === 1) {
      result = "Critical Success";
      colour = "bg-gold";
    } else if (_roll <= stat / 5) {
      result = "Extreme Success";
      colour = "bg-green-500";
    } else if (_roll <= stat / 2) {
      result = "Great Success";
      colour = "bg-green-400";
    } else if (_roll <= stat) {
      result = "Success";
      colour = "bg-green-300";
    } else if (_roll > 95) {
      result = "Fumble";
      colour = "bg-red-800";
    } else {
      result = "Fail";
      colour = "bg-red-300";
    }
    tagline = "You rolled " + skill + " and got " + _roll;
  };
</script>

<main>
  <div class="card w-40% shadow-xl place-items-center">
    <div class="h-12" />
    <div
      class="card {colour} text-black px-6 py-3 shadow-xl flex flex-col items-center justify-center"
    >
      <br />
      <p>{result}</p>
    </div>
    <div class="mb-6 align-text-center">
      {tagline}
    </div>

    {description}
    <div class="h-6" />

    <div class="absolute mt-[165px] mr-[650px] w-48 h-48 border">
      <img sizes="48px" alt="player" src={picture} />
    </div>
    <ul class="columns-2 ml-32">
      {#each attributesArray as [key, stat]}
        <StatBlock {rollStat} {stat} {key} />
      {/each}
    </ul>
    <div class="h-12" />
    <ul class="columns-3">
      {#each skillsArray as [key, stat]}
        <StatBlock {rollStat} {stat} {key} />
      {/each}
    </ul>
    <div class="h-12" />
  </div>
</main>

<style>
  .columns-2 {
    width: 50%;
    -webkit-column-count: 2; /* Chrome, Safari, Opera */
    -moz-column-count: 2; /* Firefox */
    column-count: 2;
  }
  .columns-3 {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;
  }
</style>
