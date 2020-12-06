<!-- 出库管理 -->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">

      <!-- 库存盘点记录 -->
      <stock-check-record-title
          slot="title"
          v-if="showCheckRecord"/>

      <!-- 完成库存盘点 -->


      <!-- 正在进行库存盘点 -->

      <div slot="content">

        <!-- 库存盘点记录 -->
        <stock-check-find-info-bar
            v-if="showCheckRecord"
            input-placeholder="输入盘点单号"/>

        <stock-check-record-table
            v-if="showCheckRecord"
            @lookCheckDetailOnFinish="lookCheckDetailOnFinish"
            @lookCheckDetailOnCurrent="lookCheckDetailOnCurrent"
            :table-data="stockCheckRecordTableData"/>

        <!-- 完成库存盘点 -->
        <stock-check-find-info-bar
            v-if="showFinishCheckInfo"
            input-placeholder="输入药品名称/编码/生产厂家"/>

        <finish-check-table
            v-if="showFinishCheckInfo"
            :table-data="finishCheckTableData"/>


        <!-- 正在进行库存盘点 -->
        <stock-check-find-info-bar
            v-if="showCurrentCheckInfo"
            input-placeholder="输入盘点单号"/>

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