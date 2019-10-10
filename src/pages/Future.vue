<template>
  <div>
    <div class="container mx-auto mt-6">
      <div class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between">
        <div class="w-1/2">
          <div class="flex flex-row sm:justify-center">
            <img class="h-40" src="../assets/svg/future.svg" />
          </div>
        </div>
        <div class="sm:w-1/2">
          <div class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify">
            Upcoming technologies I closely follow and experiment with.
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center text-lg sm:text-2xl text-gray-900 font-bold mt-3">
        Technologies
      </div>
      <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-3">
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">WebAssembly </div>
              <div class="text-lg text-gray-700 text-justify">
                As performance freak and love for C and C++ I am looking closely to the development of WebAssembly which will allow other languages to run on browser which in turn can help in bring high performamnce softwares to web like game engine.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Deno <span class="italic text-gray-600 text-sm ml-3 font-thin">by Rayn Dahl</span></div>
              <div class="text-lg text-gray-700 text-justify">
                From creator Node.js a new project where her solves the problem of Node.js like heavy node_modules and using Typescript as a programming language.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">CSS Houdini</div>
              <div class="text-lg text-gray-700 text-justify">
                Houdini CSS is a new collection of browser APIs which allow you to gain more access to your browser’s CSS engine. The APIs are accessible through JavaScript, making them web developer friendly.
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Serverless </div>
              <div class="text-lg text-gray-700 text-justify">
                Running small functions on web without taking headache of maintaing whole server. Just write a function which does a job perfect deploy it, cloud service provider will take care of it.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Vue Native <span class="italic text-gray-600 text-sm ml-3 font-thin">by GeekyAnts</span></div>
              <div class="text-lg text-gray-700 text-justify">
                A project by GeekyAnts which is based on React Native which will allow to Vue in similar way as React in Mobile apps.
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
  name: 'Future',
}
</script>
