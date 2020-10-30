import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/index.vue'
import Landing from '@/pages/landing.vue'
import Register from '@/pages/register.vue'
import Profile from '@/pages/profile.vue'
import MainNavbar from '@/layout/MainNavbar.vue';
import MainFooter from '@/layout/MainFooter.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: { default: Index, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: 'black' }
    }
  },
  {
    path: '/landing',
    name: 'landing',
    components: { default: Landing, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: 'black' }
    }
  },
  {
    path: '/register',
    name: 'register',
    components: { default: Register, header: MainNavbar },
    props: {
      header: { colorOnScroll: 400 }
    }
  },
  {
    path: '/profile',
    name: 'profile',
    components: { default: Profile, header: MainNavbar },
    props: {
      header: { colorOnScroll: 400 }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
