<template>
  <div>
    <sn-time-line
        :time-lien-id="1"
        :select-id="selectId"
        @chooseTimeLine="chooseTimeLine">
      <sn-text slot="time" text="2019-11-20 10:22:23"/>
      <div slot="content">
        <sn-row-has-two-col :left="14" :right="10" class="row">
          <div slot="one-col" class="to-flex">
            <sn-text text="门诊编号 :" :font-size="15" class="margin-right"/>
            <sn-text text="21321651321" :font-size="15"/>
          </div>
          <div slot="two-col" class="to-flex">
            <sn-text text="诊断 :" :font-size="15" class="margin-right"/>
            <sn-text text="流行性感冒" font-color="#666EE8" :font-size="15"/>
          </div>
        </sn-row-has-two-col>
        <sn-row-has-two-col :left="14" :right="10" class="margin-top">
          <div slot="one-col" class="to-flex">
            <sn-text text="接诊科室 :" :font-size="15" class="margin-right"/>
            <sn-text text="全科" :font-size="15"/>
          </div>
          <div slot="two-col" class="to-flex">
            <sn-text text="接诊医生 :" :font-size="15" class="margin-right"/>
            <sn-text text="宁姚" :font-size="15"/>
          </div>
        </sn-row-has-two-col>
      </div>
    </sn-time-line>

    <sn-time-line
        :time-lien-id="2"
        :select-id="selectId"
        @chooseTimeLine="chooseTimeLine">
      <sn-text slot="time" text="2019-11-20 10:22:23"/>
      <div slot="content">
        <sn-row-has-two-col :left="14" :right="10" class="row">
          <div slot="one-col" class="to-flex">
            <sn-text text="门诊编号 :" :font-size="15" class="margin-right"/>
            <sn-text text="21321651321" :font-size="15"/>
          </div>
          <div slot="two-col" class="to-flex">
            <sn-text text="诊断 :" :font-size="15" class="margin-right"/>
            <sn-text text="流行性感冒" font-color="#666EE8" :font-size="15"/>
          </div>
        </sn-row-has-two-col>
        <sn-row-has-two-col :left="14" :right="10" class="margin-top">
          <div slot="one-col" class="to-flex">
            <sn-text text="接诊科室 :" :font-size="15" class="margin-right"/>
            <sn-text text="全科" :font-size="15"/>
          </div>
          <div slot="two-col" class="to-flex">
            <sn-text text="接诊医生 :" :font-size="15" class="margin-right"/>
            <sn-text text="宁姚" :font-size="15"/>
          </div>
        </sn-row-has-two-col>
      </div>
    </sn-time-line>
  </div>
</template>

<script>
export default {
  name: "ElectronicCaseSimple",

  data() {
    return {
      selectId: 0
    }
  },

  methods: {
    chooseTimeLine(timeLineId) {
      this.selectId = timeLineId
    },
  },
}
</script>

<style scoped>
.row {
  width: 350px;
}
</style>