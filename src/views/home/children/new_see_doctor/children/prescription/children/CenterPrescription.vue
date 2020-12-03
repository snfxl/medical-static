<template>
  <prescription-template
      :right-table-title="centerDrugInfoTableTitle"
      :right-table-data="centerDrugInfoTableData"
      :select-data="centerDrugInfoSelectData"
      :select-description="centerSelectDescription"
      :left-table-data="centerDrugAddTableData"
  />
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
      centerDrugInfoTableData: [
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
      centerDrugInfoTableTitle:[
        {
          prop: 'name',
          label: '名称',
          width: 120
        },
        {
          prop: 'specification',
          label: '规格'
        },
        {
          prop: 'stock',
          label: '库存'
        },
        {
          prop: 'price',
          label: '价格'
        },
      ],
      centerDrugInfoSelectData: [
        {
          value: 0,
          label: '全部分类'
        },
        {
          value: 1,
          label: '中草药'
        },
        {
          value: 2,
          label: '清热类'
        },
        {
          value: 3,
          label: '解读类'
        },
        {
          value: 4,
          label: '免煎颗粒'
        },
      ],
      centerSelectDescription:'药品分类',
      centerDrugAddTableData:[
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>