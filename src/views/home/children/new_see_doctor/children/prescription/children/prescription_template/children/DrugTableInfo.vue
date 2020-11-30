<!-- 药品信息 -->
<template>
  <sn-table-has-checkbox
      :table-title="tableTitle"
      :table-data="tableData"
      height="400"
      add-title="添加药品">

  </sn-table-has-checkbox>
</template>

<script>
export default {

  props:{
    tableData:{
      type:Array,
      default(){
        return [
        ]
      }
    },
    tableTitle:{
      type:Array,
      default(){
        return [

        ]
      }
    }
  },
}
</script>
<style scoped>

</style>