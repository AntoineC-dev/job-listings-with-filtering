<script lang="ts">
  import { filters, clearFilters } from "../stores/jobs.store";
  import JobTag from "./JobTag.svelte";
</script>

<div class="card flex items-center gap-6 justify-between flex-wrap">
  <div class="flex items-center flex-wrap gap-4">
    {#each $filters as label (label)}
      <JobTag {label} type="remove" />
    {/each}
  </div>
  <button
    on:click={clearFilters}
    type="button"
    class="text-neutral-300/75 px-3 py-2 -mx-3 [@media(hover:hover)]:hover:text-primary [@media(hover:hover)]:hover:underline transition-colors duration-100"
  >
    Clear
  </button>
</div>
