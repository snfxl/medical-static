<template>
  <sn-row-has-four-col>
    <sn-select slot="one-col" :select-data="sex" ref="sex">
      <sn-must-text text="性别" slot="title"/>
    </sn-select>

    <sn-input slot="two-col" ref="phoneNumber">
      <sn-must-text text="手机号码" slot="title"/>
    </sn-input>

    <sn-input slot="three-col">
      <sn-must-text text="证件号码" slot="title"/>
    </sn-input>

    <sn-select slot="four-col" :select-data="diagnoseType" ref="clinicType">
      <sn-must-text text="接诊类型" slot="title"/>
    </sn-select>
  </sn-row-has-four-col>
</template>

<script>
export default {
  data() {
    return {
      sex: [
        {
          value: 0,
          label: '男'
        },
        {
          value: 1,
          label: '女'
        },
      ],
      //接诊类型
      diagnoseType:[
        {
          value: 0,
          label: '初诊'
        },
        {
          value: 1,
          label: '复诊'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>