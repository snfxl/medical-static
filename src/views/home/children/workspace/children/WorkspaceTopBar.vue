<template>
  <sn-row-has-four-col
      :one="7" :two="6" :three="4">
    <sn-date-picker-with-round class="to-flex margin-left-20" slot="one-col">
      <sn-text text="创建时间" slot="title" :move-down="12" :style="{'width':'65px'}"/>
    </sn-date-picker-with-round>
    <sn-select
        :select-placeholder="selectPlaceholder"
        :select-data="selectData"
        class="to-flex margin-right move-down-little"
        slot="two-col">
      <sn-text text="接诊状态" :move-down="10" slot="title" :style="{'width':'65px'}"/>
    </sn-select>
    <sn-search-input
        class="move-down"
        input-placeholder="输入患者姓名"
        slot="three-col"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "WorkspaceTopBar",
  data() {
    return {
      selectPlaceholder: '接诊状态',
      selectData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '待接诊'
        },
        {
          value: 2,
          label: '接诊中'
        },
        {
          value: 3,
          label: '已完成'
        },
      ],
    }
  }
}
</script>

<style scoped lang="less">
.move-down {
  position: relative;
  top: 2px;
}
.move-down-little{
  position: relative;
  top: 3px;
}
</style>