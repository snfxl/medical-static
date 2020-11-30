<template>
  <sn-row-has-two-col :left=12 :right=12>
    <sn-select-create-item slot="one-col" :options="oneColData">
      <sn-must-text text="诊断" slot="title"/>
    </sn-select-create-item>
    <sn-select-create-item slot="two-col" :options="twoColData">
      <sn-must-text text="医嘱" slot="title"/>
    </sn-select-create-item>
  </sn-row-has-two-col>
</template>

<script>
export default {
  data() {
    return {
      oneColData: [
        {
          value: '流行性出血',
          label: '流行性出血'
        },
        {
          value: '急性支气管炎',
          label: '急性支气管炎'
        },
        {
          value: '上呼吸道感染',
          label: '上呼吸道感染'
        },
        {
          value: '咽炎',
          label: '咽炎'
        },
        {
          value: '急性肠胃炎',
          label: '急性肠胃炎'
        },
        {
          value: '月经不调',
          label: '月经不调'
        },
      ],
      twoColData: [
        {
          value: '低盐低糖饮食',
          label: '低盐低糖饮食'
        },
        {
          value: '忌辛冷等食物',
          label: '忌辛冷等食物'
        },
        {
          value: '忌受风吹凉风',
          label: '忌受风吹凉风'
        },
        {
          value: '少糖',
          label: '少糖'
        },
        {
          value: '忌熬夜忌饮酒',
          label: '忌熬夜忌饮酒'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>