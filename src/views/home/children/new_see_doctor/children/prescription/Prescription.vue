<!-- 处方 -->
<template>
  <div>
    <down-has-tabs :down-data="downData">
      <sn-text text="添加处方" slot="title"/>
    </down-has-tabs>
    <west-prescription/>
  </div>
</template>

<script>
import DownHasTabs from "@/components/common/tabs/DownHasTabs";
import SnText from "@/components/common/text/SnText";
import WestPrescription from "@/views/home/children/new_see_doctor/children/prescription/children/WestPrescription";

export default {
  name: "Prescription",

  components: {
    DownHasTabs,
    SnText,
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