<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <check-out-drug-title slot="title"/>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import CheckOutDrugTitle from "@/views/home/children/drug_sale/children/CheckOutDrugTitle";

export default {
  name: "CheckOutDrug",
  components: {
    CheckOutDrugTitle
  },
}
</script>

<style scoped>

</style>