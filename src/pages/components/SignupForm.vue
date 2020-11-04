<template>
  <div
      class="section section-image section-login"
      style="background-image: url('img/login-image.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mx-auto">

          <card type="register">
            <div slot="raw-content">
              <h3 class="title mx-auto text-center">Welcome</h3>
              <div class="social-line text-center">
                <n-button type="neutral" class="mt-0 btn-facebook" icon><i class="fa fa-facebook"></i></n-button>
                <n-button type="neutral" class="mt-0 btn-google" icon><i class="fa fa-google-plus"></i></n-button>
                <n-button type="neutral" class="mt-0 btn-twitter" icon><i class="fa fa-twitter"></i></n-button>
              </div>
              <div class="register-form">
                  <fg-input
                   label="Email"
                   class="form-group-no-border"
                    placeholder="Email"
                    addon-left-icon="nc-icon nc-email-85"
                  >
                  </fg-input>
                  <fg-input
                    label="Password"
                    class="form-group-no-border"
                    placeholder="password"
                    addon-left-icon="nc-icon nc-key-25"
                  >
                  </fg-input>
                  <n-button type="danger" block round>Register</n-button>
              </div>
              <div class="forgot">
                <n-button type="danger" link>Forgot password?</n-button>
              </div>
            </div>
          </card>
          <div class="col text-center">
            <router-link :to="{ name: 'register'}" class="btn btn-outline-neutral btn-round btn-lg" target="_blank">View Register Page</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
   Card,
   FormGroupInput,
   Button
  } from '@/components';

export default {
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
