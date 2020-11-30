<template>
  <div>
    <span :style="setStyle">
      {{ text }}
    </span>
    <span>
      <slot name="other"/>
    </span>
  </div>
</template>

<script>
export default {

  computed: {
    setStyle() {
      return {
        'font-size': this.fontSize + 'px'
      }
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: '14'
    },
  }
}
</script>

<style scoped>
</style>