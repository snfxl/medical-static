<template>
  <div>
    <sn-row-has-two-col :left=12 :right=12 class="case-info-row">
      <sn-input slot="one-col">
        <sn-text :text="leftDescription" slot="title" class="margin-bottom"/>
        <case-info-dialog slot="input-after"/>
      </sn-input>
      <sn-input slot="two-col">
        <sn-text :text="rightDescription" slot="title" class="margin-bottom"/>
        <case-info-dialog slot="input-after"/>
      </sn-input>
    </sn-row-has-two-col>
  </div>
</template>

<script>
import CaseInfoDialog
  from "@/views/home/children/new_see_doctor/children/sick_case/children/case_info/children/CaseInfoDialog";

export default {
  name: "CaseInfoFirstRow",
  components: {CaseInfoDialog},
  props: {
    leftDescription: {
      type: String,
      default: ''
    },
    rightDescription: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.case-info-row {
  /deep/ .el-input__inner {
    height: 100px;
  }

  /deep/ .el-dialog__body {
    padding-top: 0;
  }
}

</style>