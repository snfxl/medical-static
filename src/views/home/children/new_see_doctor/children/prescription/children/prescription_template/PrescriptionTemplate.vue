<template>
  <div>
    <sn-row-has-two-col :left=16 :right=8 class="margin-bottom">
      <!-- 添加药品信息的地方 -->
      <sn-card-with-title slot="one-col">
        <div slot="title">
          <sn-title title="Six"
                    :title-style="{'font-size':'40px','color':'pink'}"
                    :other-style="{'float':'right','margin-top':'10px'}">
            <batch-setting slot="other"/>
          </sn-title>
        </div>

        <check-item-add-table slot="content"
                              v-if="isCheckItemPrescription"
                              :table-data="leftTableData"
                              :has-add-button="false"
        />
        <drug-add-table slot="content"
                        :has-add-button="false"
                        :table-data="leftTableData"
                        :table-title="leftTableTitle"
                        v-else
        />


      </sn-card-with-title>
      <!-- 药品信息相关选择 -->
      <sn-card-with-title slot="two-col">
        <sn-row-has-two-col slot="title" :left="12" :right="12">
          <div slot="one-col" class="title-left">
            <sn-text :text="selectDescription" class="description"/>
            <sn-select :select-data="selectData" :select-style="{'width':'120px'}"/>
          </div>
          <sn-search-input class="sn-search-input" slot="two-col" :input-placeholder="inputPlaceholder"/>
        </sn-row-has-two-col>
        <!-- 药品信息表格-->
        <drug-table-info slot="content" :table-data="rightTableData" :table-title="rightTableTitle"/>
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
import CheckItemAddTable
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/CheckItemAddTable";

export default {
  name: "PrescriptionTemplate",
  components: {
    DrugTableInfo,
    DrugAddTable,
    MoneyDetail,
    BatchSetting,
    CheckItemAddTable
  },
  props: {

    //是否是检查项目的处方
    isCheckItemPrescription: false,

    inputPlaceholder: {
      type: String,
      default: '输入中文或拼音查询'
    },
    leftTableData: {
      type: Array,
      default() {
        return []
      }
    },
    leftTableTitle: {
      type: Array,
      default() {
        return []
      }
    },
    selectData: {
      type: Array,
      default() {
        return []
      }
    },
    selectDescription: {
      type: String,
      default: ''
    },
    rightTableData: {
      type: Array,
      default() {
        return []
      }
    },
    rightTableTitle: {
      type: Array,
      default() {
        return []
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