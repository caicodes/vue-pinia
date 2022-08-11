<template>
    <div class="home flex justify-start flex-col items-center ">
        <div class="bg-base-300 rounded-xl bg-opacity-50 p-8 w-96">
            <!-- page title -->
            <div class="mx-auto max-w-screen-md text-3xl text-center mb-10 justify-center">
                <h1> post details</h1>
            </div>
            <!-- post details -->
            <h1>this is a post detail page</h1>
            <p>display contents... with id of {{ $route.params.id }}</p>
            <RouterLink class="btn btn-primary mt-8" to="/posts">Back to Posts</RouterLink>
        </div>

    </div>
</template>

<script setup>

</script>