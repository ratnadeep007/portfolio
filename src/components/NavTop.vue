<template>
  <div class="h-12 animated fadeIn">
    <div class="container mx-auto">
      <div class="flex flex-row">
        <div class="w-1/4 text-2xl ml-3 md:py-2 lg:py-2 flex flex-row">
          <font-awesome-icon icon="user" class="mt-1" />
          <span class="ml-2 mt-2 sm:mt-0 sm:ml-2 md:ml-2 lg:ml-2">
            <img src="../assets/images/signature.gif" class="w-32" alt="" srcset="">
          </span>
        </div>
        <div class="w-3/4 flex flex-row justify-end py-3">
          <div class="px-3">
            <a href="#" class="text-gray-600 font-bold hover:text-gray-900">
              Works
            </a>
          </div>
          <div class="px-3">
            <a href="#" class="text-gray-600 font-bold hover:text-gray-900">
              Skills
            </a>
          </div>
          <div class="px-3">
            <a href="#" class="text-gray-600 font-bold hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavTop'
}
</script>

<style>

</style>