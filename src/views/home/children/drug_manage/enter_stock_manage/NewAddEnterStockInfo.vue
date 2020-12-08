<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <new-add-enter-stock-title slot="title"/>
      <div slot="content">
        <new-add-enter-stock-description/>
        <new-add-enter-stock-table :table-data="newAddEnterStockInfoData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import NewAddEnterStockDescription
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter_add_enter_stock_info/NewAddEnterStockDescription";
import NewAddEnterStockTable
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter_add_enter_stock_info/NewAddEnterStockTable";
import NewAddEnterStockTitle
  from "@/views/home/children/drug_manage/enter_stock_manage/children/enter_add_enter_stock_info/NewAddEnterStockTitle";

export default {
  name: "NewAddEnterStockInfo",
  components: {
    NewAddEnterStockDescription,
    NewAddEnterStockTable,
    NewAddEnterStockTitle
  },
  data() {
    return {
      newAddEnterStockInfoData: [
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
        },
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
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>