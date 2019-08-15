<template>
  <div id="app">
    <Jumbo />
    <Info />
    <LongInfo />
  </div>
</template>

<script>
import Jumbo from './components/Jumbo.vue'
import Info from './components/Info.vue';
import LongInfo from './components/LongInfo.vue';

export default {
  name: 'app',
  components: {
    Jumbo,
    Info,
    LongInfo
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
