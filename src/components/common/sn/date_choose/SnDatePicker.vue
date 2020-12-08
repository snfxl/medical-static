<template>
  <div class="block">
    <div class="demonstration">
      <slot name="title"/>
    </div>
    <el-date-picker
        v-model="value"
        type="date"
        placeholder="选择日期"
        :style="setStyle">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  props: {
    setStyle: {
      type: Object,
      default() {
        return {
          'width': '100%'
        }
      }
    },
  },
}
</script>

<style scoped>
.demonstration {
  margin-bottom: 10px;
}
</style>