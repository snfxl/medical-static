<template>
  <sn-three-col-space>
    <div slot="spaceContent">
      <sn-card-with-title>
        <vip-sick-info-title
            @toPersonInfo="toPersonInfo"
            @toElectronicMedicalRecord="toElectronicMedicalRecord"
            @toCostRecord="toCostRecord"
            slot="title"
            class="move-down"/>
        <person-info slot="content" v-if="showPersonInfo"/>
        <electronic-medical-record slot="content" v-if="showElectronicMedicalRecord"/>
        <cost-record-show slot="content" v-if="showCostRecord"/>
      </sn-card-with-title>
    </div>
  </sn-three-col-space>
</template>

<script>
import PersonInfo from "@/views/home/children/vip_manage/vip_sick_info/children/person_info/PersonInfo";
import CostRecordShow from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_show/CostRecordShow";
import electronicMedicalRecord
  from "@/views/home/children/vip_manage/vip_sick_info/children/electronic_medical_record/electronicMedicalRecord";
import VipSickInfoTitle from "@/views/home/children/vip_manage/vip_sick_info/children/VipSickInfoTitle";

export default {
  name: "VipSickInfo",
  data() {
    return {
      showPersonInfo: true,
      showElectronicMedicalRecord: false,
      showCostRecord: false
    }
  },
  components: {
    PersonInfo,
    CostRecordShow,
    electronicMedicalRecord,
    VipSickInfoTitle
  },
  methods: {
    toPersonInfo() {
      this.showPersonInfo = true
      this.showElectronicMedicalRecord = false
      this.showCostRecord = false
    },
    toElectronicMedicalRecord() {
      this.showPersonInfo = false
      this.showElectronicMedicalRecord = true
      this.showCostRecord = false
    },
    toCostRecord() {
      this.showPersonInfo = false
      this.showElectronicMedicalRecord = false
      this.showCostRecord = true
    }
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 12px;
}
</style>