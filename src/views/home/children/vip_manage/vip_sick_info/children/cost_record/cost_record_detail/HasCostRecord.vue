<!-- 已收费记录 -->
<template>
  <sn-three-col-space>
    <div slot="spaceContent">
      <sn-card-with-title>
        <has-cost-record-title slot="title"/>
        <div slot="content">
          <!-- 收费项目明细 -->
          <cost-record-project-detail cost-record-totle="收费明细"/>
          <el-divider/>
          <!-- 订单明细 -->
          <cost-record-order-info/>
          <el-divider/>
          <!-- 人员明细 -->
          <cost-record-sick-info/>
          <el-divider/>
          <!-- 接诊信息-->
          <cost-record-meet-doctor-info/>
        </div>
      </sn-card-with-title>
    </div>
  </sn-three-col-space>
</template>

<script>
import HasCostRecordTitle
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/title/HasCostRecordTitle";
import CostRecordProjectDetail
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/CostRecordProjectDetail";
import CostRecordOrderInfo
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/CostRecordOrderInfo";
import CostRecordSickInfo
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/CostRecordSickInfo";
import CostRecordMeetDoctorInfo
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/CostRecordMeetDoctorInfo";

export default {
  name: "HasCostRecord",
  components: {
    HasCostRecordTitle,
    CostRecordProjectDetail,
    CostRecordOrderInfo,
    CostRecordSickInfo,
    CostRecordMeetDoctorInfo
  }
}
</script>

<style scoped>

</style>