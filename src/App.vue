<template>
  <div id="app" class="bg-white">
    <NavTop />
    <transition 
      name="router-anim"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import NavTop from './components/NavTop.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    NavTop,
    // Jumbo,
    // Info,
    // LongInfo,
    Footer
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
