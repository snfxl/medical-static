<template>
  <div class="side-bar">
    <div class="title-img-div">
      <el-image :src="image0" class="title-img"/>
    </div>
    <el-menu default-active="1-4-1"
             class="el-menu-vertical-demo no-back-color"
             @open="handleOpen" @close="handleClose"
             :collapse="isCollapse">
      <!-- 1.经营概况-->
      <sidebar-manage-condition/>
      <!-- 2.工作台-->
      <sidebar-workspace/>
      <!-- 3.新开就诊-->
      <sidebar-new-see-doctor/>
      <!-- 4.挂号管理-->
      <sidebar-registration-manage/>
      <!-- 5.药品零售-->
      <sidebar-drug-sale/>
      <!-- 6.收费管理-->
      <sidebar-cost-manage/>
      <!-- 7.患者管理-->
      <sidebar-sick-manage/>
      <!-- 8.药品管理-->
      <sidebar-drug-manage/>
      <!-- 9.会员管理-->
      <sidebar-vip-manage/>
      <!-- 10.统计报表-->
      <sidebar-statistics-table/>
      <!-- 11.系统设置-->
      <sidebar-system-setting/>
    </el-menu>
  </div>
</template>

<script>
import SidebarManageCondition from "@/views/home/children/sidebar/children/SidebarManageCondition";
import SidebarNewSeeDoctor from "@/views/home/children/sidebar/children/SidebarNewSeeDoctor";
import SidebarWorkspace from "@/views/home/children/sidebar/children/SidebarWorkspace";
import SidebarRegistrationManage from "@/views/home/children/sidebar/children/SidebarRegistrationManage";
import SidebarDrugSale from "@/views/home/children/sidebar/children/SidebarDrugSale";
import SidebarCostManage from "@/views/home/children/sidebar/children/SidebarCostManage";
import SidebarSickManage from "@/views/home/children/sidebar/children/SidebarSickManage";
import SidebarDrugManage from "@/views/home/children/sidebar/children/SidebarDrugManage";
import SidebarVipManage from "@/views/home/children/sidebar/children/SidebarVipManage";
import SidebarStatisticsTable from "@/views/home/children/sidebar/children/SidebarStatisticsTable";
import SidebarSystemSetting from "@/views/home/children/sidebar/children/SidebarSystemSetting";

export default {
  name: "Sidebar",
  components: {
    SidebarSickManage,
    SidebarCostManage,
    SidebarDrugSale,
    SidebarRegistrationManage,
    SidebarNewSeeDoctor,
    SidebarWorkspace,
    SidebarManageCondition,
    SidebarDrugManage,
    SidebarVipManage,
    SidebarStatisticsTable,
    SidebarSystemSetting
  },
  data() {
    return {
      //侧边栏相关
      isCollapse: true,
      image0: require('@/assets/image/home/sidebar/home0.png'),
      fit: 'fill'
    }
  },
  methods: {
    //侧边栏相关
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style scoped lang="less">

.no-back-color {
  background-color: transparent;
  border: none;
}

.title-img-div {
  width: 50px/1.25;
  height: 50px/1.25;
  background-color: #F0F1FD;
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50px/1.25/2;

  .title-img {
    margin-top: 6px;
  }
}

</style>