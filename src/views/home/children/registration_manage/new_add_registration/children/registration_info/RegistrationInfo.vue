<template>
  <sn-card-with-title>
    <div slot="title">
      <sn-title title="挂号信息" :title-style="titleStyle"/>
    </div>
    <div slot="content">
      <registration-info-first-row class="margin-bottom"/>
      <registration-info-second-row/>
    </div>
  </sn-card-with-title>
</template>

<script>
import RegistrationInfoFirstRow
  from "@/views/home/children/registration_manage/new_add_registration/children/registration_info/children/RegistrationInfoFirstRow";
import RegistrationInfoSecondRow
  from "@/views/home/children/registration_manage/new_add_registration/children/registration_info/children/RegistrationInfoSecondRow";

export default {
  name: "RegistrationInfo",
  components: {
    RegistrationInfoFirstRow,
    RegistrationInfoSecondRow
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