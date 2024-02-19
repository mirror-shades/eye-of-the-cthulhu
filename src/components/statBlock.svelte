<script lang="ts">
  export let rollStat: Function;
  export let stat: any;
  export let key: string;
</script>

<main>
  <div class="mb-1">
    <button class="btn btn-primary btn-xs" on:click={rollStat(key, stat)}
      >Roll</button
    >
    {key}
    {#if key != "SAN"}
      - {stat} / {Math.floor(stat / 2)} / {Math.floor(stat / 5)}
    {/if}
  </div>
</main>
