<template>
  <div>
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="40"></el-table-column>
      <el-table-column prop="orderId" label="订单编号" width="110px"/>
      <el-table-column prop="orderType" label="订单类型"/>
      <el-table-column prop="name" label="患者姓名"/>
      <el-table-column prop="sex" label="性别" width="40"/>
      <el-table-column prop="age" label="年龄" width="40"/>
      <el-table-column prop="phoneNumber" label="手机号码" width="110px"/>
      <el-table-column prop="department" label="科室"/>
      <el-table-column prop="doctor" label="接诊医生"/>
      <el-table-column prop="createDate" label="创建时间" width="100px"/>

      <el-table-column
          v-if="nowCostStatus !== '已退费'"
          prop="needMoney"
          label="应收金额(元)">
      </el-table-column>

      <el-table-column
          v-if="nowCostStatus === '已收费'"
          prop="actualMoney"
          label="实收金额(元)" />

      <el-table-column
          v-if="nowCostStatus === '已收费'"
          prop="payMethod"
          label="支付方式"/>

      <el-table-column prop="costStatus" label="收费状态">
        <template slot-scope="scope">
            <span class="status">
              {{ pageData[scope.$index].costStatus }}
            </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">

          <!-- 处于待收费状态 显示 -->
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.costStatus === '待收费'"
                   class="margin-right">收费
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.costStatus === '待收费'"
                   class="margin-right">编辑
          </el-link>
          <el-link type="primary"
                   v-if="scope.row.costStatus === '待收费'"
                   :underline="false">删除
          </el-link>

          <!-- 处于已收费状态显示 -->
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.costStatus === '已收费' || scope.row.costStatus === '已退费'"
                   class="margin-right">查看
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.costStatus === '已收费'"
                   class="margin-right">退费
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
  name: "CostManageTable",
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  computed: {
    nowCostStatus() {
      if (this.pageData.length > 0) {
        return this.pageData[0].costStatus
      }
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
    test() {
      console.log(this.pageData[0])
    }
  },

}
</script>

<style scoped>
.status {
  color: #66D4A2;
}
</style>