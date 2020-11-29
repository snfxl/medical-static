<template>
  <div>
    <span>
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
span {
  font-size: 18px;
  font-weight: bold;
}
</style>