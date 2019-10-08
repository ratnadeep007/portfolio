import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Contact from '@/pages/Contact.vue';
import Frontend from '@/pages/Frontend.vue';
import MachineLearning from '@/pages/MachineLearning.vue';
import Backend from '@/pages/Backend.vue';
import Cloud from '@/pages/Cloud.vue';
import Other from '@/pages/Other.vue';
import MobileApps from '@/pages/MobileApps.vue';
import Future from '@/pages/Future.vue';
import OtherPlatforms from '@/pages/OtherPlatforms.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/skills/frontend',
    component: Frontend
  },
  {
    path: '/skills/machine',
    component: MachineLearning
  },
  {
    path: '/skills/cloud',
    component: Cloud
  },
  {
    path: '/skills/other',
    component: Other
  },
  {
    path: '/skills/future',
    component: Future
  },
  {
    path: '/skills/backend',
    component: Backend
  },
  {
    path: '/skills/mobile',
    component: MobileApps
  },
  {
    path: '/skills/otherplatform',
    component: OtherPlatforms
  }
]

const router = new VueRouter({
  routes
});

export default router;