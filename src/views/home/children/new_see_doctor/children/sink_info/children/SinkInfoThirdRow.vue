<template>
  <sn-row-has-two-col>
    <sn-select-has-select slot="one-col">
      <sn-must-text text="地址" slot="title"/>
    </sn-select-has-select>
    <sn-input slot="two-col">
      <sn-must-text text="详细地址" slot="title"/>
    </sn-input>
  </sn-row-has-two-col>
</template>

<script>
import SnRowHasTwoCol from "@/components/common/layout/row/SnRowHasTwoCol";
import SnSelectHasSelect from "@/components/common/select/SnSelectHasSelect";
import SnInput from "@/components/common/input/SnInput";
import SnMustText from "@/components/common/text/SnMustText";
export default {
  name: "NewSeeDoctorThirdRow",
  components:{
    SnRowHasTwoCol,
    SnSelectHasSelect,
    SnInput,
    SnMustText
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>

</style>