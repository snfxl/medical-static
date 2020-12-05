<template>
  <sn-row-has-four-col
      :one=5
      :two=5
      :three=5
      :four=7
      class="margin-top-20">
    <sn-input slot="one-col" class="to-flex" :input-style="inputStyle">
      <sn-text text="体温" slot="title" class="margin-right move-down"/>
      <sn-text text="℃" slot="input-after" class="margin-left move-down"/>
    </sn-input>
    <sn-input slot="two-col" class="to-flex" :input-style="inputStyle">
      <sn-text text="呼吸" slot="title" class="margin-right move-down"/>
      <sn-text text="次/分" slot="input-after" class="margin-left move-down"/>
    </sn-input>
    <sn-input slot="three-col" class="to-flex" :input-style="inputStyle">
      <sn-text text="脉搏" slot="title" class="margin-right move-down"/>
      <sn-text text="次/分" slot="input-after" class="margin-left move-down"/>
    </sn-input>
    <sn-input slot="four-col" class="to-flex"
              :input-style=bloodPressureInputStyle>
      <sn-text text="血压" slot="title" class="margin-right move-down"/>
      <sn-text text="mmHg" slot="input-after" class="margin-left move-down"/>
    </sn-input>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "BodyInfoFirstRow",
  data(){
    return{
      inputStyle:{
        'width':'100px'
      },
      bloodPressureInputStyle:{
        'width':'180px',
      }
    }
  }
}
</script>

<style scoped>
.move-down{
  position: relative;
  top: 12px;
}
</style>