<!-- 药品信息 -->
<template>
  <sn-table-has-checkbox
      :table-title="tableTitle"
      :table-data="tableData"
      height="400"
      :add-title="addTitle">

  </sn-table-has-checkbox>
</template>

<script>
export default {

  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    tableTitle: {
      type: Array,
      default() {
        return []
      }
    },
    addTitle: {
      type: String,
      default: ''
    }
  },
}
</script>
<style scoped>

</style>