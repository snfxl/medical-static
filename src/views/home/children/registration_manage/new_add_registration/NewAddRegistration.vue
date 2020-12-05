<!--  新增挂号  -->
<template>
  <sn-three-col-space>
    <div slot="spaceContent">
      <collect-money-dialog/>
      <div>
        <registration-info class="margin-bottom-20"/>
        <registration-sick-info/>
      </div>
    </div>
  </sn-three-col-space>
</template>

<script>
import RegistrationSickInfo
  from "@/views/home/children/registration_manage/new_add_registration/children/RegistrationSickInfo";
import RegistrationInfo
  from "@/views/home/children/registration_manage/new_add_registration/children/registration_info/RegistrationInfo";
import CollectMoneyDialog
  from "@/views/home/children/registration_manage/new_add_registration/children/CollectMoneyDialog";

export default {
  name: "NewAddRegistration",
  components: {
    RegistrationSickInfo,
    RegistrationInfo,
    CollectMoneyDialog
  }
}
</script>

<style scoped>
.pay {
  text-align: right;
}
</style>