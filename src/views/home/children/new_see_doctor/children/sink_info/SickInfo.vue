<!-- 病人信息 -->
<template>
  <sn-card-with-title class="sick-info">
    <div slot="title">
      <el-button type="primary" plain size="medium">处方</el-button>
      <el-button type="danger" plain size="medium">病例</el-button>
    </div>
    <div slot="content">
      <sink-info-first-row></sink-info-first-row>
      <sink-info-second-row></sink-info-second-row>
      <sink-info-third-row></sink-info-third-row>
      <sink-info-fourth-row></sink-info-fourth-row>
    </div>
  </sn-card-with-title>
</template>

<script>
import SnCardWithTitle from "@/components/common/card/SnCardWithTitle";
import SinkInfoFirstRow from "@/views/home/children/new_see_doctor/children/sink_info/children/SinkInfoFirstRow";
import SinkInfoSecondRow from "@/views/home/children/new_see_doctor/children/sink_info/children/SinkInfoSecondRow";
import SinkInfoThirdRow from "@/views/home/children/new_see_doctor/children/sink_info/children/SinkInfoThirdRow";
import SinkInfoFourthRow from "@/views/home/children/new_see_doctor/children/sink_info/children/SinkInfoFourthRow";

export default {
  components: {
    SnCardWithTitle,
    SinkInfoFirstRow,
    SinkInfoSecondRow,
    SinkInfoThirdRow,
    SinkInfoFourthRow
  }
}
</script>

<style scoped lang="less">
.sick-info {
  padding-left: 20px;
  padding-right: 20px;
  .el-button{
    width: 90px;
  }
}
</style>