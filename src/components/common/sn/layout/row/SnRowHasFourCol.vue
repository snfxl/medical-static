<template>
  <el-row :gutter="10" class="row-has-four-col">
    <el-col :span="6">
      <div>
        <slot name="one-col"/>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <slot name="two-col"/>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <slot name="three-col"/>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <slot name="four-col"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "RowHasFourCol"
}
</script>

<style scoped>
.row-has-four-col {
  margin-bottom: 20px;
}
</style>