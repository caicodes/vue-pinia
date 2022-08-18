<template>
  <nav>
    <div class="relative btn-group z-50 mt-1">
      <RouterLink class="btn btn-accent" to="/">Home</RouterLink>
      <RouterLink class="btn btn-accent" to="/about">About</RouterLink>
      <RouterLink class="btn btn-accent" to="/posts">{{
        pageStore.postsTitle
      }}</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { usePageStore } from "../stores/page";
const pageStore = usePageStore();
</script>
