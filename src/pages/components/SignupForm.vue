<template>
  <div class="section section-image section-login" style="background-image: url('img/login-image.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mx-auto">
          <div class="card card-register">
            <h3 class="title mx-auto">Welcome</h3>
            <div class="social-line text-center">
              <a href="#pablo" class="btn btn-neutral btn-facebook btn-just-icon mt-0">
                <i class="fa fa-facebook-square"></i>
              </a>
              <a href="#pablo" class="btn btn-neutral btn-google btn-just-icon mt-0">
                <i class="fa fa-google-plus"></i>
              </a>
              <a href="#pablo" class="btn btn-neutral btn-twitter btn-just-icon mt-0">
                <i class="fa fa-twitter"></i>
              </a>
            </div>
            <form class="register-form">
              <label>Email</label>
              <div class="input-group form-group-no-border">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="nc-icon nc-email-85"></i>
                  </span>
                </div>
                <input type="email" class="form-control" placeholder="Email">
              </div>
              <label>Password</label>
              <div class="input-group form-group-no-border">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="nc-icon nc-key-25"></i>
                  </span>
                </div>
                <input type="password" class="form-control" placeholder="Password">
              </div>
              <button class="btn btn-danger btn-block btn-round">Register</button>
            </form>
            <div class="forgot">
              <a href="#" class="btn btn-link btn-danger">Forgot password?</a>
            </div>
          </div>
          <div class="col text-center">
            <router-link :to="{ name: 'register'}" class="btn btn-outline-neutral btn-round btn-lg" target="_blank">View Register Page</router-link>
          </div>
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
