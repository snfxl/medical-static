<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="50"></el-table-column>
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
      <el-table-column prop="phoneNumber" label="手机号码" width="115"/>
      <el-table-column prop="cumulativeConsume" label="累计消费(元)"/>
      <el-table-column prop="storeResidue" label="储值余额(元)"/>
      <el-table-column prop="cumulativeStore" label="累计储值(元)"/>
      <el-table-column prop="integral" label="积分"/>
      <el-table-column prop="openCardDate" label="开卡时间" width="100"/>
      <el-table-column prop="expireDate" label="到期时间" width="100"/>

      <el-table-column prop="vipStatus" label="会员状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.vipStatus"/>
        </template>
      </el-table-column>


      <el-table-column label="操作" width="120">
        <template slot-scope="scope">

          <sn-dialog-left :content-item-count="5">

            <sn-text text="操作" slot="title"/>

            <!-- 充值弹出框-->
            <balance-recharge-dialog slot="itemName0"/>
            <!-- 变动积分弹出框-->
            <change-integral-dialog slot="itemName1"/>
            <!-- 退款弹出框-->
            <refund-dialog slot="itemName2"/>
            <!--  会员等级变更记录 -->
            <vip-change-grade-record-dialog slot="itemName3"/>
            <!-- 会员设置 -->
            <vip-set-grade-dialog slot="itemName4"/>

          </sn-dialog-left>


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
import RefundDialog
  from "@/views/home/children/vip_manage/children/vip_store/children/vip_store_table/children/RefundDialog";
import BalanceRechargeDialog
  from "@/views/home/children/vip_manage/children/vip_store/children/vip_store_table/children/BalanceRechargeDialog";
import ChangeIntegralDialog
  from "@/views/home/children/vip_manage/children/vip_integral/children/vip_integral_table/children/ChangeIntegralDialog";
import VipChangeGradeRecordDialog
  from "@/views/home/children/vip_manage/children/vip_list/children/dialog/VipChangeGradeRecordDialog";
import VipSetGradeDialog from "@/views/home/children/vip_manage/children/vip_list/children/dialog/VipSetGradeDialog";

export default {
  name: "StockManageTable",
  components: {
    RefundDialog,
    BalanceRechargeDialog,
    ChangeIntegralDialog,
    VipChangeGradeRecordDialog,
    VipSetGradeDialog
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
</style>