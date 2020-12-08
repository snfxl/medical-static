<!-- 处方 -->
<template>
  <sn-down-has-tabs :down-data="downData" :add-or-save="addOrSave">
    <sn-text text="选择处方" slot="title">
    </sn-text>
  </sn-down-has-tabs>
</template>

<script>
import WestPrescription from "@/views/home/children/new_see_doctor/children/prescription/children/WestPrescription";

export default {
  name: "Prescription",

  props: {
    addOrSave: {
      type: String,
      default: '添加处方'
    },
  },

  components: {
    WestPrescription
  },
  data() {
    return {
      downData: ['西/成药处方', '中药处方', '检查项目'],
    }
  }
}
</script>

<style scoped>
</style>