<template>
  <div>
    <div class="title">
      <slot name="title"/>
    </div>
    <el-input v-model="input" style="width: 100%" :placeholder="inputPlaceholder"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  props: {
    inputPlaceholder: {
      type: String,
      default: '请输入内容'
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}

</style>