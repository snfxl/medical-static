<template>
  <div class="sn-input">
    <div class="title">
      <slot name="title"/>
    </div>
    <el-input  v-model="inputValue" :style="inputStyle" :placeholder="inputPlaceholder"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    inputPlaceholder: {
      type: String,
      default: '请输入内容'
    },
    inputValue: {
      type: String,
      default: ''
    },
    inputStyle:{
      type: Object,
      default(){
        return {
          'width': '100%'
        }
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}

.sn-input {
  margin-right: 5px;
}
</style>