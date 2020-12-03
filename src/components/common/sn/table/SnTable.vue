<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':' center'}"
      :height="height">
    <el-table-column :prop="item.prop" :label="item.label" v-for="item in tableTitle">
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  name: "SnTable",

  props: {

    height: {
      type: String,
      default: ''
    },

    //表格标题
    tableTitle: {
      type: Array,
      default() {
        return [
          {
            prop: 'date',
            label: '日期'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'address',
            label: '地址'
          },
        ];
      }
    },

    //表格数据
    tableData: {
      type: Array,
      default() {
        return [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  },
}
</script>

<style scoped>
</style>