<template>
  <el-button type="primary" plain @click="newAddOutStock">
    <sn-text text="新增出库"/>
  </el-button>
</template>

<script>
export default {
  name: "OutStockMangeTitle",
  methods: {
    newAddOutStock() {
      this.$router.push('/home/newAddOutStockInfo/10')
    }
  },
}
</script>

<style scoped>
.el-button{
  width: 100%;
}
</style>