# Development Diary for vue-pinia

# vue-pinia

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Ok... let's do this...

Vue 3 with Pinia...

Add tailwind, pretty straightforward, during the init process I did choose enable jsx... wondering the details for that...

```javascript

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

```

## Getting the color modes in on a vite project starter... from init vite...

Prior to starting this phase, summarizing where we are...

`🍍vue🍍pinia🍍` and a lot more 🕊coming soon... 

currently: 
- using composition🎻api for the entire project
- using tailwind 🌼daisyUI 
- created 2 custom tw🎨themes 
  - 🍋lemonade 
  - 🍇grape
- to act as default light/dark set...

- full theme cycle is also available on this method/implementation

Moving on... installing the package!

## vueuse

Getting this utility superset loaded for use and theme features added... my favorite part...

### These are the pieces in my current implementation for a vite/vue project...

```
yarn add @vueuse/core @vueuse/components @headlessui/vue
yarn add -D @headlessui/vue
```
This gives us the following at this point...

```javascript

{
  "name": "vue-pinia",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 4173"
  },
  "dependencies": {
    "@vueuse/components": "^9.1.0",
    "@vueuse/core": "^9.1.0",
    "daisyui": "^2.22.0",
    "gsap": "^3.10.4",
    "pinia": "^2.0.16",
    "vue": "^3.2.37",
    "vue-router": "^4.1.2"
  },
  "devDependencies": {
    "@headlessui/vue": "^1.6.7",
    "@vitejs/plugin-vue": "^3.0.1",
    "@vitejs/plugin-vue-jsx": "^2.0.0",
    "autoprefixer": "^10.4.8",
    "postcss": "^8.4.16",
    "tailwindcss": "^3.1.8",
    "vite": "^3.0.1"
  }
}
```

Going with the light/dark limited theme model, here's the current `tailwind.config.ts`

```javascript
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      { 
      // started from daisy 'lemonade'
      light: {
        primary: "#519903",
        secondary: "#E9E92E",
        accent: "#F7F9CA",
        neutral: "#191A3F",
        "base-100": "#ffffff",
        info: "#C8E1E7",
        success: "#DEF29F",
        warning: "#F7E589",
        error: "#F2B6B5",
      }
    },
    { 
      // started from daisy 'night'
      dark: {
        primary: "#38bdf8",
        secondary: "#818CF8",
        accent: "#F471B5",
        neutral: "#1E293B",
        "neutral-focus": "#273449",
        "base-100": "#0F172A",
        info: "#0CA5E9",
        success: "#2DD4BF",
        warning: "#F4BF50",
        error: "#FB7085",
      },
    }
  ],
  },
}
```


# 🍍pinia

## Getting Started...

Pinia State management... just getting started, here's what it has to offer over vuex...

- all components access
- better than vuex
- optimized for composition api
- this is the new standard and
- run this in nuxt3 to dev in
- parallel...

```javascript
// stores/counter.js

import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

/**
 *
 * pinia
 *  state management
 *
 */

```

## Installed and Setup...

Live now and visible via dev tools..

<img src="./project/pinia-dev.png" />

### Fully working with pinia...

<img src="./project/pinia-dev-2.png" />


## Time for a Little GSAP Now?

GSAP is already loaded from `yarn add gsap` ...just need to setup with animations, looking to do the pineapple...

Note: added a quick pineapple bg blur with a trick in CSS...

```css 
/* tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

.pineapple {
  @apply text-8xl absolute top-4 right-10 z-10;
}
.pineapple::before {
  @apply blur-xl -z-10 ml-5 mt-2;
  content: "O";
  color: yellow; /* not theme ready yet */
  position: absolute;
  rotate: -58deg;
}
```

> Nice trick, nothing but css, need to make it fully themeable at some point... 

### Next, gsap animating the pineapple 🍍

> YES!! Now this is what I've been working towards...

I just dropped the file in, that's it... then included it on `App.vue` and voila!
Like a helicopter it revv's up... next I am gonna do some SVG animations... and line/stroke animations on svgs... omg... yes!!

Now that the chopper flies in, let's make the pineapple do a little float action up n down... for starters!


Gsap was a breeze... working on the pineapple dance...

<div class='flex'>
<img src="./project/gsap-hello.png" alt="pinia with gsap" width="30%"  />
<img src="./project/gsap-2.png" alt="pinia with gsap" width="30%"  />
<img src="./project/gsap-3.png" alt="pinia with gsap" width="30%"  />
</div>


👋🤵🦚🥰🦋🏕🎯🏁🏕 
# 
🍋🍇