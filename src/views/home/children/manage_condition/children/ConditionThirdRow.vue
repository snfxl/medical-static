<template>
  <div class="third-row">
    <el-card class="box-card third-row-content">
      <div slot="header" class="clearfix">
        <span>今日门诊记录</span>
      </div>
      <el-table :data="pageData" stripe style="width: 100%"
                :header-cell-style="{'text-align':'center'}"
                :cell-style="{'text-align':'center'}">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="status" label="就诊状态">
          <template slot-scope="scope">
            <span class="status">
              {{ pageData[scope.$index].status }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="sinkId" label="患者编号"/>
        <el-table-column prop="name" label="患者姓名"/>
        <el-table-column prop="sex" label="性别"/>
        <el-table-column prop="age" label="年龄"/>
        <el-table-column prop="phoneNumber" label="手机号码"/>
        <el-table-column prop="clinicType" label="门诊类型"/>
        <el-table-column prop="department" label="科室"/>
        <el-table-column prop="doctor" label="挂号医生"/>
        <el-table-column prop="updateTime" label="最后更新" width="100px"/>
      </el-table>
      <!-- 分页导航-->
      <!--
        @getPageData 自定义监听事件 当子组件发送该事件后监听到自动执行getPageData方法
        getPageData方法中的参数用来获取到子组件传来的数据
      -->
      <sn-page :table-data="tableData" class="page" @getPageData="getPageData"/>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //数据
      tableData: [
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
        {
          id: '1',
          status: '待接诊',
          sinkId: '15',
          name: 'sn',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: 'fxl',
          updateTime: '2019-11-12 12:08:12'
        },
      ],
      //每页数据
      pageData: []
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    }
  },
}
</script>

<style scoped lang="less">
.third-row {
  margin-top: 25px;
  .third-row-content {
    //标题
    .clearfix {
      span {
        font-size: 16px;
        font-weight: bold;
      }
    }

    //就诊状态字体颜色
    .status {
      color: #66D4A2;
    }

    //分页导航
    .page {
      margin-top: 20px;
      text-align: right;
    }
  }
}

</style>