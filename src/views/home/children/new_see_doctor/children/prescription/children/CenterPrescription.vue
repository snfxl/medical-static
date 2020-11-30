<template>
  <prescription-template
      :table-data="CenterDrugData"
      :select-data="CenterDrugSelectData"/>
</template>

<script>
import PrescriptionTemplate
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/PrescriptionTemplate";

export default {
  name: "CenterPrescription",
  components: {
    PrescriptionTemplate
  },
  data() {
    return {
      CenterDrugSelectData: [
        {
          value: 1,
          label: '全部分类'
        },
        {
          value: 2,
          label: '中草药'
        },
        {
          value: 3,
          label: '清热类'
        },
        {
          value: 4,
          label: '解读类'
        },
        {
          value: 5,
          label: '免煎颗粒'
        },
      ],
      CenterDrugData: [
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
        {
          name: '阿胶珠',
          specification: '16g',
          stock: '300g',
          price: '0.15'
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>