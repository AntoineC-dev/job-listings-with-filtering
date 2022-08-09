<script lang="ts">
  import "../app.css";

  let innerWidth = 0;
  $: src = innerWidth > 640 ? "./images/bg-header-desktop.svg" : "./images/bg-header-mobile.svg";
</script>

<svelte:window bind:innerWidth />

<header class="bg-primary relative -z-50">
  <h1 class="absolute left-0 top-0 text-[2px]">
    Frontend Mentor | Job Listings w/ filtering | Here just for accessibility tests 😜
  </h1>
  <img {src} alt="" class="w-full h-[10.4rem] object-cover object-center" />
</header>

<slot />

<footer class="text-center px-6 pb-2 text-neutral-300/75 mt-auto">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
  <a href="https://github.com/AntoineC-dev" class="text-primary font-bold underline">Antoine C</a>.
</footer>
