<!--新开就诊 -->
<template>
  <sn-three-col-space class="workspace">
    <div slot="spaceContent">
      <sick-info @showPrescription="showPrescription" @showSickCase="showSickCase"/>
      <prescription v-if="isShowPrescription"/>
    </div>
  </sn-three-col-space>
</template>

<script>
import Prescription from "@/views/home/children/new_see_doctor/children/prescription/Prescription";
import SickInfo from "@/views/home/children/new_see_doctor/children/sink_info/SickInfo";

export default {
  components: {
    Prescription,
    SickInfo
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