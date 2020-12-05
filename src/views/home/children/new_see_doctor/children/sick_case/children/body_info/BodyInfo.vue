<template>
  <div>
    <sn-title title="体格信息" :title-style="{'color':'#40B6FF'}"/>
    <body-info-first-row/>
    <body-info-second-row/>
  </div>
</template>

<script>
import BodyInfoFirstRow
  from "@/views/home/children/new_see_doctor/children/sick_case/children/body_info/children/BodyInfoFirstRow";
import BodyInfoSecondRow
  from "@/views/home/children/new_see_doctor/children/sick_case/children/body_info/children/BodyInfoSecondRow";

export default {
  name: "BodyInfo",
  components: {
    BodyInfoFirstRow,
    BodyInfoSecondRow
  }
}
</script>

<style scoped>

</style>