<template>
  <sn-row-has-four-col >
    <sn-input-with-advice slot="one-col" ref="name">
      <sn-must-text slot="title" text="患者姓名"/>
    </sn-input-with-advice>

    <sn-input slot="two-col" ref="sickId">
      <sn-must-text slot="title" text="患者卡号"/>
    </sn-input>

    <sn-input-complex slot="three-col" ref="age">
      <sn-must-text slot="title" text="患者年龄"/>
    </sn-input-complex>

    <sn-date-picker slot="four-col" ref="birth">
      <sn-must-text slot="title" text="出生日期"/>
    </sn-date-picker>
  </sn-row-has-four-col>
</template>

<script>

export default {}
</script>

<style scoped lang="less">

</style>