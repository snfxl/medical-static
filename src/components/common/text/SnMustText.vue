<template>
  <div>
    <span> {{ text }}</span>
    <i>*</i>
  </div>
</template>

<script>
export default {
  name: "MustText",
  props: {
    text: {
      type: String,
      default: ''
    }
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