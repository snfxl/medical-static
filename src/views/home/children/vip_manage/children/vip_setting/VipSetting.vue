<!-- 会员设置 -->
<template>
  <VipSettingTable :table-data="vipSettingTableData"/>
</template>

<script>
import VipSettingTable from "@/views/home/children/vip_manage/children/vip_setting/children/VipSettingTable";

export default {
  name: "VipSetting",
  components: {
    VipSettingTable
  },
  data() {
    return {
      vipSettingTableData: [
        {
          id:'1',
          vipGrade:'vip1',
          name:'普通会员',
          discount:'9.8',
          lowestIntegral:'100',
          upLevelNeedIntegral:'1000',
          remark:'各支所通用',
          status:true,
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>