<template>
  <sn-row-has-four-col
      :one=6
      :two=6
      :three=6
      :four=6>
    <sn-input :is-disabled="true" class="move-down"
              :input-value-from-parent="registrationId"
              slot="one-col"
              v-if="showRegistrationId">
      <sn-text text="挂号单号" slot="title"/>
    </sn-input>
    <sn-select :select-data="departmentSelectData" slot="two-col">
      <sn-must-text text="科室" slot="title"/>
    </sn-select>
    <sn-select :select-data="diagnoseType" slot="three-col">
      <sn-must-text text="接诊类型" slot="title"/>
    </sn-select>
    <sn-select :select-data="diagnoseDoctor" slot="four-col">
      <sn-must-text text="接诊医生" slot="title"/>
    </sn-select>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "RegistrationInfoFirstRow",
  data() {
    return {
      //挂号单号
      registrationId: '1122334455',
      //科室
      departmentSelectData: [
        {
          value: 0,
          label: '全科'
        },
        {
          value: 1,
          label: '儿科'
        },
        {
          value: 2,
          label: '骨科'
        },
      ],
      //接诊类型
      diagnoseType: [
        {
          value: 0,
          label: '初诊'
        },
        {
          value: 1,
          label: '复诊'
        },
      ],
      diagnoseDoctor: [
        {
          value: 0,
          label: '陈平安'
        },
        {
          value: 1,
          label: '宁姚'
        },
        {
          value: 2,
          label: '李宝瓶'
        },
      ]
    }
  },
  props: {
    showRegistrationId: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style scoped>
.move-down{
  position: relative;
  top: 2px;
}
</style>