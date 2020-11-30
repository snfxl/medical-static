<template>
  <div class="workspace-row">
    <el-row :gutter="10">
      <el-col :span="8">
        <workspace-item/>
      </el-col>
      <el-col :span="8">
        <workspace-item/>
      </el-col>
      <el-col :span="8">
        <workspace-item/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import WorkspaceItem from "@/views/home/children/workspace/children/WorkspaceItem";
export default {
  components:{
    WorkspaceItem
  }
}
</script>

<style scoped>

</style>