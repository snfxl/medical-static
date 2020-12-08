<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <enter-stock-pass-check-title slot="title"/>
      <div slot="content">
        <enter-stock-pass-check-description/>
        <enter-stock-pass-check-table :table-data="enterStockPassCheckTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import EnterStockPassCheckDescription
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter_stock_pass_check/EnterStockPassCheckDescription";
import EnterStockPassCheckTable
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter_stock_pass_check/EnterStockPassCheckTable";
import EnterStockPassCheckTitle
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter_stock_pass_check/EnterStockPassCheckTitle";
export default {
  name: "EnterStockPassCheck",
  components: {
    EnterStockPassCheckDescription,
    EnterStockPassCheckTable,
    EnterStockPassCheckTitle
  },
  data() {
    return {
      enterStockPassCheckTableData: [
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