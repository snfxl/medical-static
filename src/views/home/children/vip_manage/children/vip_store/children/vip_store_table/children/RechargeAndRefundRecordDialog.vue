<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogRecordVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="充值/退款记录"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="50%"
        :visible.sync="dialogRecordVisible">
      <!-- 标题 -->
      <div slot="title">
        <sn-text
            class="text-left"
            text="充值/退款记录"
            :font-size="18"
            font-weight="bold"/>
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text text="2513216512" class="margin-right-20"/>
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text text="宁姚" class="margin-right-20"/>
          <sn-text text="余额 :" class="margin-right"/>
          <sn-text text="21351.02" font-weight="bold" font-color="orange"/>
        </div>
      </div>
      <!-- 信息 -->
      <sn-table
          :is-has-border="true"
          :table-data="rechargeAndRefundRecordTableData"
          :table-title="rechargeAndRefundRecordTableTitle"/>

      <div slot="footer" class="dialog-footer margin-top">
        <el-button type="primary" @click="dialogRecordVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "RechargeAndRefundRecordDialog",
  data() {
    return {
      dialogRecordVisible: false,
      rechargeAndRefundRecordTableTitle: [
        {
          prop: 'transactionDate',
          label: '交易时间',
          cellWidth: '160'
        },
        {
          prop: 'transactionType',
          label: '交易类型'
        },
        {
          prop: 'transactionMoney',
          label: '交易金额(元)'
        },
        {
          prop: 'giveMoney',
          label: '赠送金额(元)'
        },
        {
          prop: 'totalMoney',
          label: '合计金额(元)'
        },
        {
          prop: 'worker',
          label: '操作员'
        },
      ],
      rechargeAndRefundRecordTableData: [
        {
          transactionDate: '2019-09-08 10:08:34',
          transactionType: '充值',
          transactionMoney: '1000.00',
          giveMoney: '200',
          totalMoney: '1200.22',
          worker: '陈平安',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>