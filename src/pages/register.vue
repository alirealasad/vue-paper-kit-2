<template>
  <div class="page-header" style="background-image: url('img/login-image.jpg');">
    <div class="filter"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 ml-auto mr-auto">
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
        </div>
      </div>
    </div>
    <div class="footer register-footer text-center">
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
