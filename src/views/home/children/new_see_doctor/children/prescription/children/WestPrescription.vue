<template>
  <prescription-template
      :add-or-save="addOrSave"
      :right-table-data="westDrugInfoTableData"
      :right-table-title="westDrugInfoTableTitle"
      :select-data="westDrugInfoSelectData"
      :select-description="westDrugInfoSelectDescription"
      :left-table-data="westDrugAddTableData"/>
</template>

<script>
import PrescriptionTemplate
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/PrescriptionTemplate";

export default {
  name: "WestPrescription",
  components: {
    PrescriptionTemplate
  },
  props: {
    addOrSave: {
      type: String,
      default: '添加处方'
    },
  },
  data(){
    return{
      westDrugInfoTableData:[
        {
          name: '减肥药符合袋aaaaaaaaaaaaaaaaaaaaaaa',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
        {
          name: '减肥药符合袋',
          specification: '1g*1',
          stock: '1000',
          price: '0.15'
        },
      ],
      westDrugInfoTableTitle: [
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
      westDrugInfoSelectData:[
        {
          value: 0,
          label: '全部分类'
        },
        {
          value: 1,
          label: '常用药品'
        },
        {
          value: 2,
          label: '西药'
        },
        {
          value: 3,
          label: '感冒药'
        },
        {
          value: 4,
          label: '材料'
        },
      ],
      westDrugInfoSelectDescription:'药品分类',
      westDrugAddTableData:[
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