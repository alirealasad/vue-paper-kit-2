<template>
  <div class="section section-dark">
    <div class="container">
      <div class="row example-page">
        <div class="col-md-6 text-center">
          <router-link to="/landing" target="_blank">
            <img src="img/examples/landing-page.png" alt="Rounded Image" class="img-rounded img-responsive" style="width: 100%">
          </router-link>
            <router-link :to="{ name: 'landing'}" class="btn btn-outline-neutral btn-round" target="_blank">Landing Page</router-link>
        </div>
        <div class="col-md-6 text-center">
          <router-link to="/profile" target="_blank">
            <img src="img/examples/profile-page.png" alt="Rounded Image" class="img-rounded img-responsive" style="width: 100%">
            </router-link>
          <router-link :to="{ name: 'profile'}" class="btn btn-outline-neutral btn-round" target="_blank">Profile Page</router-link>
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
