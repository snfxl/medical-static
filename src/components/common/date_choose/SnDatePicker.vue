<template>
  <div class="block">
    <div class="demonstration">
      <slot name="title"/>
    </div>
    <el-date-picker
        v-model="value"
        type="date"
        placeholder="选择日期"
        style="width: 100%">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.demonstration {
  margin-bottom: 10px;
}
</style>