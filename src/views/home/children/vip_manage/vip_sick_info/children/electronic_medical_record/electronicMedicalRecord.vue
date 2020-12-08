<template>
  <sn-row-has-two-col :left="9" :right="15">
    <electronic-case-simple slot="one-col" class="margin-top-20"/>
    <electronic-case-detail slot="two-col"/>
  </sn-row-has-two-col>
</template>

<script>
import ElectronicCaseSimple
  from "@/views/home/children/vip_manage/vip_sick_info/children/electronic_medical_record/children/ElectronicCaseSimple";
import ElectronicCaseDetail
  from "@/views/home/children/vip_manage/vip_sick_info/children/electronic_medical_record/children/ElectronicCaseDetail";

export default {
  name: "electronicMedicalRecord",
  components: {
    ElectronicCaseSimple,
    ElectronicCaseDetail
  }
}
</script>

<style scoped>

</style>