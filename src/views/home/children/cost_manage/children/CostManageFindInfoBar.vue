<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="5"
      :two="7"
      :three="4">
    <sn-select :select-data="orderType"
               slot="one-col"
               class="to-flex move-down-little margin-left"
               :select-style="{'width':'160px'}">
      <sn-text text="订单类型" slot="title" class="margin-right-20 move-down"/>
    </sn-select>

    <sn-date-picker-with-round slot="two-col" class="to-flex" :date-picker-style="{'width':'220px'}">
      <sn-text text="创建时间" slot="title" class="margin-right-20 move-down-date"/>
    </sn-date-picker-with-round>

    <sn-search-input input-placeholder="输入患者姓名" slot="three-col" class="move-down-little"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "CostManageFindInfoBar",
  data() {
    return {
      orderType: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '药品零售'
        },
        {
          value: 2,
          label: '处方开立'
        },
      ]
    }
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 10px;
}

.move-down-little {
  position: relative;
  top: 2px;
}

.move-down-date {
  position: relative;
  top: 12px;
}
</style>