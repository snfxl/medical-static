<template>
  <prescription-template
      :table-data="checkItemData"
      :table-title="checkItemTitleData"
      description="项目分类"
      :select-data="checkItemSelectData"/>
</template>

<script>
import PrescriptionTemplate
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/PrescriptionTemplate";

export default {
  name: "CheckItemPrescription",
  components: {
    PrescriptionTemplate
  },
  data() {
    return {
      checkItemSelectData: [
        {
          value: 1,
          label: '全部分类'
        },
        {
          value: 2,
          label: '治疗费'
        },
        {
          value: 3,
          label: '材料费'
        },
        {
          value: 4,
          label: '检查费'
        },
        {
          value: 5,
          label: '其他'
        },
      ],
      checkItemData: [
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
        {
          name: '局部推拿',
          type: '检查费',
          unit: '次',
          price: '20'
        },
      ],
      checkItemTitleData: [
        {
          prop: 'name',
          label: '名称',
        },
        {
          prop: 'type',
          label: '类型',
        },
        {
          prop: 'unit',
          label: '单位',
        },
        {
          prop: 'price',
          label: '价格',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>