<template>
  <div>
    <sn-title title="费用详情: " :other-style="{'float':'right','margin-top':'-10px'}">
      <addition-money-dialog slot="other" button-description="+ 附加费用" :table-data="otherPayData"/>
    </sn-title>
    <div class="to-flex">
      <sn-must-text text="科室" class="move-down margin-right"/>
      <sn-select :select-data="departmentData" class="margin-right"/>
      <sn-must-text text="接诊医生" class="move-down margin-right"/>
      <sn-select :select-data="doctorData" class="margin-right"/>
      <sn-text text="此方合计: " class="move-down margin-right"/>
      <sn-text :text="prescriptionMoney" class="font-pink margin-right price-move-down"/>
      <sn-text text="共" class="margin-right move-down"/>
      <sn-text :text="prescriptionNumber" class="font-pink margin-right price-move-down"/>
      <sn-text text="个处方,共计:" class="margin-right move-down"/>
      <sn-text :text="totalMoney" class="font-pink price-move-down"/>
    </div>
  </div>
</template>

<script>
import AdditionMoneyDialog
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/AdditionMoneyDialog";

export default {

  data() {
    return {
      otherPayData: [
        {
          id: '01',
          payType: '注射费',
          count: 1,
          price: 3.00
        },
        {
          id: '02',
          payType: '材料费',
          count: 1,
          price: 5.00
        },
        {
          id: '03',
          payType: '处理费',
          count: 1,
          price: 8.00
        },
        {
          id: '04',
          payType: '诊疗费',
          count: 1,
          price: 6.00
        },
      ]
    }
  },

  components: {
    AdditionMoneyDialog
  },
  props: {
    totalMoney: {
      type: Number,
      default: 12.02
    },
    prescriptionNumber: {
      type: Number,
      default: 2
    },
    prescriptionMoney: {
      type: Number,
      default: 12.02
    },
    departmentData: {
      type: Array,
      default() {
        return [
          {
            value: 1,
            label: '全科'
          },
          {
            value: 2,
            label: '儿科'
          },
          {
            value: 3,
            label: '骨科'
          }
        ]
      }
    },
    doctorData: {
      type: Array,
      default() {
        return [
          {
            value: 1,
            label: '王阳明'
          },
          {
            value: 2,
            label: '陈平安'
          },
          {
            value: 3,
            label: '宁姚'
          }
        ]
      }
    },
  }
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 20px;
}

.price-move-down {
  position: relative;
  top: 22px;
}


</style>