<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="6"
      :three="6"
      :four="6">
    <sn-select
        :select-data="prescriptionData"
        :select-style="{'width':'220px'}"
        slot="one-col" class="to-flex">
      <sn-text
          text="处方类别"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>

    <sn-select
        :select-data="drugStatusData"
        :select-style="{'width':'220px'}"
        slot="two-col" class="to-flex">
      <sn-text
          text="药品状态"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>
    <sn-date-picker slot="three-col" :set-style="{'width':'220px'}" class="to-flex">
      <sn-text slot="title" :move-down="11" text="创建时间" class="margin-right"/>
    </sn-date-picker>

    <!-- 搜索框-->
    <sn-search-input
        :input-style="{'width':'250px'}"
        :input-placeholder="inputPlaceholder"
        slot="four-col" class="move-up"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "StockManageFindBar",
  props: {
    inputPlaceholder: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      prescriptionData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '西/成药'
        },
        {
          value: 2,
          label: '中药'
        },
      ],
      drugStatusData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '启用'
        },
        {
          value: 2,
          label: '停用'
        },
      ],
      checkList: ['有效期预警']
    }
  },
}
</script>

<style scoped>
.warning {
  position: relative;
  top: 10px;
  left: 200px;
}
</style>