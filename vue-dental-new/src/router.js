import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OurPractice from './views/OurPractice.vue'
import DentalServices from './views/DentalServices.vue'
import SmilesGallery from './views/SmilesGallery.vue'
import ContactUs from './views/ContactUs.vue'
import PatientCenter from './views/PatientCenter.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/our-practice',
      name: 'our-practice',
      component: OurPractice
    },
    {
      path: '/dental-services',
      name: 'dental-services',
      component: DentalServices
    },
    {
      path: '/smiles-gallery',
      name: 'smiles-gallery',
      component: SmilesGallery
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs
    },
    {
      path: '/patient-center',
      name: 'patient-center',
      component: PatientCenter
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
