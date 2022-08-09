<script lang="ts">
  import { slide } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { filters, jobs } from "../stores/jobs.store";
  import JobActiveFilters from "../components/JobActiveFilters.svelte";
  import JobOffer from "../components/JobOffer.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Job Listings</title>
</svelte:head>

<main class="px-6 xs:px-8 pb-16">
  {#if $filters.length !== 0}
    <div transition:slide={{ duration: 100 }} class="-mt-[2.5rem]">
      <JobActiveFilters />
    </div>
  {/if}
  <div class="mt-16 md:mt-12">
    {#each $jobs as job (job.id)}
      <div animate:flip={{ duration: 100 }} class="mb-12 md:mb-6 last:mb-0">
        <JobOffer {job} />
      </div>
    {/each}
  </div>
</main>
