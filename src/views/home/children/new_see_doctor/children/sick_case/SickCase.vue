<template>
  <sn-card-no-title class="margin-top">
    <div slot="content">
      <body-info/>
      <case-info/>
    </div>
  </sn-card-no-title>
</template>

<script>
import BodyInfo from "@/views/home/children/new_see_doctor/children/sick_case/children/body_info/BodyInfo";
import CaseInfo from "@/views/home/children/new_see_doctor/children/sick_case/children/case_info/CaseInfo";

export default {
  name: "SinkCase",
  components: {
    BodyInfo,
    CaseInfo
  }
}
</script>

<style scoped>

</style>