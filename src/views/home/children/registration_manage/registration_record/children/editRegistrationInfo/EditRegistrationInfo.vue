<template>
  <sn-three-col-space>
    <div slot="spaceContent">
      <sn-row-has-two-col :left="19" :right="5" class="margin-bottom-20">
        <sn-text
            font-weight="bold"
            :font-size="20"
            :move-down="7"
            slot="one-col"
            text="编辑挂号信息">
        </sn-text>
        <div slot="two-col">
          <el-button type="danger" plain>
            <sn-text text="退号"/>
          </el-button>
          <el-button type="primary" plain @click="toRegistrationRecord">
            <sn-text text="返回"/>
          </el-button>
        </div>
      </sn-row-has-two-col>

      <order-info/>
      <sn-card-no-title>
        <div slot="content">
          <sn-title title="挂号信息" :title-style="{'color':'#1C79F7'}" class="margin-bottom-20"/>
          <registration-info-first-row
              :show-registration-id="false"/>
          <registration-info-second-row
              :show-registration-date="false"
              :show-registration-worker="false"
              :is-disabled-therapy-cost="true"
              :is-disabled-registration-cost="true"/>
        </div>
      </sn-card-no-title>
      <registration-sick-info class="margin-top-20"/>
    </div>
  </sn-three-col-space>


</template>

<script>
import RegistrationInfoFirstRow
  from "@/views/home/children/registration_manage/new_add_registration/children/registration_info/children/RegistrationInfoFirstRow";
import RegistrationInfoSecondRow
  from "@/views/home/children/registration_manage/new_add_registration/children/registration_info/children/RegistrationInfoSecondRow";
import RegistrationSickInfo
  from "@/views/home/children/registration_manage/new_add_registration/children/RegistrationSickInfo";
import OrderInfo
  from "@/views/home/children/registration_manage/registration_record/children/editRegistrationInfo/children/OrderInfo";

export default {
  name: "EditRegistrationInfo",
  components: {
    RegistrationInfoFirstRow,
    RegistrationInfoSecondRow,
    RegistrationSickInfo,
    OrderInfo
  },
  methods: {
    toRegistrationRecord() {
      this.$router.push("/home/RegistrationRecord/4")
    },
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}
</style>