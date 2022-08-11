<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconVueLogo from './components/icons/IconVueLogo.vue';
</script>

<template>
  <header>
    <div class="wrapper flex flex-col mx-auto w-full items-center justify-center m-24">
      <!-- <img alt="Vue logo" class="logo pb-8" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div class="w-40 mb-8">
        <IconVueLogo />
      </div>
      <nav>
        <div class="btn-group">
          <RouterLink class="btn btn-active" to="/">Home</RouterLink>
          <RouterLink class="btn" to="/about">About</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

