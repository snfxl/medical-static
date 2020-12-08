<template>
  <sn-row-has-two-col :left="22" :right="2">
    <sn-text
        text="盘点记录"
        :move-down="10"
        :font-size="20"
        slot="one-col"
        font-color="#666EE8"
        font-weight="bold"/>

    <el-button type="primary" plain @click="newAddStockCheck" slot="two-col">
      <sn-text text="新增盘点"/>
    </el-button>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "DrugChangePriceTitle",
  methods: {
    newAddStockCheck() {
      this.$emit('newAddStockCheck')
    },
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}
</style>