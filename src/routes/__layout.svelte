<script lang="ts">
  import "../app.css";

  let innerWidth = 0;
  $: src = innerWidth > 640 ? "./images/bg-header-desktop.svg" : "./images/bg-header-mobile.svg";
</script>

<svelte:window bind:innerWidth />

<header class="bg-primary relative -z-50">
  <img {src} alt="" class="w-full h-[10.4rem] object-cover object-center" />
</header>

<slot />
