<template>
    <div class="home flex justify-start flex-col items-center ">
        <div class="bg-base-300 rounded-xl bg-opacity-50 p-8 w-96">
            <!-- page title -->
            <div class="mx-auto max-w-screen-md text-3xl text-center mb-10 justify-center">
                <h1>post details</h1>
            </div>
            <!-- post details -->
            <h1>And this is a post detail page</h1>
            <p>display contents... with id of {{ $route.params.id }}</p>

            <div class="flex flex-col gap-2 mt-4">

                <button class="btn" @click="showPostId">show post id</button>
                <button class="btn" @click="goHomeIn3Seconds">go in 3</button>
                <RouterLink class="btn btn-primary mt-4" to="/posts">Back to Posts</RouterLink>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const showPostId = () => {
    alert(`the ID of this post is:  ${route.params.id}`)
}
const goHomeIn3Seconds = () => {
    setTimeout(() => {
        router.push('/')
    }, 3000)
}

</script>
