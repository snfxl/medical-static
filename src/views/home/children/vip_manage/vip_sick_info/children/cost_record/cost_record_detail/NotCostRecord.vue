<!-- 未收费记录-->
<template>
  <sn-three-col-space>
    <div slot="spaceContent">
      <sn-card-with-title>
        <not-cost-record-title slot="title"/>
        <div slot="content">
          <!-- 收费项目明细 -->
          <cost-record-project-detail cost-record-totle="收费明细"/>
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
import CostRecordProjectDetail
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/CostRecordProjectDetail";
import CostRecordOrderInfo
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/CostRecordOrderInfo";
import CostRecordSickInfo
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/CostRecordSickInfo";
import CostRecordMeetDoctorInfo
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/CostRecordMeetDoctorInfo";
import NotCostRecordTitle
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/children/title/NotCostRecordTitle";

export default {
  name: "NotCostRecord",
  components: {
    NotCostRecordTitle,
    CostRecordProjectDetail,
    CostRecordOrderInfo,
    CostRecordSickInfo,
    CostRecordMeetDoctorInfo
  }
}
</script>

<style scoped>

</style>