<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <condition-simple-info/>
      </el-col>
      <el-col :span="6">
        <condition-simple-info/>
      </el-col>
      <el-col :span="6">
        <condition-simple-info/>
      </el-col>
      <el-col :span="6">
        <condition-simple-info/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ConditionSimpleInfo from "@/views/home/children/manage_condition/children/ConditionSimpleInfo";
export default {
  name: "FirstROw",
  components: {
    ConditionSimpleInfo
  }
}
</script>

<style scoped>

</style>