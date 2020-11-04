<template>
  <footer class="footer footer-black footer-white" :class="{'section-dark':isDark}">
    <div class="container">
      <div class="row">
        <nav class="footer-nav">
          <ul>
            <li>
              <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com/" target="_blank">Blog</a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/license" target="_blank">Licenses</a>
            </li>
          </ul>
        </nav>
        <div class="credits ml-auto">
          <span class="copyright">
            &copy; {{ year }}, made with <i class="fa fa-heart heart"></i>
             by
             <a href="https://www.creative-tim.com" target="_blank" rel="noopener"
               >Creative Tim</a
             >.
             and Coded by
             <a href="https://github.com/alirealasad" target="_blank" rel="noopener"
               >Asad Ali</a
             >.

          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    isDark: Boolean,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="css" scoped>
</style>
