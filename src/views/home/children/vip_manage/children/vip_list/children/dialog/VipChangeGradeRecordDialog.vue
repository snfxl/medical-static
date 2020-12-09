<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogVipGradeRecordRecordVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="等级变更记录"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="50%"
        :visible.sync="dialogVipGradeRecordRecordVisible">
      <!-- 标题 -->
      <div slot="title">
        <sn-text
            class="text-left"
            text="等级变更记录"
            :font-size="18"
            font-weight="bold"/>
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text text="2513216512" class="margin-right-20"/>
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text text="宁姚" class="margin-right-20"/>
        </div>
      </div>
      <!-- 信息 -->
      <sn-table
          :is-has-border="true"
          :table-data="vipGradeRecordRecordTableData"
          :table-title="vipGradeRecordRecordTableTitle"/>

      <div slot="footer" class="dialog-footer margin-top">
        <el-button type="primary" @click="dialogVipGradeRecordRecordVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "VipChangeGradeRecordDialog",
  data() {
    return {
      dialogVipGradeRecordRecordVisible: false,
      vipGradeRecordRecordTableTitle: [
        {
          prop: 'changeDate',
          label: '变动时间',
          cellWidth: '160'
        },
        {
          prop: 'changeType',
          label: '变更类型'
        },
        {
          prop: 'vipName',
          label: '会员名称'
        },
        {
          prop: 'worker',
          label: '操作员'
        },
      ],
      vipGradeRecordRecordTableData: [
        {
          changeDate: '2019-09-08 10:08:34',
          changeType: '升级',
          vipName: '普通会员',
          worker: '陈平安',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>