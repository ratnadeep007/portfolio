<template>
  <div>
    <div class="container mx-auto mt-6">
      <div class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between">
        <div class="w-1/2">
          <div class="flex flex-row sm:justify-center">
            <img class="h-40" src="../assets/svg/frontend.svg" />
          </div>
        </div>
        <div class="sm:w-1/2">
          <div class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify">
            Building beautiful frontend with wide variety of technology availible. Be it building logic or designing beautiful
            interface and user interactions.
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
                <img src="../assets/svg/angular.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Angular 2+ <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Working in Angular since it's beta release. When creating complex frontend whose requirements are well defined then I go for Angular due to it's Typscript support and less dependent on third party modules for core features like routing and HTTP request. 
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
                <img src="../assets/svg/vue.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Vue <span class="italic text-gray-600 text-sm ml-3 font-thin">by Evan You</span></div>
              <div class="text-lg text-gray-700 text-justify">
                With same time as react I came to know about Vue with somewhere introducing it as best of both worlds from Angular and React. I really like Vue with it's concept of single page components without JSX. 
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-3  ml-12">
                <img src="../assets/svg/stencil.png" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Stencil <span class="italic text-gray-600 text-sm ml-3 font-thin">by Ionic Team</span></div>
              <div class="text-lg text-gray-700 text-justify">
                A web component compiler by Ionic Team. Easy building reusable componens mainly learned it as it's used in Ionic Framework for building apps. 
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/react.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">React <span class="italic text-gray-600 text-sm ml-3 font-thin">by Facebook Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                After starting journey with Angular I started looking for other options in this frontend framework and found out React Library to be interesting and started learning and building projects in it. When I need somehting to be built fast and light weight with flexilinity to choose my own libraries I go with React. 
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
                <img src="../assets/svg/svelte.png" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Svelte <span class="italic text-gray-600 text-sm ml-3 font-thin">by Rich Harris</span></div>
              <div class="text-lg text-gray-700 text-justify">
                I like to experiment with new technologies so when I came to know about this web framework I couldn't hold myself and started working on this. It's tagline caught my eye specially which is <span class="italic">"Cybernetically enhanced web apps"</span>. I currently learing it. 
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
                <img src="../assets/svg/litelement.svg" class="mr-3" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">LitElement <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                I was introduced to Web Components with Polymer project from Google but I thought I web components are made to work with normal HTML then it can work with any framework so took LitElement a sub-project of Polymer which is a compiler for web components. 
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
  name: 'Frontend',
  components: {
    Footer
  }
}
</script>
