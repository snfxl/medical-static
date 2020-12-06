<!-- 药品调价-->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <drug-change-price-title
          @drugChangePrice="showChangePriceTable"
          @drugChangePriceRecord="showChangePriceRecordTable"
          slot="title"/>
      <div slot="content">
        <drug-change-price-find-info-bar/>
        <!-- 药品调价表格 -->
        <drug-change-price-table
            v-if="!showChangePriceRecord"
            :table-data="drugPriceChangeTableData"/>
        <!-- 药品调价记录表格 -->
        <drug-change-price-record-table
            v-else
            :table-data="drugPriceChangeRecordTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import DrugChangePriceFindInfoBar
  from "@/views/home/children/drug_manage/drug_change_price/children/DrugChangePriceFindInfoBar";
import DrugChangePriceTable from "@/views/home/children/drug_manage/drug_change_price/children/change_price_table/DrugChangePriceTable";
import DrugChangePriceTitle from "@/views/home/children/drug_manage/drug_change_price/children/DrugChangePriceTitle";
import DrugChangePriceRecordTable
  from "@/views/home/children/drug_manage/drug_change_price/children/change_price_table/DrugChangePriceRecordTable";

export default {
  name: "DrugChangePrice",
  data() {
    return {
      drugPriceChangeTableData: [
        {
          id: '1',
          drugId: '1234564',
          name: '氯化钠',
          prescriptionType: '西/成药',
          specification: '6g*10袋/盒',
          drugType: '口服',
          manufacturer: '上海医药集团'
        },
      ],
      drugPriceChangeRecordTableData: [
        {
          id: '1',
          drugId: '1234564',
          name: '氯化钠',
          prescriptionType: '西/成药',
          specification: '6g*10袋/盒',
          drugType: '口服',
          manufacturer: '上海医药集团',
          changePriceCount: '3'
        },
      ],
      showChangePriceRecord: false
    }
  },
  components: {
    DrugChangePriceFindInfoBar,
    DrugChangePriceTable,
    DrugChangePriceTitle,
    DrugChangePriceRecordTable
  },
  methods: {
    showChangePriceTable() {
      this.showChangePriceRecord = false
    },
    showChangePriceRecordTable() {
      this.showChangePriceRecord = true
    }
  },
}
</script>

<style scoped>

</style>