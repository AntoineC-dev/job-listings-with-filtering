<script lang="ts">
  import type { JobOffer } from "../types";
  import JobTag from "./JobTag.svelte";
  export let job: JobOffer;
</script>

<div class:featured={job.featured} class="card relative sm:flex sm:items-center sm:gap-6">
  <!-- Logo -->
  <img
    src={job.logo}
    alt="{job.company} logo"
    class="absolute top-0 left-6 -translate-y-1/2 w-14 sm:static sm:translate-y-0 sm:w-20 md:w-24"
  />
  <!-- Informations -->
  <div class="flex flex-col gap-4 sm:gap-2 pt-4 pb-5 border-b-[1px] border-neutral-300/50 sm:py-0 sm:border-0">
    <div class="flex gap-6 items-center">
      <h2 class="text-primary text-lg">{job.company}</h2>
      <!-- Badges -->
      {#if job.new || job.featured}
        <div class="flex items-center gap-2 text-neutral-100 text-sm uppercase tracking-wide">
          {#if job.new}
            <span class="px-[0.625rem] pb-[0.0625rem] pt-1 rounded-full bg-primary">New!</span>
          {/if}
          {#if job.featured}
            <span class="px-[0.625rem] pb-[0.0625rem] pt-1 rounded-full bg-neutral-400">Featured</span>
          {/if}
        </div>
      {/if}
    </div>
    <!-- Position -->
    <span
      class="text-lg xs:text-xl tracking-wide cursor-pointer [@media(hover:hover)]:hover:text-primary transition-colors duration-100"
      >{job.position}</span
    >
    <!-- Metadata -->
    <div class="text-neutral-300/75 font-medium text-[1.0625rem] flex items-center gap-3">
      <span>{job.postedAt}</span>
      <div class="w-1 aspect-square rounded-full bg-neutral-300/60" />
      <span>{job.contract}</span>
      <div class="w-1 aspect-square rounded-full bg-neutral-300/60" />
      <span>{job.location}</span>
    </div>
  </div>
  <!-- Tags -->
  <div class="mt-6 flex items-center flex-wrap gap-4 sm:flex-1 sm:justify-end sm:mt-0">
    <JobTag label={job.role} />
    <JobTag label={job.level} />
    {#each job.languages as label (label)}
      <JobTag {label} />
    {/each}
    {#each job.tools as label (label)}
      <JobTag {label} />
    {/each}
  </div>
</div>
