<template>
  <div>
    <sn-row-has-two-col :left=16 :right=8 class="margin-bottom">
      <!-- 添加药品信息的地方 -->
      <sn-card-with-title slot="one-col">
        <div slot="title">
          <sn-title title="Sn"
                    :title-style="{'font-size':'40px','color':'pink'}"
                    :other-style="{'float':'right','margin-top':'10px'}">
            <batch-setting slot="other"/>
          </sn-title>
        </div>
        <drug-add-table slot="content" :has-add-button="false"/>
      </sn-card-with-title>
      <sn-card-with-title slot="two-col">
        <!-- 药品信息相关选择 -->
        <sn-row-has-two-col slot="title" :left="12" :right="12">
          <div slot="one-col" class="title-left">
            <sn-text :text="description" class="description"/>
            <sn-select :select-data="selectData" :select-style="{'width':'120px'}"/>
          </div>
          <sn-search-input class="sn-search-input" slot="two-col" :input-placeholder="inputPlaceholder"/>
        </sn-row-has-two-col>
        <!-- 药品信息表格-->
        <drug-table-info slot="content" :table-data="tableData" :table-title="tableTitle"/>
      </sn-card-with-title>
    </sn-row-has-two-col>
    <sn-card-no-title>
      <div slot="content">
        <!-- 结算总价 -->
        <money-detail/>
        <el-button type="success"
                   plain slot="other"
                   class="margin-top margin-bottom float-right"
                   >
          <sn-text text="添加处方"/>
        </el-button>
      </div>
    </sn-card-no-title>
  </div>
</template>

<script>
import DrugTableInfo
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/DrugTableInfo";
import DrugAddTable
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/DrugAddTable";
import MoneyDetail
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/MoneyDetail";
import BatchSetting
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/BatchSetting";

export default {
  name: "PrescriptionTemplate",
  components: {
    DrugTableInfo,
    DrugAddTable,
    MoneyDetail,
    BatchSetting
  },
  props: {
    inputPlaceholder: {
      type: String,
      default: '输入中文或拼音查询'
    },
    selectData: {
      type: Array,
      default() {
        return [
          {
            value: 1,
            label: '全部分类'
          },
          {
            value: 2,
            label: '常用药品'
          },
          {
            value: 3,
            label: '西药'
          },
          {
            value: 4,
            label: '感冒药'
          },
          {
            value: 5,
            label: '材料'
          },
        ]
      }
    },
    description: {
      type: String,
      default: '药品分类'
    },
    tableData: {
      type: Array,
      default() {
        return [
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
        ]
      }
    },
    tableTitle: {
      type: Array,
      default() {
        return [
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
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.sn-search-input {
  position: relative;
  top: 10px;
}

.title-left {
  display: flex;
}

.description {
  position: relative;
  margin-right: 10px;
  top: 12px;
}
</style>