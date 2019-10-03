<template>
  <div id="app" class="bg-white">
    <NavTop />
    <Jumbo class="mt-6" />
    <Info />
    <!-- <LongInfo /> -->
    <Footer />
  </div>
</template>

<script>
import Jumbo from './components/Jumbo.vue'
import Info from './components/Info.vue';
// import LongInfo from './components/LongInfo.vue';
import NavTop from './components/NavTop.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    NavTop,
    Jumbo,
    Info,
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
