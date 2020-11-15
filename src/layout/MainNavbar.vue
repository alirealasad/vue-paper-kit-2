<template>
  <navbar
    position="fixed"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
  <template>
    <router-link class="navbar-brand" to="/">
      Paper Kit 2
    </router-link>
  </template>
  <template slot="navbar-menu">
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
              <i class="fa fa-twitter"></i>
              <p class="d-lg-none">Twitter</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
              <i class="fa fa-facebook-square"></i>
              <p class="d-lg-none">Facebook</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
              <i class="fa fa-instagram"></i>
              <p class="d-lg-none">Instagram</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://www.github.com/CreativeTimOfficial/paper-kit" target="_blank">
              <i class="fa fa-github"></i>
              <p class="d-lg-none">GitHub</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://demos.creative-tim.com/paper-kit-2/docs/1.0/getting-started/introduction.html" target="_blank" class="nav-link"><i class="nc-icon nc-book-bookmark"></i> Documentation</a>
          </li>
          <li class="nav-item">
            <a href="https://www.creative-tim.com/product/paper-kit-2-pro?ref=pk2-free-local" target="_blank" class="btn btn-danger btn-round">Upgrade to Pro</a>
          </li>
    </template>
  </navbar>
</template>

<script>
import {
  // DropDown,
  Navbar,
  // NavLink
 } from '@/components';
// import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    // DropDown,
    Navbar,
    // NavLink,
    // [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
