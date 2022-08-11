<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconVueLogo from './components/icons/IconVueLogo.vue';
import ThemeChanger from './components/ThemeChanger.vue';
</script>

<template>
  <header>
    <div class="wrapper flex flex-col mx-auto w-full items-center justify-center m-8">
      <!-- <img alt="Vue logo" class="logo pb-8" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="fixed top-2 right-2">
        <ThemeChanger />
      </div>
      <div class="w-40 mb-8 relative">
        <IconVueLogo />
        <div id="#pinia" class="pineapple">🍍</div>
      </div>
      <nav>
        <div class="btn-group">
          <RouterLink class="btn btn-primary" to="/">Home</RouterLink>
          <RouterLink class="btn btn-accent" to="/about">About</RouterLink>
          <RouterLink class="btn btn-accent" to="/posts">Posts</RouterLink>
          <RouterLink class="btn btn-accent" to="/posts">Posts</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

