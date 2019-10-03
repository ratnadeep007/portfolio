<template>
  <div>
    <Jumbo class="mt-6" />
    <Info />
    <!-- <LongInfo /> -->
    <Footer />
  </div>
</template>

<script>
import Jumbo from '@/components/Jumbo.vue'
import Info from '@/components/Info.vue';
import Footer from '@/components/Footer.vue';
// import LongInfo from '@/components/LongInfo.vue';
export default {
  name: 'Home',
  components: {
    Jumbo,
    Info,
    Footer
    // LongInfo
  }
}
</script>