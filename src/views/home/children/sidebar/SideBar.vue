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
      <el-submenu index="1">
        <template slot="title" class="item-image">
          <el-image :src="image1"/>
        </template>
        <el-menu-item @click="toManageCondition" class="menu-item">经营概况</el-menu-item>
      </el-submenu>
      <!-- 2.工作台-->
      <el-submenu index="2">
        <template slot="title">
          <el-image :src="image2"/>
        </template>
        <el-menu-item @click="toWorkSpace">工作台</el-menu-item>
      </el-submenu>
      <!-- 3.新开就诊-->
      <el-submenu index="3">
        <template slot="title">
          <el-image :src="image3"/>
        </template>
        <el-menu-item @click="toNewSeeDoctor">新开就诊</el-menu-item>
      </el-submenu>
      <!-- 4.挂号管理-->
      <el-submenu index="4">
        <template slot="title">
          <el-image :src="image4"/>
        </template>
        <el-menu-item-group>
          <span slot="title">挂号管理</span>
          <el-menu-item index="1-1" @click="toRegistrationManage">新增挂号</el-menu-item>
          <el-menu-item index="1-2">挂号管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 5.药品零售-->
      <el-submenu index="5">
        <template slot="title">
          <el-image :src="image5"/>
        </template>
        <el-menu-item @click="toDrugSale">药品零售</el-menu-item>
      </el-submenu>
      <!-- 6.收费管理-->
      <el-submenu index="6">
        <template slot="title">
          <el-image :src="image6"/>
        </template>
        <el-menu-item @click="toCostManage">收费管理</el-menu-item>
      </el-submenu>
      <!-- 7.患者管理-->
      <el-submenu index="7">
        <template slot="title">
          <el-image :src="image7"/>
        </template>
        <el-menu-item @click="toSinkPersonManage">患者管理</el-menu-item>
      </el-submenu>
      <!-- 8.药品管理-->
      <el-submenu index="8">
        <template slot="title">
          <el-image :src="image8"/>
        </template>
        <el-menu-item-group>
          <span slot="title">药品管理</span>
          <el-menu-item index="1-1" @click="toDrugManage">药品调价</el-menu-item>
          <el-menu-item index="1-2">库存盘点</el-menu-item>
          <el-menu-item index="1-3">库存管理</el-menu-item>
          <el-menu-item index="1-4">出库管理</el-menu-item>
          <el-menu-item index="1-5">入库管理</el-menu-item>
          <el-menu-item index="1-6">药品信息维护</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 9.会员管理-->
      <el-submenu index="9">
        <template slot="title">
          <el-image :src="image9"/>
        </template>
        <el-menu-item @click="toVipManage">会员管理</el-menu-item>
      </el-submenu>
      <!-- 10.统计报表-->
      <el-submenu index="10">
        <template slot="title">
          <el-image :src="image10"/>
        </template>
        <el-menu-item-group>
          <span slot="title">统计报表</span>
          <el-menu-item index="1-1" @click="toStatisticsTable">药品统计</el-menu-item>
          <el-menu-item index="1-2">检查项目统计</el-menu-item>
          <el-menu-item index="1-3">患者统计</el-menu-item>
          <el-menu-item index="1-4">收费统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 11.系统设置-->
      <el-submenu index="11">
        <template slot="title">
          <el-image :src="image11"/>
        </template>
        <el-menu-item-group>
          <span slot="title">系统设置</span>
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
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  components: {},
  data() {
    return {
      //侧边栏相关
      isCollapse: true,
      image0: require('@/assets/image/home/sidebar/home0.png'),
      image1: require('@/assets/image/home/sidebar/home1.png'),
      image2: require('@/assets/image/home/sidebar/home2.png'),
      image3: require('@/assets/image/home/sidebar/home3.png'),
      image4: require('@/assets/image/home/sidebar/home4.png'),
      image5: require('@/assets/image/home/sidebar/home5.png'),
      image6: require('@/assets/image/home/sidebar/home6.png'),
      image7: require('@/assets/image/home/sidebar/home7.png'),
      image8: require('@/assets/image/home/sidebar/home8.png'),
      image9: require('@/assets/image/home/sidebar/home9.png'),
      image10: require('@/assets/image/home/sidebar/home10.png'),
      image11: require('@/assets/image/home/sidebar/home11.png'),
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
    //路由相关
    //1 经营概况
    toManageCondition() {
      this.$router.push("/home/manageCondition/0")
    },
    //2 收费管理
    toCostManage() {
      this.$router.push("/home/costManage")
    },
    //3 药品零售
    toDrugSale() {
      this.$router.push("/home/drugSale")
    },
    //4 新开就诊
    toNewSeeDoctor() {
      this.$router.push("/home/newSeeDoctor/2")
    },
    //5 挂号管理
    toRegistrationManage() {
      this.$router.push("/home/registrationManage")
    },
    //6 患者管理
    toSinkPersonManage() {
      this.$router.push("/home/sinkPersonManage")
    },
    //7 统计报表
    toStatisticsTable() {
      this.$router.push("/home/statisticsTable")
    },
    //8 系统设置
    toSystemSetting() {
      this.$router.push("/home/systemSetting")
    },
    //9 会员管理
    toVipManage() {
      this.$router.push("/home/vipManage")
    },
    //10 工作空间
    toWorkSpace() {
      this.$router.push("/home/workSpace/1")
    },
    //11 药品管理
    toDrugManage() {
      this.$router.push("/home/drugManage")
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

span {
  color: pink;
  font-size: 16px;
}

</style>