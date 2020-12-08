<!-- 出库管理-->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <out-stock-info-title slot="title"/>
      <div slot="content">
        <out-stock-info-find-bar input-placeholder="输入出库单号"/>
        <out-stock-info-table :table-data="outStockInfoTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import OutStockInfoFindBar
  from "@/views/home/children/drug_manage/out_stock_manage/children/out_stock_info/OutStockInfoFindBar";
import OutStockInfoTable
  from "@/views/home/children/drug_manage/out_stock_manage/children/out_stock_info/OutStockInfoTable";
import
  OutStockInfoTitle from "@/views/home/children/drug_manage/out_stock_manage/children/out_stock_info/OutStockInfoTitle";

export default {
  name: "OutStockManage",
  components: {
    OutStockInfoTable,
    OutStockInfoFindBar,
    OutStockInfoTitle
  },
  data() {
    return {
      outStockInfoTableData: [
        {
          id:'1',
          outStockId:'CB51231561',
          outStockType:'科室领药',
          makeFormWorker:'宁姚',
          buyPrice:'242150.02',
          salePrice:'51251.02',
          outStockWorker:'宁姚',
          createDate:'1996-12-25 24:24:24',
          checkStatus:'审核通过',
        },
        {
          id:'1',
          outStockId:'CB51231561',
          outStockType:'科室领药',
          makeFormWorker:'宁姚',
          buyPrice:'242150.02',
          salePrice:'51251.02',
          outStockWorker:'宁姚',
          createDate:'1996-12-25 24:24:24',
          checkStatus:'审核未通过',
        },
        {
          id:'1',
          outStockId:'CB51231561',
          outStockType:'科室领药',
          makeFormWorker:'宁姚',
          buyPrice:'242150.02',
          salePrice:'51251.02',
          outStockWorker:'宁姚',
          createDate:'1996-12-25 24:24:24',
          checkStatus:'未审核',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>