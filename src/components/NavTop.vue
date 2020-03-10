<template>
  <div class="h-12 animated fadeIn">
    <div class="container mx-auto">
      <div class="flex flex-row">
        <router-link to="/" class="w-1/4 text-2xl ml-3 md:py-2 lg:py-2 flex flex-row">
          <font-awesome-icon icon="user" class="mt-1" />
          <span class="ml-2 mt-2 sm:mt-0 sm:ml-2 md:ml-2 lg:ml-2">
            <img src="../assets/images/signature.gif" class="w-32" alt srcset />
          </span>
        </router-link>
        <div class="flex w-3/4 flex flex-row justify-end">
          <div class="hidden sm:px-3 sm:block sm:py-3">
            <router-link to="/work" class="text-gray-600 font-bold hover:text-gray-900">Works</router-link>
          </div>
          <!-- <div class="hidden sm:px-3 sm:block sm:py-3">
            <a href="#" class="text-gray-600 font-bold hover:text-gray-900">
              Skills
            </a>
          </div>-->
          <div class="hidden sm:px-3 sm:block sm:py-3">
            <router-link to="/contact" class="text-gray-600 font-bold hover:text-gray-900">Contact</router-link>
          </div>
          <div class="hidden sm:px-3 sm:block sm:py-3">
            <a
              @click="openBlog"
              class="text-gray-600 font-bold cursor-pointer hover:text-blue-800"
              target="_blank"
            >
              <div class="flex flex-row items-center justify-between">
                Blog
                <span class="ml-1">
                  <img src="../assets/svg/hashnode.svg" alt srcset class="w-4" />
                </span>
              </div>
            </a>
          </div>
          <svg
            @click="navActiveFunction"
            class="flex sm:hidden w-5 mr-3 mt-0"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              v-if="!navActive"
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
            <path
              v-if="navActive"
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
          </svg>
        </div>
      </div>
      <transition
        name="custom-class-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-if="navActive" class="bg-white mb-3 w-full animated">
          <div class="flex flex-col justify-center rounded shadow shadow-lg w-full">
            <router-link to="/work" class="text-gray-800 ml-3 font-bold text-xl">Works</router-link>
            <!-- <a href="#" class="text-gray-800 ml-3 font-bold text-xl">
              Skills
            </a>-->
            <router-link to="/contact" class="text-gray-800 ml-3 font-bold text-xl">Contact</router-link>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavTop",
  data: function() {
    return {
      navActive: false
    };
  },
  methods: {
    navActiveFunction: function() {
      this.navActive = !this.navActive;
    },
    openBlog: function() {
      window.open("https://blog.ratnadeep.theskylab.in");
    }
  },
  watch: {
    $route() {
      this.navActive = false;
    }
  }
};
</script>

<style>
</style>