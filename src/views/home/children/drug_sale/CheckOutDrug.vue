<!-- 结算信息 -->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <!-- 标题 -->
      <check-out-drug-title slot="title" class="move-down"/>
      <!-- 结算的药品信息 -->
      <div slot="content">
        <check-out-drug-info/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import CheckOutDrugTitle from "@/views/home/children/drug_sale/children/CheckOutDrugTitle";
import CheckOutDrugInfo from "@/views/home/children/drug_sale/children/check_out_drug_info/CheckOutDrugInfo";

export default {
  name: "CheckOutDrug",
  components: {
    CheckOutDrugTitle,
    CheckOutDrugInfo
  },
}
</script>

<style scoped>
.move-down{
  position: relative;
  top: 10px;
}
</style>