<template>
  <sn-row-has-four-col>
    <sn-input-with-dropdown slot="one-col">
      <sn-must-text slot="title" text="患者姓名"/>
    </sn-input-with-dropdown>

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
import SnRowHasFourCol from "@/components/common/layout/row/SnRowHasFourCol";
import SnSearchInput from "@/components/common/input/SnSearchInput";
import SnInputWithDropdown from "@/components/common/input/SnInputWithAdvice";
import SnInputComplex from "@/components/common/input/SnInputComplex";
import SnInput from "@/components/common/input/SnInput";
import SnDatePicker from "@/components/common/date_choose/SnDatePicker";
import SnMustText from "@/components/common/text/SnMustText";

export default {
  components: {
    SnRowHasFourCol,
    SnSearchInput,
    SnInputWithDropdown,
    SnInputComplex,
    SnInput,
    SnDatePicker,
    SnMustText
  }
}
</script>

<style scoped lang="less">

</style>