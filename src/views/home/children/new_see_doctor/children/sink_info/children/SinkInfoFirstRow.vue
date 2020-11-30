<template>
  <sn-row-has-four-col>
    <sn-input-with-advice slot="one-col">
      <sn-must-text slot="title" text="患者姓名"/>
    </sn-input-with-advice>

    <sn-input slot="two-col">
      <sn-must-text slot="title" text="患者卡号"/>
    </sn-input>

    <sn-input-complex slot="three-col">
      <sn-must-text slot="title" text="患者年龄"/>
    </sn-input-complex>

    <sn-date-picker slot="four-col">
      <sn-must-text slot="title" text="出生日期"/>
    </sn-date-picker>
  </sn-row-has-four-col>
</template>

<script>

export default {}
</script>

<style scoped lang="less">

</style>