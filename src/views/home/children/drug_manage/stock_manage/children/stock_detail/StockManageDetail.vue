<!-- 库存详情 -->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <stock-manage-detail-title slot="title"/>
      <div slot="content">
        <stock-drug-detail-info/>
        <stock-manage-detail-table :table-data="stockManageDetailTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import StockManageDetailTitle
  from "@/views/home/children/drug_manage/stock_manage/children/stock_detail/children/StockManageDetailTitle";
import StockManageDetailTable
  from "@/views/home/children/drug_manage/stock_manage/children/stock_detail/children/StockManageDetailTable";
import StockDrugDetailInfo
  from "@/views/home/children/drug_manage/stock_manage/children/stock_detail/children/StockDrugDetailInfo";

export default {
  name: "StockManageDetail",
  components: {
    StockManageDetailTable,
    StockManageDetailTitle,
    StockDrugDetailInfo
  },
  data() {
    return {
      stockManageDetailTableData: [
        {
          id: '1',
          stockId: 'SP5643215',
          operationDate: '1996-12-30 12:20:20',
          type: '处方',
          count: '-2盒',
          batchNumber: '3132156',
          buyMoney: '2512021.54',
          saleMoney: '2151.23'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>