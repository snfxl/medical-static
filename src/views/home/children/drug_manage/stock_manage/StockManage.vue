<!-- 库存管理-->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <stock-manage-title slot="title"/>
      <div slot="content">
        <stock-manage-find-bar input-placeholder="输入药品名称/编码/生成厂家"/>
        <stock-manage-table :table-data="stockManageTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import StockManageTitle from "@/views/home/children/drug_manage/stock_manage/children/StockManageTitle";
import StockManageFindBar from "@/views/home/children/drug_manage/stock_manage/children/StockManageFindBar";
import StockManageTable from "@/views/home/children/drug_manage/stock_manage/children/StockManageTable";

export default {
  name: "StickManage",
  components: {
    StockManageTable,
    StockManageFindBar,
    StockManageTitle,

  },
  data() {
    return {
      stockManageTableData: [
        {
          id: '1',
          drugId: '1231651',
          locationId: '1001',
          name: '超敏C-反应蛋白',
          prescriptionType: '西/成药',
          specification: '6g*10袋/盒',
          drugType: '口服',
          manufacturer: '上海医药集团',
          stock: '200盒',
          buyPrice: '27000.00',
          salePrice: '27000.00'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>