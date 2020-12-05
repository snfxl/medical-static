<!--新开就诊 -->
<template>
  <sn-three-col-space class="workspace">
    <div slot="spaceContent">
      <sick-info @showPrescription="showPrescription" @showSickCase="showSickCase"/>
      <prescription v-if="isShowPrescription"/>
      <sick-case v-if="isShowSickCase"/>
    </div>
  </sn-three-col-space>
</template>

<script>
import Prescription from "@/views/home/children/new_see_doctor/children/prescription/Prescription";
import SickInfo from "@/views/home/children/new_see_doctor/children/sick_info/SickInfo";
import SickCase from "@/views/home/children/new_see_doctor/children/sick_case/SickCase";

export default {
  components: {
    Prescription,
    SickInfo,
    SickCase
  },
  data() {
    return {
      isShowPrescription: false,
      isShowSickCase: false
    }
  },
  methods: {
    showPrescription() {
      this.isShowPrescription = true
      this.isShowSickCase = false
    },
    showSickCase() {
      this.isShowPrescription = false
      this.isShowSickCase = true
    }
  }
}
</script>

<style scoped>

</style>