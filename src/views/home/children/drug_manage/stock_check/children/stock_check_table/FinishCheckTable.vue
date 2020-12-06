<template>
  <div class="margin-top">
    <sn-row-has-four-col :one="6" :two="6" three="6" class="to-flex check-info">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="盘点单号 :" class="margin-right"/>
        <sn-text text="SA655231324156"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="盘点人 :" class="margin-right"/>
        <sn-text text="陈平安"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="创建时间 :" class="margin-right"/>
        <sn-text text="2019-12-11 10:23:22"/>
      </div>
    </sn-row-has-four-col>

    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="drugId" label="药品编码"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="locationId" label="货位号"/>
      <el-table-column prop="prescriptionType" label="处方类别"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="manufacturer" label="生产厂家"/>
      <el-table-column prop="nowStock" label="当前库存"/>
      <el-table-column prop="checkStock" label="盘点库存"/>
      <el-table-column prop="stockAddOrReduce" label="库存增减"/>
      <el-table-column prop="checkStatus" label="备注"/>
    </el-table>
    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
export default {
  name: "FinishCheckTable",
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
  },

}
</script>

<style scoped>
.check-info {
  background-color: #EEEFFB;
  line-height: 60px;
}
</style>