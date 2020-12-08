<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="6"
      :three="6"
      :four="6">
    <sn-select
        :select-data="vipGradeData"
        :select-style="{'width':'220px'}"
        slot="one-col" class="to-flex">
      <sn-text
          text="会员等级"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>

    <sn-date-picker slot="two-col" :set-style="{'width':'220px'}" class="to-flex">
      <sn-text slot="title" :move-down="11" text="创建时间" class="margin-right"/>
    </sn-date-picker>

    <!-- 搜索框-->
    <sn-search-input
        :input-style="{'width':'250px'}"
        :input-placeholder="inputPlaceholder"
        slot="three-col" class="move-up"/>

    <el-checkbox
        class="warning"
        v-model="vipExpireWarnChecked"
        slot="four-col">
      <sn-text text="会员到期预警"/>
    </el-checkbox>

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

      vipExpireWarnChecked: true,

      vipGradeData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: 'vip1'
        },
        {
          value: 2,
          label: 'vip2'
        },
        {
          value: 3,
          label: 'vip3'
        },
        {
          value: 4,
          label: 'vip4'
        },
        {
          value: 5,
          label: 'vip5'
        },
        {
          value: 6,
          label: 'vip6'
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
  top: 11px;
}
</style>