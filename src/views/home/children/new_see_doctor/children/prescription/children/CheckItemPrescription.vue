<template>
  <prescription-template
      select-description="项目分类"
      :right-table-data="checkItemRightTableData"
      :right-table-title="checkItemRightTableTitle"
      :select-data="checkItemSelectData"
      :is-check-item-prescription="true"
      :left-table-data="checkItemLeftTableData"
      add-title="添加项目"
      not-choose-button-name="未选中项目"
      has-choose-button-name="已选中项目"
  />
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
          value: 0,
          label: '全部分类'
        },
        {
          value: 1,
          label: '治疗费'
        },
        {
          value: 2,
          label: '材料费'
        },
        {
          value: 3,
          label: '检查费'
        },
        {
          value: 4,
          label: '其他'
        },
      ],
      checkItemRightTableData: [
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
      checkItemRightTableTitle: [
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
      ],
      checkItemLeftTableData: [
        {
          id: 2,
          groupId: '',
          name: '拔火罐',
          bodyPart: '背部',
          count: '2',
          checkType: '',
          price: 12.02,
          totalPrice: 225,
          remark:'无'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>