<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="5"
      :two="7"
      :three="4">
    <sn-select :select-data="vipType"
               slot="one-col"
               class="to-flex move-down"
               :select-style="{'width':'180px'}">
      <sn-text text="会员类型" slot="title" :move-down="10" class="margin-right-20"/>
    </sn-select>

    <sn-date-picker-with-round slot="two-col" class="to-flex" :date-picker-style="{'width':'270px'}">
      <sn-text text="创建时间" slot="title" :move-down="12" class="margin-right-20 move-down-date"/>
    </sn-date-picker-with-round>

    <sn-search-input input-placeholder="输入患者姓名/手机号码" slot="three-col" class="move-down"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "SickManageFindInfoBar",
  data() {
    return {
      vipType: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '非会员'
        },
        {
          value: 2,
          label: 'vip1'
        },
        {
          value: 3,
          label: 'vip2'
        },
        {
          value: 4,
          label: 'vip3'
        },
      ]
    }
  },
}
</script>

<style scoped>
.move-down{
  position: relative;
  top: 2px;
}
</style>