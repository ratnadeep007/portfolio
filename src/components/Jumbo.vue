<template>
  <div class="bg-gray-200 h-64 w-screen">
    <div class="container mx-auto h-full w-full">
      <div class="flex justify-center items-center w-full h-full">
        <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center w-full h-full">
          <div class="sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
            <div class="flex flex-row justify-center items-center align-center">
              <div class="w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-56 xl:h-56 relative self-center">
                <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                  <span class="hidden group-hover:table-cell text-white font-bold align-middle">RB</span>
                  <img src="../assets/my_pic.jpg" alt="Ratnadeep Bhattacharyya" class="object-cover object-center w-full h-full visible group-hover:hidden" />
                </div>
              </div>
            </div>
          </div>
          <div class="sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
            <div class="flex-column justify-center items-center align-center">
              <div class="w-auto h-auto relative self-center">
                <div class="text-3xl text-center">Ratnadeep Bhattacharyya</div>
                <div class="text-lg text-center">Engineer by degree, Developer by passion, Designer by heart.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jumbo'
}
</script>
