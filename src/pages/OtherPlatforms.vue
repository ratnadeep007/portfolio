<template>
  <div>
    <div class="container mx-auto mt-6">
      <div class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between">
        <div class="w-1/2">
          <div class="flex flex-row sm:justify-center">
            <img class="h-40" src="../assets/svg/otherplatform.svg" />
          </div>
        </div>
        <div class="sm:w-1/2">
          <div class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify">
            Building mobile apps haven't been easier with burst with different technologies.
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
                <img src="../assets/svg/electron.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Electron.js <span class="italic text-gray-600 text-sm ml-3 font-thin">by Github, Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Easiest and fastest way for creating a desktop application using already knows web technologies. I use to create desktop apps fast if I already have a web app mostly the case.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/firebase.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Firebase <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                A BaaS I use when I need to create something fast be it web app or mobile app, even if I am not using backend of Firebase I might some of it's features like Hosting, Cloud Messaging, Cloud Functions, Cloud Storage. A ready to go backend for me.
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/docker.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Docker <span class="italic text-gray-600 text-sm ml-3 font-thin">by Docker, Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                I like working with containers. If it runs on my machine it will have to run on any cloud. I consider is as version control for file systems and with support to deploy in Heroku, GCP or AWS I use it a lot.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <SkillsCard class="mt-3" /> -->
    </div>
    <Footer class="sm:absolute sm:inset-x-0 sm:bottom-0" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'OtherPlatform',
  components: {
    Footer
  }
}
</script>
