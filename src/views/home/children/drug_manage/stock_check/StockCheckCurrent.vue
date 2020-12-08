<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <!-- 标题 -->
      <StockCheckCurrentTitle slot="title"/>

      <div slot="content">
        <!-- 搜索导航栏-->
        <stock-check-find-bar
            input-placeholder="输入药品名称"/>

        <!-- 表格 -->
        <current-check-table
            :table-data="currentCheckTableDat"/>

      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import CurrentCheckTable
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_table/CurrentCheckTable";
import StockCheckCurrentTitle
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_title/StockCheckCurrentTitle";
import StockCheckFindBar
  from "@/views/home/children/drug_manage/stock_check/children/stock_check_find_bar/StockCheckFindBar";

export default {
  name: "StockCheckCurrent",
  data() {
    return {
      currentCheckTableDat: [
        {
          id: '1',
          drugId: '1231651',
          name: '超敏C-反应蛋白',
          locationId: '1001',
          prescriptionType: '西/成药',
          specification: '6g*10袋/盒',
          manufacturer: '上海医药集团',
          nowStock: '200盒',
          checkStock: '198盒',
          stockAddOrReduce: '-2盒',
          remark: '阿打算'
        }
      ]
    }
  },
  components: {
    CurrentCheckTable,
    StockCheckFindBar,
    StockCheckCurrentTitle
  }
}
</script>

<style scoped>

</style>