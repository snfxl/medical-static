<template>
  <el-button type="primary" plain @click="newAddOutStock">
    <sn-text text="新增入库"/>
  </el-button>
</template>

<script>
export default {
  name: "EnterStockInfoTitle",
  methods: {
    newAddOutStock() {
      this.$router.push('/home/newAddEnterStockInfo/9')
    }
  },
}
</script>

<style scoped>
.el-button{
  width: 100%;
}
</style>