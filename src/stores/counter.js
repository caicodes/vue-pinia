/**
 *
 * 🍍 pinia 🍍
 *      state management
 *
 */
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),

  // watch(state, watchCountTotal) {
  //   function watchCountTotal() {
  //     if (this.count === 20) {
  //       alert("yo yo homey... use about to hit 20");
  //     }
  //   }
  // },

  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },
  actions: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter(amount) {
      this.count -= amount;
    },
  },
});
