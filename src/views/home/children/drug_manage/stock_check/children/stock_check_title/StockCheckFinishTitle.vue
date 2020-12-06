<template>

  <sn-row-has-two-col>

    <sn-text text="查看盘点详情" :font-size="20" font-color="#666EE8" font-weight="bold"/>

  </sn-row-has-two-col>

    <el-button type="primary" plain :slot="2" @click="returnStockCheckRecord">
      <sn-text text="返回"/>
    </el-button>
</template>

<script>
export default {
  name: "StockCheckFinishTitle"
}
</script>

<style scoped>

</style>