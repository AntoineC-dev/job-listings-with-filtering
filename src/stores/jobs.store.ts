import { writable } from "svelte/store";
import JOBS from "../data.json";
import type { JobOffer } from "../types";

export const filters = writable<string[]>([]);
export const jobs = writable<JobOffer[]>(JOBS);

export const addFilter = (filter: string) => filters.update((prev) => [...prev, filter]);
export const removeFilter = (filter: string) => filters.update((prev) => prev.filter((item) => item !== filter));
export const clearFilters = () => filters.set([]);

filters.subscribe((filters) =>
  jobs.update((_) => {
    if (filters.length === 0) {
      return JOBS;
    } else {
      return JOBS.filter((job) => {
        const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];
        let condition = true;
        for (let i = 0; i < filters.length; i++) {
          const filter = filters[i];
          if (!jobFilters.includes(filter)) {
            condition = false;
            break;
          }
        }
        return condition;
      });
    }
  })
);
