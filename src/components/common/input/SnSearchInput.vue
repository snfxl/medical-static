<template>
  <div class="demo-input-suffix">
    <el-input
        placeholder="输入患者姓名"
        prefix-icon="el-icon-search"
        v-model="input"
        style="width: 100%">
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
  }
}
</script>

<style scoped>

</style>