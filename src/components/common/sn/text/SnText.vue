<template>
  <div>
    <span :style="setStyle" v-if="text">
      {{ text }}
    </span>
    <span :style="setStyle" v-else>
      {{ number }}
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
        'font-size': this.fontSize + 'px',
        'color': this.fontColor,
        'font-weight': this.fontWeight
      }
    },
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
    fontWeight:{
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 0
    },
    fontColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>