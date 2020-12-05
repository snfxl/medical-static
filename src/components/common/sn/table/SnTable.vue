<template>
  <el-table
      :data="tableData"
      :border="isHasBorder"
      style="width: 100%"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':' center'}"
      :height="height">
    <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="item in tableTitle"/>

  </el-table>
</template>

<script>
export default {
  name: "SnTable",

  props: {

    isHasBorder: {
      type: Boolean,
      default: false
    },

    height: {
      type: String,
      default: ''
    },

    //表格标题
    tableTitle: {
      type: Array,
      default() {
        return []
      }
    },

    //表格数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
</style>