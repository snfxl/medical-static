<template>
  <div>
    <el-table :data="pageData" stripe style="width: 100%"
              :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
              :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="40"></el-table-column>
      <el-table-column prop="registrationId" label="挂号单" width="110px"/>
      <el-table-column prop="name" label="患者姓名"/>
      <el-table-column prop="sex" label="性别" width="40"/>
      <el-table-column prop="age" label="年龄" width="40"/>
      <el-table-column prop="phoneNumber" label="手机号码" width="110px"/>
      <el-table-column prop="department" label="科室"/>
      <el-table-column prop="doctor" label="挂号医生"/>
      <el-table-column prop="meetDoctorDate" label="接诊时间" width="100px"/>
      <el-table-column prop="needMoney" label="应收金额(元)"/>
      <el-table-column prop="actualMoney" label="实收金额(元)"/>
      <el-table-column prop="meetDoctorStatus" label="就诊状态">
        <template slot-scope="scope">
            <span class="status">
              {{ pageData[scope.$index].meetDoctorStatus }}
            </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   class="margin-right"
          @click="toEditRegistrationInfo">编辑</el-link>
          <el-link type="primary"
                   :underline="false"
                   class="margin-right"
                   v-if="scope.row.meetDoctorStatus === '未就诊'"
                   @click="toNewSeeDoctor">就诊
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.meetDoctorStatus === '未就诊'">退号
          </el-link>
        </template>
      </el-table-column>
    </el-table>
    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
export default {
  name: "RegistrationInfoTable",
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
    toNewSeeDoctor() {
      this.$router.push("/home/newSeeDoctor/2")
    },
    toEditRegistrationInfo(){
      this.$router.push("/home/editRegistrationInfo/3")
    }
  },
}
</script>

<style scoped>
.status {
  color: #66D4A2;
}
</style>