<template>
  <div>
    <div class="page-header section-dark" style="background-image: url('img/antoine-barres.jpg')">
      <div class="filter"></div>
      <div class="content-center">
        <div class="container">
          <div class="title-brand">
            <h1 class="presentation-title">Paper Kit 2</h1>
            <div class="fog-low">
              <img src="img/fog-low.png" alt="">
            </div>
            <div class="fog-low right">
              <img src="img/fog-low.png" alt="">
            </div>
          </div>
          <h2 class="presentation-subtitle text-center">Make your mark with a Free Bootstrap 4 UI Kit! </h2>
        </div>
      </div>
      <div class="moving-clouds" style="background-image: url('img/clouds.png'); "></div>
      <h6 class="category category-absolute">Designed and coded by
        <a href="https://www.creative-tim.com" target="_blank">
          <img src="img/creative-tim-white-slim2.png" class="creative-tim-logo">
        </a>
      </h6>
    </div>
    <div class="main">
      <basic-elements></basic-elements>
      <navigation></navigation>
      <progress-pagination></progress-pagination>
      <notifications></notifications>
      <!-- fix typography -->
      <typography></typography>
      <javascript-components></javascript-components>
      <carousel-section></carousel-section>
      <nucleo-icons-section></nucleo-icons-section>
      <div class="section section-dark">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Completed with examples</h2>
              <p class="description">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>
            </div>
          </div>
        </div>
      </div>
      <signup-form></signup-form>
      <examples-section></examples-section>
      <download-section></download-section>
  </div>
</div>
</template>

<script>
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import ProgressPagination from './components/ProgressPagination';
import Notifications from './components/Notifications';
import Typography from './components/Typography';
import JavascriptComponents from './components/JavascriptComponents';
import CarouselSection from './components/CarouselSection';
import NucleoIconsSection from './components/NucleoIconsSection';
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    BasicElements,
    Navigation,
    ProgressPagination,
    Notifications,
    Typography,
    JavascriptComponents,
    CarouselSection,
    NucleoIconsSection,
    SignupForm,
    ExamplesSection,
    DownloadSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
