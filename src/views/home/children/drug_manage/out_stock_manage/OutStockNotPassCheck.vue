<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <out-stock-not-pass-check-title slot="title"/>
      <div slot="content">
        <out-stock-not-pass-check-description/>
        <out-stock-not-pass-check-table :table-data="outStockNotPassCheckTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import OutStockNotPassCheckDescription
  from "@/views/home/children/drug_manage/out_stock_manage/children/out_stock_not_pass_check/OutStockNotPassCheckDescription";
import OutStockNotPassCheckTable
  from "@/views/home/children/drug_manage/out_stock_manage/children/out_stock_not_pass_check/OutStockNotPassCheckTable";
import OutStockNotPassCheckTitle
  from "@/views/home/children/drug_manage/out_stock_manage/children/out_stock_not_pass_check/OutStockNotPassCheckTitle";

export default {
  name: "OutStockNotPassCheck",
  components: {
    OutStockNotPassCheckDescription,
    OutStockNotPassCheckTable,
    OutStockNotPassCheckTitle
  },
  data() {
    return {
      outStockNotPassCheckTableData: [
        {
          id: '1',
          drugId: '10512',
          name: '替硝唑氯化钠注射液',
          manufacturer: '上海医药集团有限公司',
          count: '200',
          unit: '盒',
          buyPrice: '1.20',
          salePrice: '2.00',
          batchNumber: '25121651',
          drugValidity: '2022-11-09',
          totalBuyPrice: '240.00',
          totalSalePrice: '400.00',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>