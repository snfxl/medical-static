<!--新开就诊 -->
<template>
  <sn-three-col-space class="workspace">
    <div slot="spaceContent">
      <sick-info/>
      <prescription/>
    </div>
  </sn-three-col-space>
</template>

<script>
import SnThreeColSpace from "@/components/common/layout/SnThreeColSpace";
import SickInfo from "@/views/home/children/new_see_doctor/children/sink_info/SickInfo";
import Prescription from "@/views/home/children/new_see_doctor/children/prescription/Prescription";

export default {
  components: {
    Prescription,
    SickInfo,
    SnThreeColSpace
  }
}
</script>

<style scoped>

</style>