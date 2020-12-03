<template>
  <div class="demo-input-suffix">
    <el-input
        :placeholder="inputPlaceholder"
        prefix-icon="el-icon-search"
        v-model="input"
        :style="{'width': '100%','font-size':'12px'}">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SnSearchBox",
  data() {
    return {
      input: '',
    }
  },
  props: {
    inputPlaceholder: {
      type: String,
      default: '输入患者姓名'
    }
  }
}
</script>

<style scoped>

</style>