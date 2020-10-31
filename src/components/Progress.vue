<template>
  <div class="progress">
      <div class="progress-bar" :class="computedClasses" role="progressbar" :style="`width: ${value}%`" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</template>

<script>
export default {
    name: 'n-progress',
    props: {
      striped: Boolean,
      animated: Boolean,
      type: {
        type: String,
        default: 'default'
      },
      value: {
        type: Number,
        default: 0,
        validator: value => {
          return value >= 0 && value <= 100;
        }
      }
    },
    computed: {
      computedClasses() {
        let classes = [
          { 'progress-bar-striped': this.striped },
          { 'progress-bar-animated': this.animated },
          `progress-bar-${this.type}`
        ];
        return classes;
      }
    }
}
</script>

<style lang="css" scoped>
</style>
