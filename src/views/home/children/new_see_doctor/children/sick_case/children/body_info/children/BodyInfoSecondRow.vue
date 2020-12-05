<template>
  <sn-row-has-four-col
      :one=5
      :two=5
      :three=5
      :four=7
      class="margin-top-20">
    <sn-input slot="one-col" class="to-flex" :input-style=inputStyle>
      <sn-text text="身高" slot="title" class="margin-right move-down"/>
      <sn-text text="cm" slot="input-after" class="margin-left move-down"/>
    </sn-input>
    <sn-input slot="two-col" class="to-flex" :input-style=inputStyle>
      <sn-text text="体重" slot="title" class="margin-right move-down"/>
      <sn-text text="Kg" slot="input-after" class="margin-left move-down"/>
    </sn-input>
    <sn-input slot="three-col" class="to-flex" :input-style=inputStyle>
      <sn-text text="血糖" slot="title" class="margin-right move-down"/>
      <sn-text text="mmol/l" slot="input-after" class="margin-left move-down"/>
    </sn-input>
    <sn-input slot="four-col" class="to-flex" :input-style="{'width':'180px'}">
      <sn-text text="血脂" slot="title" class="margin-right move-down"/>
      <sn-text text="mmol/l" slot="input-after" class="margin-left move-down"/>
    </sn-input>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "BodyInfoSecondRow",
  data(){
    return{
      inputStyle:{
        'width':'100px'
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