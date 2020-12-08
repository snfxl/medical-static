<template>
  <sn-three-col-space class="workspace">
    <div slot="spaceContent">
      <sick-info @showPrescription="showPrescription" @showSickCase="showSickCase">
        <el-button slot="button" plain type="primary">
          <router-link to="/home/vipSickInfo/14">
            <sn-text text="返回"/>
          </router-link>
        </el-button>
      </sick-info>
      <prescription v-if="isShowPrescription" add-or-save="保存信息"/>
      <sick-case v-if="isShowSickCase"/>
    </div>
  </sn-three-col-space>
</template>

<script>
import Prescription from "@/views/home/children/new_see_doctor/children/prescription/Prescription";
import SickInfo from "@/views/home/children/new_see_doctor/children/sick_info/SickInfo";
import SickCase from "@/views/home/children/new_see_doctor/children/sick_case/SickCase";

export default {
  name: "EditElectronicCase",
  components: {
    Prescription,
    SickInfo,
    SickCase
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
.el-button {
  width: 100px;
}
</style>