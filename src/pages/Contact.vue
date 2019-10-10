<template>
  <div class="container mx-auto mb-3">
    <div v-if="error" class="bg-red-400 rounded px-4 py-2 text-white font-bold" @click="error = false">
      {{ errorText }}
    </div>
    <div v-if="!submitted" class="flex flex-col items-center sm:hidden mb-3">
      <div class="text-gray-600">Please fill following:</div>
      <input v-model="name" type="text" class="rounded shadow text-gray-800 px-4 py-2 mt-3" placeholder="Enter your name*" />
      <input v-model="email" type="email" class="rounded shadow text-gray-800 px-4 py-2 mt-3" placeholder="Enter your email*" />
      <textarea v-model="message" name="" id="" cols="25" rows="5" class="rounded shadow text-gray-800 px-4 py-2 mt-3" placeholder="Any message"></textarea>
      <button v-if="!loading" @click="submit" class="bg-green-600 rounded text-lg font-bold px-4 py-2 text-white mt-3 shadow">Submit</button>
    </div>
    <div v-if="!submitted" class="hidden sm:flex flex-col items-center">
      <div class="text-gray-600 text-2xl font-bold">Please fill following:</div>
      <div class="flex flex-row justify-center w-full">
        <input v-model="name" type="text" class="w-1/2 rounded shadow text-gray-800 px-4 py-2 mt-3 mr-3" placeholder="Enter your name*" />
        <input v-model="email" type="email" class="w-1/2 rounded shadow text-gray-800 px-4 py-2 mt-3 ml-3" placeholder="Enter your email*" />
      </div>
      <textarea v-model="message" name="" id="" cols="25" rows="5" class="w-full rounded shadow text-gray-800 px-4 py-2 mt-3" placeholder="Any message"></textarea>
      <button v-if="!loading" @click="submit" class="bg-green-600 rounded text-lg font-bold px-4 py-2 text-white mt-3 shadow">Submit</button>
    </div>
    <div v-if="loading" class="flex flex-row justify-center">
      <div class="text-2xl font-bold">Submitting...</div>
    </div>
    <transition
      name="custom-class-transition"
      enter-active-class="animated zoomIn"
    >
      <div v-if="submitted" class="flex flex-col items-center">
        <div class="text-xl font-bold">Submitted</div>
        <svg class="fill-current text-green-800 w-24" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
        <div class="mx-3">Thank your for contacting. You will be redirected to home page in 5 seconds if not <router-link to="/" class="text-blue-800 underline">click here</router-link>.</div>
      </div>
    </transition>
    <!-- <Footer class="sm:absolute sm:inset-x-0 sm:bottom-0" /> -->
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'Contact',
  data: function() {
    return {
      submitted: false,
      loading: false,
      error: false,
      errorText: '',
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submit: async function() {
      if (!this.name || !this.email) {
        this.errorText = 'Please put name and email both. (Click to dismiss this error)';
        this.error = true;
        return;
      }
      console.log(this.validateEmail(this.email));
      if (!this.validateEmail(this.email)) {
        this.errorText = 'Please enter a valid email address. (Click to dismiss this error)';
        this.error = true;
        return;
      }
      this.loading = true;
      try {
        const res = await db.add({
          name: this.name,
          email: this.email,
          message: this.message
        });
        this.loading = false;
        this.submitted = true;
        // eslint-disable-next-line
        console.log(res);
      } catch(err) {
        // eslint-disable-next-line
        console.log(err);
      }
    },
    validateEmail: function (email) {
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
  }
}
</script>