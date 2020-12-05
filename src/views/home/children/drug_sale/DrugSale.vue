<!-- 药品零售-->
<template>
  <sn-three-col-space>
    <div slot="spaceContent">
      <!-- 结算按钮 -->
      <div class="text-right">
        <el-button type="success" plain class="margin-bottom-20" @click="toCheckOutDrug">
          <sn-text text="结算"/>
        </el-button>
      </div>
      <!-- 患者信息 -->
      <registration-sick-info/>
      <!-- 药品信息 -->
      <sn-row-has-two-col :left="16" :right="8" class="margin-top-20">
        <!-- 左侧放添加药品的地方 -->
        <sn-card-with-title slot="one-col">
          <div slot="title">
            <sn-title title="药品信息"
                      :title-style="{'font-size':'40px','color':'pink'}"
                      :other-style="{'float':'right','margin-top':'10px'}">
              <!-- 批量设置 -->
              <batch-setting
                  not-choose-button-name="未选中药品"
                  has-choose-button-name="已选中药品"
                  slot="other"/>
            </sn-title>
          </div>
          <drug-add-table
              :has-add-button="false"
              :table-data="drugTableInfoAdd"
              slot="content"/>
        </sn-card-with-title>

        <!-- 药品信息 -->
        <sn-card-with-title slot="two-col">
          <sn-row-has-two-col slot="title" :left="12" :right="12">
            <div slot="one-col" class="to-flex">
              <sn-text :text="drugSelectDescription" :move-down="10"/>
              <sn-select
                  :select-data="drugSelectData"
                  :select-style="{'width':'120px'}"/>
            </div>
            <sn-search-input
                slot="two-col"
                class="move-down"
                :input-placeholder="inputPlaceholder"/>
          </sn-row-has-two-col>
          <drug-table-info
              slot="content"
              add-title="添加药品"
              :table-data="drugTableInfo"
              :table-title="drugTableTitle"/>
        </sn-card-with-title>

      </sn-row-has-two-col>
      <!-- 费用详情 -->
      <sn-card-no-title class="margin-top-20">
        <div slot="content">
          <div class="margin-bottom-20">
            <sn-title title="费用详情: " :other-style="{'float':'right','margin-top':'-10px'}">
              <addition-money-dialog
                  slot="other"
                  button-description="+ 附加费用"
                  class="addition-money"
                  :table-data="otherPayData"/>
            </sn-title>
          </div>
          <div class="to-flex">
            <sn-must-text text="操作员" :move-down="17" class="margin-right"/>
            <sn-select :select-data="workerData" class="margin-right-20"/>
            <sn-text text="共计:" :move-down="18" class="margin-right"/>
            <sn-text :number="totalMoney" :move-down="16" :font-size="20" class="font-pink margin-right"/>
            <sn-text text="元" :move-down="17.5"/>
          </div>
        </div>
      </sn-card-no-title>
    </div>
  </sn-three-col-space>
</template>

<script>
import RegistrationSickInfo
  from "@/views/home/children/registration_manage/new_add_registration/children/RegistrationSickInfo";
import DrugAddTable
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/DrugAddTable";
import DrugTableInfo
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/DrugTableInfo";
import BatchSetting
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/batch_setting/BatchSetting";
import MoneyDetail
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/MoneyDetail";
import AdditionMoneyDialog
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/AdditionMoneyDialog";

export default {
  name: "DrugSale",
  components: {
    RegistrationSickInfo,
    DrugAddTable,
    DrugTableInfo,
    BatchSetting,
    MoneyDetail,
    AdditionMoneyDialog
  },
  data() {
    return {
      drugTableInfo: [
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
      drugTableTitle: [
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
      drugTableInfoAdd: [
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
      ],
      drugSelectDescription: '药品分类',
      drugSelectData: [
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
      inputPlaceholder: '输入中文或拼音搜索',
      workerData: [
        {
          value: 0,
          label: '宁姚'
        },
        {
          value: 1,
          label: '宁姚'
        },
        {
          value: 2,
          label: '宁姚'
        },
      ],
      totalMoney: 12.25,
      otherPayData: []
    }
  },
  methods: {
    toCheckOutDrug() {
      this.$router.push("/home/checkOutDrug/5")
    }
  },
}
</script>

<style scoped>
.move-down{
  position: relative;
  top: 10px;
}
.el-button{
  width: 100px;
}
</style>