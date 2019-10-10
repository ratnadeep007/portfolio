<template>
  <div class="container mx-auto mt-6">
    <div class="flex flex-col sm:flex-row justify-around items-center sm:justify-between sm:items-between">
      <div class="w-1/2">
        <div class="flex flex-row sm:justify-center">
          <img class="h-40" src="../assets/svg/machine-learning.svg" />
        </div>
      </div>
      <div class="sm:w-1/2">
        <div class="text-gray-600 text-base sm:text-lg mx-6 sm:mx-0 text-justify">
          Teaching computers to think and take decisions based on situations
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
            <img src="../assets/svg/scikit.svg" class="mr-3" alt="angular icon" srcset="">
          </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Scikit Learn <span class="italic text-gray-600 text-sm ml-3 font-thin">by David Cournapeau</span></div>
            <div class="text-lg text-gray-700 text-justify">
              This where I started working on data science and machine learning specially supervised machine learning. Building small projects like cost of building etc.  
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="hidden sm:w-1/4 sm:flex">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/tensorflow.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">Tensorflow <span class="italic text-gray-600 text-sm ml-3 font-thin">by Google Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              My go to framework for deep learning stuff. Specially now it provides Keras in Tensorflow 2.0 and also it's easy to deploy and use with current development in V8 engine in used in Node tensorflow models can be directly used in browsers using Tensorflow.js and also in mobile using Tensorflow Lite. 
            </div>
          </div>
        </div>
      </div>
      <div class="sm:w-1/2 sm:mr-3">
        <div class="flex flex-row justify-center items-center mb-3">
          <div class="hidden sm:w-1/4 sm:flex">
            <div class="rounded-full bg-gray-900 w-1/2 p-3 ml-12">
              <img src="../assets/svg/pytorch.svg" class="mr-3" alt="angular icon" srcset="">
            </div>
          </div>
          <div class="w-3/4">
            <div class="text-2xl text-gray-800 font-bold">PyTorch <span class="italic text-gray-600 text-sm ml-3 font-thin">by Facebook Inc.</span></div>
            <div class="text-lg text-gray-700 text-justify">
              PyTorch is a python implementation of C's torch library. Currently learning PyTorch. Like it's manipulation of graph on the go.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- <Footer /> -->
</template>

<script>
export default {
  name: 'MachineLearning',
}
</script>
