<script setup>
import { RouterView } from "vue-router";
import ThemeChanger from "./components/ThemeChanger.vue";
import HelloDaisy from "./components/HelloDaisy.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <header>
    <div
      class="wrapper flex flex-col mx-auto w-full items-center justify-center m-8"
    >
      <HelloDaisy />
      <!-- <img alt="Vue logo" class="logo pb-8" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div class="fixed top-2 right-2">
        <ThemeChanger />
      </div>
      <Header />
    </div>
  </header>
  <RouterView />
</template>
