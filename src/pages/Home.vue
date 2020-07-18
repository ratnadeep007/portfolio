<template>
  <div>
    <Jumbo class="mt-6" />
    <!-- <Info /> -->
    <!-- <LongInfo /> -->
    <!-- <Footer /> -->
    <div class="container mx-auto flex-col">
      <div
        class="flex-row justify-center text-center text-gray-800"
      >Software Engineer who loves to work with recent technologies and experiment with upcoming technologies.</div>
      <Timeline />
    </div>
  </div>
</template>

<script>
import Jumbo from "@/components/Jumbo.vue";
import Timeline from "@/components/Timeline.vue";
// import Info from "@/components/Info.vue";
// import LongInfo from '@/components/LongInfo.vue';
export default {
  name: "Home",
  components: {
    Jumbo,
    Timeline
    // Info
    // LongInfo
  }
};
</script>