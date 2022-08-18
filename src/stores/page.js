/**
 *
 * 🍍 pinia 🍍
 *      state management
 *
 */
import { defineStore } from "pinia";

export const usePageStore = defineStore({
  id: "page",
  state: () => ({
    title: "welcome",
    appTitle: "pinia counter",
    pageTitle: "yo baby",
    postsTitle: "boooya",
  }),
  actions: {},
  getter: {},
});
