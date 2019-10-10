<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center justify-center">
      <img class="w-64 mb-3" src="../assets/svg/404.svg" alt="" srcset="">
      <div class="text-gray-700 text-xl">
        It seems you're lost.
        <router-link to="/">Click here to go to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style>

</style>