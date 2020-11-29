<template>
  <div>
    <el-row :gutter="10" class="first-row">
      <el-col :span="6" class="first-row-item">
        <condition-simple-info/>
      </el-col>
      <el-col :span="6" class="first-row-item">
        <condition-simple-info :card-title="sinkAddTitle" describe="今日接诊人次" :up="upOrDown" about-condition="较昨日上升10%"
                               :info-icon="sinkAddIcon"/>
      </el-col>
      <el-col :span="6" class="first-row-item">
        <condition-simple-info :card-title="costAddTitle" describe="今日收入合计" :up="upOrDown" about-condition="较昨日上升50%"
                               :info-icon="costAddIcon"/>
      </el-col>
      <el-col class="first-row-item" :span="6" >
        <condition-simple-info :card-title="vipAddTitle" describe="今日新增会员数" :up="upOrDown" about-condition="较昨日上升40%"
                               :info-icon="vipAddIcon"/>
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
  },
  data() {
    return {
      upOrDown: true,
      sinkAddTitle: 75,
      costAddTitle: 6500,
      vipAddTitle: 20,
      sinkAddIcon: 2,
      costAddIcon: 3,
      vipAddIcon: 4,
    }
  }
}
</script>

<style scoped>
.first-row{

}
</style>