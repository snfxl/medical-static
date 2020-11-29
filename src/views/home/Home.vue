<template>
  <div>
    <el-container>
      <el-aside width="50px">
        <side-bar/>
      </el-aside>
      <el-container>
        <el-header class="header-bar">
          <header-bar/>
          <el-divider></el-divider>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from "@/views/home/children/sidebar/SideBar";
import HeaderBar from "@/views/home/children/header_bar/HeaderBar";

export default {
  name: "Home",
  components: {
    SideBar, HeaderBar
  }
}
</script>

<style scoped lang="less">
.home-content {
  background-color: pink;
  margin-left: 10px;
}

.side-bar {
  height: 100%;
  background-color: #002140;
  position: fixed;
}

//顶部导航
.el-header {
  line-height: 75px/1.25;
}
//分割线
.el-divider{
  margin-top: 0;
}

.el-main{
  padding-top: 0;
  padding-bottom: 0;
}
</style>