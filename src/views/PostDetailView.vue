<template>
  <div class="home flex justify-start flex-col items-center">
    <div class="bg-base-300 rounded-xl bg-opacity-50 p-8 w-96">
      <!-- page title -->
      <div
        class="mx-auto max-w-screen-md text-3xl text-center mb-10 justify-center"
      >
        <h2 class="text-2xl">{{ pageStore.postsTitle }}</h2>
        <h1>{{ $route.params.id }} details</h1>
      </div>
      <!-- post details -->
      <div class="p-4">
        <p>
          And this is a post detail page which is displaying the
          {{ pageStore.postsTitle }} contents... with an id of
          {{ $route.params.id }}
        </p>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <button class="btn btn-secondary" @click="showPostId">
          show {{ pageStore.postsTitle }} id
        </button>
        <button class="btn btn-accent" @click="goHomeIn3Seconds">
          go in 3
        </button>
        <RouterLink class="btn btn-primary mt-4" to="/posts"
          >Back to {{ pageStore.postsTitle }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { usePageStore } from "../stores/page";
const pageStore = usePageStore();
const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`the ID of this post is:  ${route.params.id}`);
};
const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push("/");
  }, 3000);
};
</script>
