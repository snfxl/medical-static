<template>
  <sn-flex-appoint-element :element-count="3" class="margin-left">
    <el-button type="primary" plain :slot="1">
      <sn-text text="待收费"/>
    </el-button>
    <el-button type="primary" plain :slot="2">
      <sn-text text="已收费"/>
    </el-button>
    <el-button type="primary" plain :slot="3">
      <sn-text text="已退费"/>
    </el-button>
  </sn-flex-appoint-element>
</template>

<script>
export default {
  name: "CostManageTitle"
}
</script>

<style scoped>

</style>