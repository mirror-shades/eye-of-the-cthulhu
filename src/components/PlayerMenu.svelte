<script lang="ts">
  import PlayerPage from "./PlayerPage.svelte";
  import coop from "../assets/coop.png";
  import cody from "../assets/cody.png";
  import britt from "../assets/britt.png";
  import jordy from "../assets/jordy.png";
  import eirik from "../assets/eirik.png";
  let picture = coop;
  let page = "coop";
  let description = "Garf Barph, Logger";
  const changePage = (name: string) => {
    page = name;
    if (name === "coop") {
      description = "Garf Barph, Logger";
      picture = coop;
    }
    if (name === "britt") {
      description = "Emily Rosewell, Typist";
      picture = britt;
    }
    if (name === "cody") {
      description = "Maximillian Hirst, Parapsychologist";
      picture = cody;
    }
    if (name === "jordy") {
      description = "Shitter Mc'Gee, Professor of Geology";
      picture = jordy;
    }
    if (name === "eirik") {
      description = "Melissa Devries, Biologist";
      picture = eirik;
    }
  };
</script>

<main>
  <div class="flex mt-12 flex-col items-center justify-center">
    <ul
      class="menu menu-vertical lg:menu-horizontal bg-primary rounded-box text-black"
    >
      <li>
        <button
          on:click={() => {
            changePage("coop");
          }}><p>Garf</p></button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("britt");
          }}>Emily</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("cody");
          }}>Maximillian</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("jordy");
          }}>Mc'Gee</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("eirik");
          }}>Melissa</button
        >
      </li>
    </ul>
    <PlayerPage {picture} {description} {page} />
  </div>
</main>
