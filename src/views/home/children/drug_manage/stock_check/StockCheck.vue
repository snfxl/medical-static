<!-- 出库管理 -->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">

      <stock-check-record-title
          slot="title"
          v-if="showCheckRecord"/>

      <div slot="content">
        <stock-check-find-info-bar/>

        <!-- 库存盘点记录表格 -->
        <stock-check-record-table
            v-if="showCheckRecord"
            @lookCheckDetailOnFinish="lookCheckDetailOnFinish"
            @lookCheckDetailOnCurrent="lookCheckDetailOnCurrent"
            :table-data="stockCheckRecordTableData"/>

        <!-- 完成库存盘点的表格 -->
        <finish-check-table
            v-if="showFinishCheckInfo"
            :table-data="finishCheckTableData"/>

        <!-- 正在进行库存盘点的表格 -->
        <current-check-table
            v-if="showCurrentCheckInfo"
            :table-data="currentCheckTableDat"/>

      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import StockCheckFindInfoBar from "@/views/home/children/drug_manage/stock_check/children/StockCheckFindInfoBar";
import StockCheckRecordTitle
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_title/StockCheckRecordTitle";
import StockCheckRecordTable
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_table/StockCheckRecordTable";
import FinishCheckTable
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_table/FinishCheckTable";
import CurrentCheckTable
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_table/CurrentCheckTable";


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
      finishCheckTableData: [],
      currentCheckTableDat: [],
      showFinishCheckInfo: false,
      showCurrentCheckInfo: false,
      showCheckRecord: true,
    }
  },
  components: {
    StockCheckFindInfoBar,
    StockCheckRecordTitle,
    StockCheckRecordTable,
    FinishCheckTable,
    CurrentCheckTable
  },
  methods: {
    lookCheckDetailOnFinish() {

      this.showFinishCheckInfo = true
      this.showCurrentCheckInfo = false
      this.showCheckRecord = false
    },
    lookCheckDetailOnCurrent() {

    }
  },
}
</script>

<style scoped>

</style>