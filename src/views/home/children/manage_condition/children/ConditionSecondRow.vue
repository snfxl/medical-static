<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="18">
        <line-chart/>
      </el-col>
      <el-col :span="6">
        <pie/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from "@/views/home/children/manage_condition/children/LineChart";
import Pie from "@/views/home/children/manage_condition/children/Pie";
export default {
name: "SecondRow",
 components:{
  LineChart,Pie
 }
}
</script>

<style scoped>

</style>