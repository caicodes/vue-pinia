<template>
    <div class="mx-auto max-w-screen-md text-3xl text-center mb-20 flex flex-col gap-4 w-96">
        <h1>Posts</h1>
        <ul>
            <li>
                <RouterLink to="/postDetail/id1">Post 1</RouterLink>
            </li>
            <li>
                <RouterLink to="/postDetail/id2">Post 2</RouterLink>
            </li>
            <li>
                <RouterLink to="/postDetail/id3">Post 3</RouterLink>
            </li>
        </ul>

        <input placeholder="Auto-focused here..." class="input input-bordered" v-autofocus />
    </div>
</template>

<script setup>
import { vAutofocus } from '../directives/vAutofocus';
</script>