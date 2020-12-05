<template>
  <sn-row-has-four-col
      :one=6
      :two=6
      :three=6
      :four=6>
    <sn-select
        :disabled-select="isDisabledRegistrationCost"
        :select-data="registrationCost"
        slot="one-col">
      <sn-must-text text="挂号费" slot="title"/>
    </sn-select>
    <sn-select
        :select-data="therapyCost"
        :disabled-select="isDisabledTherapyCost"
        slot="two-col">
      <sn-must-text text="诊疗费" slot="title"/>
    </sn-select>
    <sn-input :is-disabled="true" class="move-down" v-if="showRegistrationDate"
              :input-value-from-parent="registrationDate"
              slot="three-col">
      <sn-text text="挂号日期" slot="title"/>
    </sn-input>
    <sn-input :is-disabled="true" class="move-down" v-if="showRegistrationWorker"
              :input-value-from-parent="registrationWorker"
              slot="four-col">
      <sn-text text="挂号员" slot="title"/>
    </sn-input>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "RegistrationInfoSecondRow",
  data() {
    return {
      //挂号人员
      registrationWorker: '王明阳',
      //挂号日期
      registrationDate: '2000-12-09',
      //挂号费
      registrationCost: [
        {
          value: 0,
          label: '免费(0.00元)'
        },
        {
          value: 1,
          label: '普通挂号费(10.00元)'
        },
        {
          value: 2,
          label: '专家挂号费(20.00元)'
        },
      ],
      //诊疗费
      therapyCost: [
        {
          value: 0,
          label: '免费(0.00元)'
        },
        {
          value: 1,
          label: '诊疗费(50.00元)'
        },
      ]
    }
  },
  props: {
    showRegistrationWorker: {
      type: Boolean,
      default: true
    },
    showRegistrationDate: {
      type: Boolean,
      default: true
    },
    isDisabledRegistrationCost: {
      type: Boolean,
      default: false
    },
    isDisabledTherapyCost: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 2px;
}
</style>