<template>
  <div>
    <div class="to-flex">
      <i class="el-icon-document project-detail-icon"/>
      <sn-text
          font-color="#666EE8"
          :font-size="25"
          font-weight="bold"
          class="margin-bottom-20 "
          text="收费明细"/>
    </div>

    <div class="margin-bottom-20">
      <el-button
          :style="westDrugPrescriptionButtonStyle"
          @click="toWestDrugPrescription"
          plain type="primary">
        <sn-text text="西/成药处方"/>
      </el-button>
      <el-button
          :style="centerDrugPrescriptionButtonStyle"
          @click="toCenterDrugPrescription"
          plain type="primary">
        <sn-text text="中药处方"/>
      </el-button>
      <el-button
          :style="checkItemButtonStyle"
          @click="toCheckItem"
          plain type="primary">
        <sn-text text="检查项目"/>
      </el-button>
    </div>

    <!-- 西药表格-->
    <sn-table
        v-if="showWestDrugPrescription"
        :table-title="projectTableTitle"
        :table-data="westDrugPrescriptionTableData"></sn-table>

    <!-- 中药表格-->
    <sn-table
        v-if="showCenterDrugPrescription"
        :table-title="projectTableTitle"
        :table-data="centerDrugPrescriptionTableData"></sn-table>

    <!-- 检查项目表格 -->
    <sn-table
        v-if="showCheckItem"
        :table-title="projectTableTitle"
        :table-data="showCheckItemTableData"></sn-table>

    <div class=" to-flex margin-top-20">
      <sn-text text="处理费 :" class="margin-right"/>
      <sn-text text="15.00" class="margin-right" font-weight="bold"/>
      <sn-text text="元" class="margin-right-20"/>
      <sn-text text="注射费 :" class="margin-right"/>
      <sn-text text="20.00" class="margin-right" font-weight="bold"/>
      <sn-text text="元" class="margin-right"/>
      <sn-text text="合计 :" class="margin-right" font-weight="bold"/>
      <sn-text text="135.3"
               :font-size="16"
               :move-down="2"
               class="margin-right sn-yellow"
               font-weight="bold"/>
      <sn-text text="元" :move-down="1"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "CostRecordProjectDetail",
  data() {
    return {
      showWestDrugPrescription: true,
      showCenterDrugPrescription: false,
      showCheckItem: false,

      westDrugPrescriptionButtonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      },
      centerDrugPrescriptionButtonStyle: '',
      checkItemButtonStyle: '',

      buttonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      },

      //表头
      projectTableTitle: [
        {
          prop: 'id',
          label: '序号'
        },
        {
          prop: 'name',
          label: '收费名称'
        },
        {
          prop: 'price',
          label: '单价(元)'
        },
        {
          prop: 'total',
          label: '总量'
        },
        {
          prop: 'unit',
          label: '单位'
        },
        {
          prop: 'salePrice',
          label: '零售金额(元)'
        },
        {
          prop: 'discount',
          label: '折扣'
        },
        {
          prop: 'afterDiscountMoney',
          label: '折后金额(元)'
        },
      ],
      //表格数据
      westDrugPrescriptionTableData: [
        {
          id: '1',
          name: '肾宝糖浆',
          price: '15.00',
          total: '3',
          unit: '瓶',
          salePrice: '30.00',
          discount: '9.00',
          afterDiscountMoney: '27.00',
        }
      ],
      centerDrugPrescriptionTableData: [
        {
          id: '1',
          name: '陈皮',
          price: '25.00',
          total: '1',
          unit: 'g',
          salePrice: '25.00',
          discount: '9.00',
          afterDiscountMoney: '22.50',
        }
      ],
      showCheckItemTableData: [
        {
          id: '2',
          name: '胃镜检查',
          price: '25.00',
          total: '1',
          unit: '次',
          salePrice: '25.00',
          discount: '9.00',
          afterDiscountMoney: '22.50',
        }
      ]
    }
  },
  methods: {

    toWestDrugPrescription() {

      //设置按钮样式
      this.westDrugPrescriptionButtonStyle = this.buttonStyle
      this.centerDrugPrescriptionButtonStyle = ''
      this.checkItemButtonStyle = ''

      //设置显示的表格
      this.showWestDrugPrescription = true
      this.showCenterDrugPrescription = false
      this.showCheckItem = false
    },
    toCenterDrugPrescription() {
      //设置按钮样式
      this.westDrugPrescriptionButtonStyle = ''
      this.centerDrugPrescriptionButtonStyle = this.buttonStyle
      this.checkItemButtonStyle = ''

      this.showWestDrugPrescription = false
      this.showCenterDrugPrescription = true
      this.showCheckItem = false
    },
    toCheckItem() {

      //设置按钮样式
      this.westDrugPrescriptionButtonStyle = ''
      this.centerDrugPrescriptionButtonStyle = ''
      this.checkItemButtonStyle = this.buttonStyle

      this.showWestDrugPrescription = false
      this.showCenterDrugPrescription = false
      this.showCheckItem = true
    }
  },
}
</script>

<style scoped>
.el-button {
  width: 120px;
}

.project-detail-icon {
  font-size: 20px;
  color: #666EE8;
  position: relative;
  top: 5px;
  margin-right: 5px;
}
</style>