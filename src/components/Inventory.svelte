<script lang="ts">
  export let inventory: string;
</script>

<div class="flex items-center justify-center">
  <div class="card m-6 w-96 bg-base-100 border shadow-xl">
    <div class="m-2 text-center">
      <u>Inventory</u>
      <p>{inventory}</p>
    </div>
  </div>
</div>
