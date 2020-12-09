<!-- 会员积分 -->
<template>
  <div>
    <vip-integral-find-bar/>
    <vip-integral-table :table-data="vipIntegralTableData"/>
  </div>
</template>

<script>
import VipIntegralFindBar from "@/views/home/children/vip_manage/children/vip_integral/children/VipIntegralFindBar";
import VipIntegralTable
  from "@/views/home/children/vip_manage/children/vip_integral/children/vip_integral_table/VipIntegralTable";

export default {
  name: "VipIntegral",
  components: {
    VipIntegralFindBar,
    VipIntegralTable
  },
  data() {
    return {
      vipIntegralTableData: [
        {
          id: '1',
          cardId: '561215',
          vipType: '普通会员',
          vipGrade: 'VIP1',
          vipName: '宁姚',
          phoneNumber: '16523189521',
          integral: '1212'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>