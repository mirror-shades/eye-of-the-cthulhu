<script lang="ts">
  export let page: string;
  export let description: any;
  export let picture: any;
  import Papa from "papaparse";
  import StatBlock from "./statBlock.svelte";
  const publicSheet =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzXk5sQ0jOt9JkuHEAWkf3Py22znv9s3ieUKTga5EaCaSunDSceFjSzl15BW9jDPoVxNahOTHISse7/pub?gid=0&single=true&output=csv";
  const privateSheet =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuiths-iZbpt06WdN1c7dbeaxeIP-2v824-sfKvn8rDITQpvqObNyxIDFdBoBeaL2lMWrI-o7OnsgJ/pub?gid=0&single=true&output=csv";
  let attributesArray: any = [];
  let skillsArray: any = [];
  var result: string = "Roll a skill";
  var colour: string = "bg-primary";
  var tagline: string = "";
  var playerData: any;
  var sanList: any;
  var playerSan: number;
  $: if (page) {
    formatPlayerData();
    result = "Roll a skill";
    colour = "bg-primary";
    tagline = "-";
  }

  function fetchAndParseCSV() {
    fetch(publicSheet)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          complete: function (results, file) {
            playerData = results.data;
            formatPlayerData();
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching and parsing CSV:", error);
      });

    fetch(privateSheet)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          complete: function (results, file) {
            sanList = results.data;
            formatPlayerData();
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching and parsing CSV:", error);
      });
  }

  function formatPlayerData() {
    if (playerData) {
      let attributesLabels = playerData[1];
      let attributes: any;
      let skillsLabels = playerData[9];
      let skills: any;
      if (page === "cliff") {
        attributes = playerData[2];
        skills = playerData[10];
        playerSan = sanList[1][1];
      }
      if (page === "emily") {
        attributes = playerData[3];
        skills = playerData[11];
        playerSan = sanList[2][1];
      }
      if (page === "max") {
        attributes = playerData[4];
        skills = playerData[12];
        playerSan = sanList[3][1];
      }
      if (page === "mcgee") {
        attributes = playerData[5];
        skills = playerData[13];
        playerSan = sanList[4][1];
      }
      if (page === "melissa") {
        attributes = playerData[6];
        skills = playerData[14];
        playerSan = sanList[5][1];
      }
      attributes = attributes.slice(1, 10);
      attributesLabels = attributesLabels.slice(1, 10);
      skills = skills.slice(1);
      skillsLabels = skillsLabels.slice(1);
      attributesArray = attributesLabels.map((key: string, index: number) => [
        key,
        attributes[index],
      ]);
      skillsArray = skillsLabels.map((key: string, index: number) => [
        key,
        skills[index],
      ]);
    }
  }

  let rollStat = (skill: string, stat: number) => {
    var _roll: number | string = Math.floor(Math.random() * 100) + 1;
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
    if (skill === "SAN") {
      _roll = "?";
    }
    tagline = "You rolled " + skill + " and got " + _roll;
  };

  fetchAndParseCSV();
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
      <a
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1e-PEEer8UBXFdEslLNo2Qka2yu40KW2ao_IXO3NdqaE/edit#gid=0"
      >
        <img sizes="48px" alt="player" src={picture} /></a
      >
    </div>
    <ul class="columns-2 ml-32">
      {#each attributesArray as [key, stat]}
        <StatBlock {rollStat} {stat} {key} />
      {/each}
      <StatBlock {rollStat} stat={playerSan} key="SAN" />
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
