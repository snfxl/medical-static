<!-- 经营概况-->
<template>
  <el-row :gutter="10" class="manage-condition">
    <el-col class="manage-condition-side" :span="2">
    </el-col>
    <el-col :span="20" class="manage-condition-content">
      <condition-first-row/>
      <condition-second-row/>
      <condition-third-row/>
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </el-col>
    <el-col class="manage-condition-side" :span="2">
    </el-col>
  </el-row>
</template>

<script>
import ConditionFirstRow from "@/views/home/children/manage_condition/children/ConditionFirstRow";
import ConditionSecondRow from "@/views/home/children/manage_condition/children/ConditionSecondRow";
import ConditionThirdRow from "@/views/home/children/manage_condition/children/ConditionThirdRow";

export default {
  name: "ManageCondition",
  components: {
    ConditionFirstRow, ConditionSecondRow, ConditionThirdRow
  }
}
</script>

<style scoped lang="less">
.manage-condition {
  height: 100%;
  background-color: #F2F2F2;
}

.manage-condition-content {
  background-color: #fff;
  margin-top: 40px;
  padding-top: 30px;
}

.manage-condition-side {

  height: 100%;
}
</style>

