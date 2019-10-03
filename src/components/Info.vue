<template>
  <div class="container mx-auto mt-3 pt-3 pb-3">
    <div class="flex flex-col sm:flex-row justify-between">
      <div class="w-full sm:w-1/2">
        <div class="flex flex-col justify-center items-center">
          <div class="sm:shadow sm:border sm:border-gray-300 px-4 py-2 bg-white rounded sm:sm:hover:shadow-lg sm:w-1/2">
            <div class="flex flex-col py-2 px-4">
              <div class="text-xl font-bold text-center mb-3">Frontend</div>
              <img class="h-24" src="../assets/svg/frontend.svg" />
              <div class="mt-3 text-base text-justify">Building beautiful frontend with wide variety of technology availible</div>
            </div>
          </div>
          <div class="sm:shadow sm:border sm:border-gray-300 px-4 py-2 bg-white rounded sm:hover:shadow-lg sm:w-1/2 mt-3">
            <div class="flex flex-col py-2 px-4">
              <div class="text-xl font-bold text-center mb-3">Machine Learning</div>
              <img class="h-24" src="../assets/svg/machine-learning.svg" />
              <div class="mt-3 text-base text-justify">Teaching computers to think and take decisions based on situations</div>
            </div>
          </div>
          <div class="sm:shadow sm:border sm:border-gray-300 px-4 py-2 bg-white rounded sm:hover:shadow-lg sm:w-1/2 mt-3">
            <div class="flex flex-col py-2 px-4">
              <div class="text-xl font-bold text-center mb-3">Mobile Apps</div>
              <img class="h-24" src="../assets/svg/apps.svg" />
              <div class="mt-3 text-base text-justify">Building mobile apps haven't been easier with burst with different technologies</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2">
        <div class="flex flex-col justify-center items-center">
          <div class="sm:shadow sm:border sm:border-gray-300 px-4 py-2 bg-white rounded sm:hover:shadow-lg sm:w-1/2 mt-3 sm:mt-0">
            <div class="flex flex-col py-2 px-4">
              <div class="text-xl font-bold text-center mb-3">Backend</div>
              <img class="h-24" src="../assets/svg/backend.svg" />
              <div class="mt-3 text-base text-justify">Building robust and optimised APIs for frontend easy to consume.</div>
            </div>
          </div>
          <div class="sm:shadow sm:border sm:border-gray-300 px-4 py-2 bg-white rounded sm:hover:shadow-lg sm:w-1/2 mt-3">
            <div class="flex flex-col py-2 px-4">
              <div class="text-xl font-bold text-center mb-3">Other Languages</div>
              <img class="h-24" src="../assets/svg/languages.svg" />
              <div class="mt-3 text-base text-justify">Other programming languages or frameworks I like to work upon</div>
            </div>
          </div>
          <div class="sm:shadow sm:border sm:border-gray-300 px-4 py-2 bg-white rounded sm:hover:shadow-lg sm:w-1/2 mt-3">
            <div class="flex flex-col py-2 px-4">
              <div class="text-xl font-bold text-center mb-3">Cloud Computing</div>
              <img class="h-24" src="../assets/svg/cloud.svg" />
              <div class="mt-3 text-base text-justify">Cloud Computing stuffs I like to work upon basically PaaS like Heroku, IaaS like AWS, GCP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-center">
      <div class="sm:shadow sm:border sm:border-gray-300 px-4 py-2 bg-white rounded sm:hover:shadow-lg w-full sm:w-1/4 mt-3">
        <div class="flex flex-col py-2 px-4">
          <div class="text-xl font-bold text-center mb-3">Future</div>
          <img class="h-24" src="../assets/svg/future.svg" />
          <div class="mt-3 text-base text-justify">Upcoming technologies I closely follow and experiment with</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style>

</style>