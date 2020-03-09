<template>
  <div>
    <div class="container mx-auto mt-6">
      <div
        class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between"
      >
        <div class="w-1/2">
          <div class="flex flex-row sm:justify-center">
            <img class="h-40" src="../assets/svg/languages.svg" />
          </div>
        </div>
        <div class="sm:w-1/2">
          <div
            class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify"
          >Other programming languages or frameworks I like to work upon</div>
        </div>
      </div>
      <div
        class="flex flex-row justify-center text-lg sm:text-2xl text-gray-900 font-bold mt-3"
      >Technologies</div>
      <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-3">
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/c.svg" alt="angular icon" srcset />
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">
                C
                <span class="italic text-gray-600 text-sm ml-3 font-thin">by Dennis Ritchie</span>
              </div>
              <div
                class="text-lg text-gray-700 text-justify"
              >C is first high level language written for Unics. I love working in this when I need performance from system. I prefer working in C++ more than C due to OOPs concepts are applicable and I get real classes in C++ unlike structs and unions in C.</div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/cpp.svg" alt="angular icon" srcset />
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">
                C++
                <span class="italic text-gray-600 text-sm ml-3 font-thin">by Bjarne Stroustrup</span>
              </div>
              <div class="text-lg text-gray-700 text-justify">
                I first programming language and still my favourite programming language. Whenever I need performance I head over to my this friend. Places I use C++ are like building game engines, handling image like compression or building high performance deskop applications (
                <span
                  class="font-bold"
                >Qt</span>) for internal uses.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full w-1/2 p-2 ml-12">
                <img src="../assets/svg/rust.png" alt="angular icon" srcset />
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">
                Rust
                <span class="italic text-gray-600 text-sm ml-3 font-thin">by Mozilla</span>
              </div>
              <div class="text-lg text-gray-700 text-justify">
                Rust is a system level programming language with has similar performance to that of C++ but has benefit of being new so that it can utilize all the benefits of new hardware, concurrentn and fucntional. It uses ownership where values are moved than copied. Popular project like
                <span
                  class="font-bold"
                >Deno</span> and
                <span class="font-bold">SpierMonkey</span> JS engine. It also has first class support for
                <span class="font-bold">Webassembly</span>.
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-600 w-1/2 p-2 ml-12">
                <img src="../assets/svg/haskell.svg" alt="angular icon" srcset />
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">
                Haskell
                <span class="italic text-gray-600 text-sm ml-3 font-thin">by Multiple People</span>
              </div>
              <div
                class="text-lg text-gray-700 text-justify"
              >Whenever I need to learn new things about functional programming I head over to haskell. I likes it's strict compiler and hence no runtime errors. I am currently learning Haskell and building backend with it.</div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-600 w-1/2 p-2 ml-12">
                <img src="../assets/svg/elixir.svg" alt="angular icon" srcset />
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">
                Elixir
                <span class="italic text-gray-600 text-sm ml-3 font-thin">by José Valim</span>
              </div>
              <div class="text-lg text-gray-700 text-justify">
                I first experience with Functional programming language is with Elixir which runs on Erlang's BEAN VM. I like to build backend with Elixir with
                <span
                  class="font-bold"
                >Pheonix framework</span>. I don't use it much.
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
  name: "Other"
};
</script>
