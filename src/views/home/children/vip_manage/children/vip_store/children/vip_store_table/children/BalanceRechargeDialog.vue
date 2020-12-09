<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogRechargeVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="充值"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="25%"
        :visible.sync="dialogRechargeVisible">
      <!-- 标题 -->
      <sn-text
          class="text-left"
          text="余额充值"
          slot="title"
          :font-size="18"
          font-weight="bold"/>
      <div>
        <!-- 个人基本信息 -->
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text text="56512316551"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text text="宁姚"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="余额 :" class="margin-right"/>
          <sn-text text="859123.51" font-color="orange" font-weight="bold"/>
        </div>
        <!-- 充值金额-->
        <sn-input class="text-left margin-top ">
          <sn-must-text
              text="充值金额 (元)"
              slot="title"/>
        </sn-input>
        <sn-input class="margin-top text-left">
          <sn-must-text text="赠送金额 (元)" slot="title"/>
        </sn-input>
        <!-- 支付方式 -->
        <sn-must-text
            text="支付方式"
            class="margin-top margin-bottom text-left"/>
        <!-- 单选框-->
        <div class="to-flex margin-bottom">
          <el-radio v-model="payMethod" label="1" class="to-flex">
            <sn-text text="现金"/>
          </el-radio>
          <el-radio v-model="payMethod" label="2" class="to-flex">
            <sn-text text="支付宝"/>
          </el-radio>
          <el-radio v-model="payMethod" label="3" class="to-flex">
            <sn-text text="微信"/>
          </el-radio>
          <el-radio v-model="payMethod" label="4" class="to-flex">
            <sn-text text="银行卡"/>
          </el-radio>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRechargeVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogRechargeVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "BalanceRechargeInfo",
  data() {
    return {
      dialogRechargeVisible: false,
      payMethod: '1'
    }
  },
}
</script>

<style scoped>

</style>