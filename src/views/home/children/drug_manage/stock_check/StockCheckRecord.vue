<!-- 出库管理 -->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <!-- 库存盘点记录 -->
      <stock-check-record-title slot="title"/>
      <div slot="content">
        <!-- 库存盘点记录 -->
        <stock-check-record-find-bar input-placeholder="输入盘点单号"/>
        <stock-check-record-table :table-data="stockCheckRecordTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import StockCheckRecordTitle
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_title/StockCheckRecordTitle";
import StockCheckRecordTable
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_table/StockCheckRecordTable";
import StockCheckRecordFindBar from "@/views/home/children/drug_manage/stock_check/children/stock_check_find_bar/StockCheckRecordFindBar";


export default {
  name: "DrugChangePrice",
  data() {
    return {
      stockCheckRecordTableData: [
        {
          id: '2',
          checkId: '12315465',
          checkDate: '1225-12-25 13:14:14',
          worker: '陈平安',
          checkStatus: '正在盘点',
        },
        {
          id: '2',
          checkId: '12315465',
          checkDate: '1225-12-25 13:14:14',
          worker: '陈平安',
          checkStatus: '盘点完成',
        },
      ],
    }
  },
  components: {
    StockCheckRecordFindBar,
    StockCheckRecordTitle,
    StockCheckRecordTable,
  },
  methods: {
  },
}
</script>

<style scoped>

</style>