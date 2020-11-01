<template>
  <div>
    <div class="container tim-container">
      <div class="title">
        <h3>Notifications</h3>
      </div>
    </div>
    <div id="notifications">

      <alert type="info">
        This is a plain notification!
      </alert>

      <alert type="success" dismissible>
        This is a notification with close button.
      </alert>

      <alert type="warning" dismissible>
        <i class="nc-icon nc-bell-55"></i> This is a notification with close button and icon.
      </alert>

      <alert type="danger" dismissible>
        <i class="nc-icon nc-bell-55"></i> This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style
      </alert>
    </div>
  </div>
</template>

<script>
import { Alert } from '@/components';
export default {
  components: {
    Alert
  }
};
</script>

<style lang="css" scoped>
</style>
