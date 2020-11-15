<template>
  <button
    type="button"
    class="navbar-toggler"
    :class="[{ toggled: toggled }, { collapsed: !toggled }]"
    data-toggle="collapse"
    data-target="#navbar"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
   <span class="navbar-toggler-bar bar1"></span>
   <span class="navbar-toggler-bar bar2"></span>
   <span class="navbar-toggler-bar bar3"></span>
  </button>
</template>
<script>
export default {
  name: 'navbar-toggle-button',
  props: {
    toggled: Boolean
  }
};
</script>
<style></style>
