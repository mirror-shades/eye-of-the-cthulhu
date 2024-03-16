<script lang="ts">
  import PlayerPage from "./PlayerPage.svelte";
  import coop from "../assets/coop.png";
  import cody from "../assets/cody.png";
  import britt from "../assets/britt.png";
  import jordy from "../assets/jordy.png";
  import eirik from "../assets/eirik.png";
  let picture = coop;
  let page = "coop";
  let description = "coop Bucco, Police Officer";
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
          }}><p>coop</p></button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("britt");
          }}>britt</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("cody");
          }}>codyimillian</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("jordy");
          }}>jordy</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            changePage("eirik");
          }}>eirik</button
        >
      </li>
    </ul>
    <PlayerPage {picture} {description} {page} />
  </div>
</main>
