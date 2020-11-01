<template>
  <fade-transition>
    <div class="alert alert-with-icon" :class="[`alert-${type}`]" role="alert" v-if="visible">
      <div class="container">
        <slot v-if="!dismissible">
        <div class="message"><slot></slot></div>
      </slot>
        <slot v-else name="alert-wrapper">
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="dismissAlert"
          >
            <span aria-hidden="true">
              <i class="nc-icon nc-simple-remove"></i>
            </span>
          </button>
          <div class="message"><slot></slot></div>
        </slot>
      </div>
    </div>
  </fade-transition>
</template>
<script>
import { FadeTransition } from 'vue2-transitions';

export default {
  name: 'alert',
  components: {
    FadeTransition
  },
  props: {
    type: {
      type: String,
      default: 'default',
      description: 'Alert type'
    },
    dismissible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    dismissAlert() {
      this.visible = false;
    }
  }
};
</script>
