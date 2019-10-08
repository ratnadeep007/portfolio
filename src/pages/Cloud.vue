<template>
  <div>
    <div class="container mx-auto mt-6">
      <div class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between">
        <div class="w-1/2">
          <div class="flex flex-row sm:justify-center">
            <img class="h-40" src="../assets/svg/cloud.svg" />
          </div>
        </div>
        <div class="sm:w-1/2">
          <div class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify">
            Cloud Computing stuffs I like to work upon basically PaaS like Heroku, IaaS like AWS, GCP
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
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/heroku.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Heroku <span class="italic text-gray-600 text-sm ml-3 font-thin">by Salesforce.com, Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Fastest deployment with Git. I like mainly there buildpacks specially with Node applications. They autmatically run install dependencies, building and serving just we need to make package.json file as per there specs.
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mr-3">
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/aws.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Amazon Web Services <span class="italic text-gray-600 text-sm ml-3 font-thin">by Amazon.com, Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                I think no need to tell why I use it. Everybody is using it specially I use there VMs for machine learning that is training models with GPUs.
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mb-3">
            <div class="hidden sm:w-1/4 sm:flex">
              <div class="rounded-full bg-gray-900 w-1/2 p-2 ml-12">
                <img src="../assets/svg/gcp.svg" alt="angular icon" srcset="">
              </div>
            </div>
            <div class="w-3/4">
              <div class="text-2xl text-gray-800 font-bold">Google Cloud Platform <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
              <div class="text-lg text-gray-700 text-justify">
                Google Cloud Platform I mainly lean towards it cause of it's kubernetes engine a orchestration platform for Docker. Also most of the app uses maps now a days which is also a part of GCP and the provide easy intergration with Machine Learning. 
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
  name: 'Cloud',
  components: {
    Footer
  }
}
</script>
