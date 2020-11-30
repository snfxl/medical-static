<template>
  <div>
    <span :style="titleStyle"> {{ text }}</span>
    <i>*</i>
    <span :style="otherStyle">
      <slot name="other"/>
    </span>
  </div>
</template>

<script>
export default {
  name: "MustText",
  props: {
    text: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    otherStyle: {
      type: Object,
      default() {
        return {}
      }
    },
  }
}
</script>

<style scoped>
span {
  font-size: 14px;
  margin-right: 2px;
}

i {
  color: pink;
  font-size: 18px;
  position: relative;
  top: 2px;
}
</style>