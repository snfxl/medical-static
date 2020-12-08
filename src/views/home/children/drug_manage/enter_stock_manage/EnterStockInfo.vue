<!-- 出库管理-->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <enter-stock-info-title slot="title"/>
      <div slot="content">
        <enter-stock-info-find-bar input-placeholder="输入入库单号/供应商"/>
        <enter-stock-info-table :table-data="enterStockInfoTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import EnterStockInfoFindBar
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter__stock_info/EnterStockInfoFindBar";
import EnterStockInfoTable
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter__stock_info/EnterStockInfoTable";
import EnterStockInfoTitle
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter__stock_info/EnterStockInfoTitle";

export default {
  name: "EnterStockInfo",
  components: {
    EnterStockInfoFindBar,
    EnterStockInfoTable,
    EnterStockInfoTitle
  },
  data() {
    return {
      enterStockInfoTableData: [
        {
          id: '1',
          outStockId: 'CB51231561',
          outStockType: '科室领药',
          makeFormWorker: '宁姚',
          buyPrice: '242150.02',
          salePrice: '51251.02',
          outStockWorker: '宁姚',
          createDate: '1996-12-25 24:24:24',
          checkStatus: '审核通过',
        },
        {
          id: '1',
          outStockId: 'CB51231561',
          outStockType: '科室领药',
          makeFormWorker: '宁姚',
          buyPrice: '242150.02',
          salePrice: '51251.02',
          outStockWorker: '宁姚',
          createDate: '1996-12-25 24:24:24',
          checkStatus: '审核未通过',
        },
        {
          id: '1',
          outStockId: 'CB51231561',
          outStockType: '科室领药',
          makeFormWorker: '宁姚',
          buyPrice: '242150.02',
          salePrice: '51251.02',
          outStockWorker: '宁姚',
          createDate: '1996-12-25 24:24:24',
          checkStatus: '未审核',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>