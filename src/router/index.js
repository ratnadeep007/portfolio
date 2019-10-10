import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/pages/Home.vue';
// import Contact from '@/pages/Contact.vue';
// import Frontend from '@/pages/Frontend.vue';
// import MachineLearning from '@/pages/MachineLearning.vue';
// import Backend from '@/pages/Backend.vue';
// import Cloud from '@/pages/Cloud.vue';
// import Other from '@/pages/Other.vue';
// import MobileApps from '@/pages/MobileApps.vue';
// import Future from '@/pages/Future.vue';
// import OtherPlatforms from '@/pages/OtherPlatforms.vue';
// import Work from '@/pages/Work.vue';
// import Databases from '@/pages/Databases.vue';

const Home = () => import('@/pages/Home.vue');
const Contact = () => import('@/pages/Contact.vue');
const Frontend = () => import('@/pages/Frontend.vue');
const MachineLearning = () => import('@/pages/MachineLearning.vue');
const Backend = () => import('@/pages/Backend.vue');
const Cloud = () => import('@/pages/Cloud.vue');
const Other = () => import('@/pages/Other.vue');
const MobileApps = () => import('@/pages/MobileApps.vue');
const Future = () => import('@/pages/Future.vue');
const OtherPlatforms = () => import('@/pages/OtherPlatforms.vue');
const Work = () => import('@/pages/Work.vue');
const Databases = () => import('@/pages/Databases.vue');
const Error = () => import('@/pages/404.vue');

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
  },
  {
    path: '/skills/databases',
    component: Databases
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;