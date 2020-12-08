<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <new-add-out-stock-title slot="title"/>
      <div slot="content">
        <new-add-out-stock-description/>
        <new-add-out-stock-table :table-data="newAddOutStockInfoData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import NewAddOutStockDescription
  from "@/views/home/children/drug_manage/out_stock_manage/children/new_add_out_stock_info/NewAddOutStockDescription";
import NewAddOutStockTable
  from "@/views/home/children/drug_manage/out_stock_manage/children/new_add_out_stock_info/NewAddOutStockTable";
import NewAddOutStockTitle
  from "@/views/home/children/drug_manage/out_stock_manage/children/new_add_out_stock_info/NewAddOutStockTitle";

export default {
  name: "NewAddOutStockInfo",
  components: {
    NewAddOutStockDescription,
    NewAddOutStockTable,
    NewAddOutStockTitle
  },
  data() {
    return {
      newAddOutStockInfoData: [
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