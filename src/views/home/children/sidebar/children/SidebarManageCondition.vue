<template>
  <!-- 1.经营概况-->
  <el-submenu index="1">
    <template slot="title" class="item-image">
      <el-image :src="image1"/>
    </template>
    <el-menu-item @click="toManageCondition" class="menu-item">经营概况</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarManageCondition",
  data() {
    return {
      image1: require('@/assets/image/home/sidebar/home1.png'),
    }
  },
  methods: {
    //1 经营概况
    toManageCondition() {
      this.$router.push("/home/manageCondition/0")
    },
  }
}
</script>

<style scoped>

</style>