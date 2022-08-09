<script lang="ts">
  import { addFilter, filters, removeFilter } from "../stores/jobs.store";
  export let label: string;
  export let type: "add" | "remove" | undefined = "add";

  $: disabled = $filters.includes(label);
</script>

<div class="rounded-sm overflow-hidden flex items-center">
  <button
    on:click={() => type === "add" && addFilter(label)}
    aria-label="Add {label} to filters"
    type="button"
    {disabled}
    class:cursor-default={type === "remove"}
    class:tag-hover={type === "add" && !disabled}
    class="bg-neutral-200 px-3 py-2 text-primary transition-colors duration-300"
  >
    {label}
  </button>
  {#if type === "remove"}
    <button
      on:click={() => removeFilter(label)}
      aria-label="Remove {label} from filters"
      type="button"
      class="bg-primary px-3 self-stretch flex justify-center items-center [@media(hover:hover)]:hover:bg-neutral-400 transition-colors duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
        ><path
          fill="#FFF"
          fill-rule="evenodd"
          d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
        />
      </svg>
    </button>
  {/if}
</div>
