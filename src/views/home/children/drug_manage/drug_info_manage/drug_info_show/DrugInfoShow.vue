<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <drug-info-show-title slot="title"/>
      <div slot="content">
        <drug-info-show-find-bar input-placeholder="输入药品名称/编码/生成厂家"/>
        <drug-info-show-table :table-data="drugInfoShowTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import DrugInfoShowFindBar
  from "@/views/home/children/drug_manage/drug_info_manage/drug_info_show/children/DrugInfoShowFindBar";
import DrugInfoShowTable
  from "@/views/home/children/drug_manage/drug_info_manage/drug_info_show/children/DrugInfoShowTable";
import DrugInfoShowTitle
  from "@/views/home/children/drug_manage/drug_info_manage/drug_info_show/children/DrugInfoShowTitle";

export default {
  name: "DrugInfoShow",
  components: {
    DrugInfoShowFindBar,
    DrugInfoShowTable,
    DrugInfoShowTitle
  },
  data() {
    return {
      drugInfoShowTableData: [
        {
          id: '1',
          drugId: '100001',
          name: '复方氯化钠注射液',
          specification: '6g*11袋/盒',
          prescriptionType: '西/成药',
          buyPrice: '2.5',
          salePrice: '4',
          manufacturer: '上海医药集团',
          status: '停药',
          createDate: '2020-02-09 10:23:23',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>