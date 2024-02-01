<script lang="ts">
  import PlayerPage from "./playerPage.svelte";
  //@ts-ignore variable generated from a js file
  import { playerList } from "../assets/buildPlayerList";
  import cliff from "../assets/cliff.png";
  import max from "../assets/max.png";
  import emily from "../assets/emily.png";
  import mcgee from "../assets/mcgee.png";
  import melissa from "../assets/melissa.png";
  let picture = cliff;
  let dummy;
  let page = "cliff";
  let description = "Cliff Bucco, Police Officer";
  //@ts-ignore variable generated from a js file
  let playerCharacter = playerList[0];
  const changePage = (name: string) => {
    page = name;
    if (name === "cliff") {
      description = "Cliff Bucco, Police Officer";
      //@ts-ignore variable generated from a js file
      playerCharacter = playerList[0];
      picture = cliff;
    }
    if (name === "emily") {
      description = "Emily Rosewell, Typist";
      //@ts-ignore variable generated from a js file
      playerCharacter = playerList[1];
      picture = emily;
    }
    if (name === "max") {
      description = "Maximillian Hirst, Parapsychologist";
      //@ts-ignore variable generated from a js file
      playerCharacter = playerList[2];
      picture = max;
    }
    if (name === "mcgee") {
      description = "Shitter Mc'Gee, Professor of Geology";
      //@ts-ignore variable generated from a js file
      playerCharacter = playerList[3];
      picture = mcgee;
    }
    if (name === "melissa") {
      description = "Melissa Devries, Biologist";
      //@ts-ignore variable generated from a js file
      playerCharacter = playerList[4];
      picture = melissa;
    }
    dummy = Math.random();
  };
</script>

<main>
  <div class="flex mt-12 flex-col items-center justify-center">
    <ul
      class="menu menu-vertical lg:menu-horizontal bg-secondary rounded-box text-black"
    >
      <li>
        <button
          on:click={() => {
            changePage("cliff");
          }}><p>Cliff</p></button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("emily");
          }}>Emily</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("max");
          }}>Maximillian</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("mcgee");
          }}>McGee</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("melissa");
          }}>Melissa</button
        >
      </li>
    </ul>
    <PlayerPage {picture} {description} {playerCharacter} />
  </div>
</main>
