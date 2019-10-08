<template>
  <div>
    <div class="container mx-auto mt-6">
      <div class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between">
        <div class="w-1/2">
          <div class="flex flex-row sm:justify-center">
            <img class="h-40" src="../assets/svg/apps.svg" />
          </div>
        </div>
        <div class="sm:w-1/2">
          <div class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify">
            Building mobile apps haven't been easier with burst with different technologies
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
              <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
                <img src="../assets/svg/android.svg" class="mr-3" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Android SDK <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Started developing mobile apps with Android SDK using eclipse ADT plugin. Now fields has changed so many cross-platform solutions are out there but SDK is best when you need best out of everydevice out there on small size. Waiting for Jetpack compose to be production ready.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
                <img src="../assets/svg/ionic.svg" class="mr-3" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Ionic <span class="italic text-gray-600 text-sm ml-3 font-thin">by Drifty</span></div>
              <div class="text-lg text-gray-700 text-justify">
                My first encounter with cross-platform mobile app development solution. It's easy to port already availible apps from web to mobile. I use it when I need to build apps very fast not cosidering performance.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
                <img src="../assets/svg/nativ-react.svg" class="mr-3" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">React Native <span class="italic text-gray-600 text-sm ml-3 font-thin">by Facebook Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                One the best solution out there for building native apps. I use it when I already have a React.js webapp and it needs to be ported to mobile. Also I like to use to in team project as React Native developers are easier to find than others.
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
                <img src="../assets/svg/nativescript.svg" class="mr-3" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Nativescript <span class="italic text-gray-600 text-sm ml-3 font-thin">by Progress Software Corporation</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Similar to React Native when I need to support Angular or Vue app to mobile to opt for this option also it provides many more pre-built components when compared to React Native.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
                <img src="../assets/svg/flutter.svg" class="mr-3" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Flutter <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                New kid in the block but most performant among others due to it's native implementation in C++ and pixel perfect rendering but with caviate to learn new language which is dart. Currently learning Flutter to build a full fledged app.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <SkillsCard class="mt-3" /> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: 'MobileApps',
  components: {
    Footer
  }
}
</script>

<style>

</style>