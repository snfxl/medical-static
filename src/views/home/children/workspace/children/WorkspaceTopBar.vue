<template>
  <div class="workspace-top-bar">
    <sn-date-picker-with-round/>
    <sn-text text="接诊状态" class="description"/>
    <sn-select :select-placeholder="selectPlaceholder" :select-data="selectData" class="select">
    </sn-select>
    <sn-search-input class="sn-search-input"/>
  </div>
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
.workspace-top-bar {
  display: flex;
  padding-left: 20px;
  margin-bottom: 10px;

  .select {
    margin-right: 20px;
    position: relative;
    bottom: 8px;
  }

  .sn-search-input {
    position: relative;
    top: 2px;
  }

  .description {
    position: relative;
    margin-right: 10px;
    top: 12px;
  }
}
</style>