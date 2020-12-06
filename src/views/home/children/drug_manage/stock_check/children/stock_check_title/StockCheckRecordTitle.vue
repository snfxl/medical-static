<template>
  <div class="text-right">
    <el-button type="primary" plain :slot="2" @click="newAddStockCheck">
      <sn-text text="新增盘点"/>
    </el-button>
  </div>
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
  width: 100%;
}
</style>