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
    pageTitle: "yo nigga",
    postsTitle: "boooya",
  }),
  actions: {},
  getter: {},
});
