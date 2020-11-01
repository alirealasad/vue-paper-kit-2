<template>
  <div
    class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate"
    :class="switchClass"
  >
    <div class="bootstrap-switch-container" @click="triggerToggle()">
      <span class="bootstrap-switch-handle-on" :class="typeClass">
        <slot name="on">
          {{ onText }}
        </slot>
      </span>
      <span class="bootstrap-switch-label"></span>
      <span class="bootstrap-switch-handle-off" :class="typeClass">
        <slot name="off">
          {{ offText }}
        </slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'n-switch',
  props: {
    value: [Array, Boolean],
    onText: String,
    offText: String,
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value);
      }
    }
  },
  computed: {
    switchClass() {
      let base = 'bootstrap-switch-';
      let state = this.model ? 'on' : 'off';
      let classes = base + state;
      return classes;
    },
    typeClass() {
      let base = 'bootstrap-switch-';
      let classes = base + this.type;
      return classes;
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    triggerToggle() {
      this.model = !this.model;
    }
  }
};
</script>
