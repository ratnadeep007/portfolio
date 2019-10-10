<template>
  <div>
    <div class="container mx-auto mt-6">
      <div class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between">
        <div class="w-1/2">
          <div class="flex flex-row sm:justify-center">
            <img class="h-40" src="../assets/svg/backend.svg" />
          </div>
        </div>
        <div class="sm:w-1/2">
          <div class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify">
            Building robust and optimised APIs for frontend easy to consume.
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center text-lg sm:text-2xl text-gray-900 font-bold mt-3">
        Technologies
      </div>
      <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-3">
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/node.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Node.js <span class="italic text-gray-600 text-sm ml-3 font-thin">by Ryan Dahl</span></div>
              <div class="text-lg text-gray-700 text-justify">
                With Angular started learning Javascript and building backend using it with <span class="font-bold">Express</span>. Then learned typescript and started using typescript with Express parallely working on <span class="font-bold">Koa</span> and <span class="font-bold">Hapi</span>. Recently moved to <span class="font-bold">Sails</span> as work hustle and <span class="font-bold">Nest.js</span> for it's typescript support and Angular like architecture.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/python.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Python <span class="italic text-gray-600 text-sm ml-3 font-thin">by Guido van Rossum</span></div>
              <div class="text-lg text-gray-700 text-justify">
                My first scripting and dynamic programming language. I worked on python for basically backend dev and moved to machine learning using python. <span class="font-bold">Django</span> is the first scripted backend I learned and continously uses it for different projects specially I like inbuilt admin panel. Also <span class="font-bold">Flask</span> I used for serving tensorflow models in my personal projects.
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/java.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Java <span class="italic text-gray-600 text-sm ml-3 font-thin">by James Gosling</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Java is second language I learned after C++. It's my first language running on a VM. I worked on <span class="font-bold">Spring</span> and <span class="font-bold">Spring Boot</span> for web development. Currently I like working on GraalVM wtih <span class="font-bold">Vert.x</span> framework for Java and Kotlin.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <SkillsCard class="mt-3" /> -->
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
export default {
  name: 'Backend',
}
</script>
