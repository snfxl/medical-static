<template>
  <!-- 8.药品管理-->
  <el-submenu index="8">
    <template slot="title">
      <el-image :src="image8"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title">药品管理</span>
      <el-menu-item index="1-1" @click="toDrugManage">药品调价</el-menu-item>
      <el-menu-item index="1-2">库存盘点</el-menu-item>
      <el-menu-item index="1-3">库存管理</el-menu-item>
      <el-menu-item index="1-4">出库管理</el-menu-item>
      <el-menu-item index="1-5">入库管理</el-menu-item>
      <el-menu-item index="1-6">药品信息维护</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarDrugManage",
  data() {
    return {
      image8: require('@/assets/image/home/sidebar/home8.png'),
    }
  },
  methods: {
    //药品管理
    toDrugManage() {
      this.$router.push("/home/drugManage")
    },
  },
}
</script>

<style scoped>

</style>