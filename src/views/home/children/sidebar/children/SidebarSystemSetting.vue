<template>
  <!-- 11.系统设置-->
  <el-submenu index="11">
    <template slot="title">
      <el-image :src="image11"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title">系统设置</span>
      <el-menu-item index="1-1" @click="toSystemSetting">基础设置</el-menu-item>
      <el-menu-item index="1-2" @click="toSystemSetting">费用设置</el-menu-item>
      <el-menu-item index="1-3">模板维护</el-menu-item>
      <el-menu-item index="1-4">供应商管理</el-menu-item>
      <el-menu-item index="1-5">检查项目设置</el-menu-item>
      <el-menu-item index="1-6">员工管理</el-menu-item>
      <el-menu-item index="1-7">字典表维护</el-menu-item>
      <el-menu-item index="1-8">诊所信息维护</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarSystemSetting",
  data() {
    return {
      image11: require('@/assets/image/home/sidebar/home11.png'),
    }
  },
  methods: {
    //8 系统设置
    toSystemSetting() {
      this.$router.push("/home/systemSetting")
    },
  },
}
</script>

<style scoped>

</style>