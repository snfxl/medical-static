<!-- 收费信息展示 -->
<template>
  <div>
    <cost-record-show-title/>
    <cost-record-show-table
        class="margin-top-20"
        :table-data="recordShowTableData"/>
  </div>
</template>

<script>
import CostRecordShowTitle
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_show/children/CostRecordShowTitle";
import CostRecordShowTable
  from "@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_show/children/CostRecordShowTable";

export default {
  name: "CostRecordShow",
  components: {
    CostRecordShowTitle,
    CostRecordShowTable
  },
  data() {
    return {
      recordShowTableData: [
        {
          getOrReturnCostDate: '2018-10-15 10:25:23',
          costStatus: '未收费',
          costType: '处方收费',
          needGetOrReturnMoney: '15.00',
          actualGetOrReturnMoney: '15.00',
          payMethod: '支付宝',
        },
        {
          getOrReturnCostDate: '2018-10-15 10:25:23',
          costStatus: '已收费',
          costType: '处方收费',
          needGetOrReturnMoney: '15.00',
          actualGetOrReturnMoney: '15.00',
          payMethod: '支付宝',
        },
        {
          getOrReturnCostDate: '2018-10-15 10:25:23',
          costStatus: '已退费',
          costType: '处方收费',
          needGetOrReturnMoney: '15.00',
          actualGetOrReturnMoney: '15.00',
          payMethod: '支付宝',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>