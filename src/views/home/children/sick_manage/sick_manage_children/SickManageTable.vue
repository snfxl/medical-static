<template>
  <div>
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="sickId" label="患者编号" width="110px"/>
      <el-table-column prop="name" label="患者姓名"/>
      <el-table-column prop="sex" label="性别"/>
      <el-table-column prop="age" label="年龄"/>
      <el-table-column prop="phoneNumber" label="手机号码" width="110px"/>
      <el-table-column label="会员等级">
        <template slot-scope="scope">
            <span class="vip-grade">
              {{ scope.row.vipGrade }}
            </span>
        </template>
      </el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="100px"/>
      <el-table-column prop="meetDoctor" label="接待医生"/>

      <el-table-column label="操作" width="230">
        <template slot-scope="scope">

          <el-link type="primary"
                   :underline="false"
                   class="margin-right">接诊
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   @click="toEditSick"
                   class="margin-right">编辑
          </el-link>
          <el-link type="primary"
                   class="margin-right"
                   :underline="false">设置会员
          </el-link>

          <el-link type="primary"
                   :underline="false"
                   class="margin-right">删除
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
  name: "SickManageTable",
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
    toEditSick() {
      this.$router.push("/home/editSick/7")
    }
  },
}
</script>

<style scoped>
.vip-grade {
  color: orange;
  font-size: 20px;
  font-style: italic;
}
</style>