<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="12"
      :three="6">
    <sn-select
        :select-data="prescriptionData"
        :select-style="{'width':'170px'}"
        slot="one-col" class="to-flex">
      <sn-text
          text="处方类别"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>

    <!-- 搜索框-->
    <sn-search-input
        :input-style="{'width':'250px'}"
        :input-placeholder="inputPlaceholder"
        slot="two-col" class="move-up"/>

    <el-checkbox-group
        class="warning"
        v-model="checkList"
        slot="three-col">
      <el-checkbox label="库存预警"></el-checkbox>
      <el-checkbox label="有效期预警"></el-checkbox>
    </el-checkbox-group>
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
      checkList: ['有效期预警']
    }
  },
}
</script>

<style scoped>
.warning{
  position: relative;
  top: 10px;
  left: 200px;
}
</style>