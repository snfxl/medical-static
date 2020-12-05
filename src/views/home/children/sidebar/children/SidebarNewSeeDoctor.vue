<template>
  <!-- 3.新开就诊-->
  <el-submenu index="3">
    <template slot="title">
      <el-image :src="image3"/>
    </template>
    <el-menu-item @click="toNewSeeDoctor">新开就诊</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarNewSeeDoctor",
  data() {
    return {
      image3: require('@/assets/image/home/sidebar/home3.png'),
    }
  },
  methods: {
    //4 新开就诊
    toNewSeeDoctor() {
      this.$router.push("/home/newSeeDoctor/2")
    },
  }
}
</script>

<style scoped>

</style>