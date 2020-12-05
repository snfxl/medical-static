<template>
  <sn-card-with-title class="sick-info">
    <div slot="title">
      <sn-title title="患者信息" :title-style="titleStyle"/>
    </div>
    <div slot="content">
      <sick-info-first-row ref="first"></sick-info-first-row>
      <sick-info-second-row ref="second" :show-it="false"></sick-info-second-row>
      <sick-info-third-row ref="third"></sick-info-third-row>
      <sn-input>
        <sn-text text="备注" slot="title"/>
      </sn-input>
    </div>
  </sn-card-with-title>
</template>

<script>
import SickInfoFirstRow from "@/views/home/children/new_see_doctor/children/sick_info/children/SickInfoFirstRow";
import SickInfoSecondRow from "@/views/home/children/new_see_doctor/children/sick_info/children/SickInfoSecondRow";
import SickInfoThirdRow from "@/views/home/children/new_see_doctor/children/sick_info/children/SickInfoThirdRow";

export default {
  name: "RegistrationSickInfo",
  components: {
    SickInfoFirstRow,
    SickInfoSecondRow,
    SickInfoThirdRow
  },
  data() {
    return {
      titleStyle: {
        'color': '#21A3F1',
        'font-size': '18px'
      }
    }
  },
}
</script>

<style scoped>

</style>