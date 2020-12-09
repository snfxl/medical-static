<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="cardId" label="卡号"/>
      <el-table-column prop="vipType" label="会员类型"/>
      <el-table-column prop="vipGrade" label="会员等级">
        <template slot-scope="scope">
          <sn-text
              class="vip"
              :text="scope.row.vipGrade"/>
        </template>
      </el-table-column>
      <el-table-column prop="vipName" label="会员姓名">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="toVipSickInfo">
            <sn-text :text="scope.row.vipName"/>
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="手机号码" width="110"/>
      <el-table-column prop="cumulativeStore" label="累计储值(元)"/>
      <el-table-column prop="cumulativeGive" label="累计赠送(元)"/>
      <el-table-column prop="balance" label="余额(元)"/>
      <el-table-column prop="storeCumulativeConsume" label="储值累计消费(元)"/>

      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <div class="to-flex">
            <!-- 充值弹出框 -->
            <balance-recharge-dialog/>

            <!-- 退款弹出框-->
            <refund-dialog/>

            <!-- 充值/退款记录 -->
            <recharge-and-refund-record-dialog/>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <sn-page
        :table-data="tableData"
        slot="two-col"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
import BalanceRechargeDialog
  from "@/views/home/children/vip_manage/children/vip_store/children/vip_store_table/children/BalanceRechargeDialog";
import RefundDialog
  from "@/views/home/children/vip_manage/children/vip_store/children/vip_store_table/children/RefundDialog";
import RechargeAndRefundRecordDialog
  from "@/views/home/children/vip_manage/children/vip_store/children/vip_store_table/children/RechargeAndRefundRecordDialog";

export default {
  name: "VipStoreTable",
  components: {
    BalanceRechargeDialog,
    RefundDialog,
    RechargeAndRefundRecordDialog
  },
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
    toVipSickInfo() {
      this.$router.push('/home/vipSickInfo/14')
    }
  },
}
</script>

<style scoped>
/deep/ .el-dialog__body {
  padding-top: 0;
  padding-bottom: 0;
}
</style>