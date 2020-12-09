<!-- 会员储值 -->
<template>
  <div>
    <vip-store-find-bar input-placeholder="患者姓名/手机号码/会员卡号"/>
    <vip-store-table :table-data="vipStoreTableData"/>
  </div>
</template>

<script>
import VipStoreFindBar from "@/views/home/children/vip_manage/children/vip_store/children/VipStoreFindBar";
import VipStoreTable from "@/views/home/children/vip_manage/children/vip_store/children/vip_store_table/VipStoreTable";

export default {
  name: "VipStore",
  components: {
    VipStoreTable,
    VipStoreFindBar
  },
  data() {
    return {
      vipStoreTableData: [
        {
          id: '1',
          cardId: '561215',
          vipType: '普通会员',
          vipGrade: 'VIP1',
          vipName: '宁姚',
          phoneNumber: '16523189521',
          cumulativeStore:'2165123.60',
          cumulativeGive:'25612.03',
          balance:'5125.20',
          storeCumulativeConsume:'1000'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>