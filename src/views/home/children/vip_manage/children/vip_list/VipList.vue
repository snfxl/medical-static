<!-- 会员列表-->
<template>
  <div>
    <vip-list-find-bar input-placeholder="患者姓名/手机号码/会员卡号"/>
    <vip-list-table :table-data="vipListTableData"/>
  </div>
</template>

<script>
import VipListFindBar from "@/views/home/children/vip_manage/children/vip_list/children/VipListFindBar";
import VipListTable from "@/views/home/children/vip_manage/children/vip_list/children/VipListTable";

export default {
  name: "VipList",
  data() {
    return {
      vipListTableData: [
        {
          id: '1',
          cardId: '561215',
          vipType: '普通会员',
          vipGrade: 'VIP1',
          vipName: '宁姚',
          phoneNumber: '16523189521',
          cumulativeConsume: '2151.20',
          storeResidue: '451.02',
          cumulativeStore: '132156',
          integral: '1215.03',
          openCardDate: '2019-12-25 12:08:12',
          expireDate: '2019-12-25 12:08:12',
          vipStatus: true,
        }
      ],
    }
  },
  components: {
    VipListFindBar,
    VipListTable
  },
}
</script>

<style scoped>

</style>