<template>
  <div>
    <div class="container tim-container">
      <div class="title">
        <h3>Notifications</h3>
      </div>
    </div>
    <div id="notifications">
      <div class="alert alert-info">
        <div class="container">
          <span>This is a plain notification! </span>
        </div>
      </div>
      <div class="alert alert-success">
        <div class="container">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <i class="nc-icon nc-simple-remove"></i>
          </button>
          <span>This is a notification with close button. </span>
        </div>
      </div>
      <div class="alert alert-warning alert-with-icon" data-notify="container">
        <div class="container">
          <div class="alert-wrapper">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <i class="nc-icon nc-simple-remove"></i>
            </button>
            <div class="message"><i class="nc-icon nc-bell-55"></i> This is a notification with close button and icon.</div>
          </div>
        </div>
      </div>
      <div class="alert alert-danger alert-with-icon" data-notify="container">
        <div class="container">
          <div class="alert-wrapper">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <i class="nc-icon nc-simple-remove"></i>
            </button>
            <div class="message"><i class="nc-icon nc-bell-55"></i> This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</div>
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
