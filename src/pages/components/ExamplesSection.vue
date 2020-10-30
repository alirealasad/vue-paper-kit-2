<template>
  <div class="section section-dark">
    <div class="container">
      <div class="row example-page">
        <div class="col-md-6 text-center">
          <a href="examples/landing.html" target="_blank">
            <img src="img/examples/landing-page.png" alt="Rounded Image" class="img-rounded img-responsive" style="width: 100%">
            <router-link :to="{ name: 'landing'}" class="btn btn-outline-neutral btn-round" target="_blank">Landing Page</router-link>
          </a>
        </div>
        <div class="col-md-6 text-center">
          <a href="examples/profile.html" target="_blank">
            <img src="img/examples/profile-page.png" alt="Rounded Image" class="img-rounded img-responsive" style="width: 100%">
            <router-link :to="{ name: 'profile'}" class="btn btn-outline-neutral btn-round" target="_blank">Profile Page</router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
