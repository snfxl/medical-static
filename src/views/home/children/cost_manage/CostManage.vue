<!-- 收费管理-->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <cost-manage-title slot="title"/>
      <div slot="content">
        <cost-manage-find-info-bar/>
        <cost-manage-table
            :table-data="costManageTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import CostManageTitle from "@/views/home/children/cost_manage/children/CostManageTitle";
import CostManageFindInfoBar from "@/views/home/children/cost_manage/children/CostManageFindInfoBar";
import CostManageTable from "@/views/home/children/cost_manage/children/CostManageTable";

export default {
  name: "CostManage",
  components: {
    CostManageTitle,
    CostManageFindInfoBar,
    CostManageTable
  },
  data() {
    return {
      costManageTableData: [
        {
          id: 1,
          orderId: '12166565123',
          orderType: '药品零售',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          createDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          costStatus: '待收费',
          payMethod: '支付宝',
          returnMoney: 10
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>