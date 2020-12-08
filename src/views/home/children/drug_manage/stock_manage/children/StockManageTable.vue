<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="drugId" label="药品编码"/>
      <el-table-column prop="locationId" label="货位号"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="prescriptionType" label="处方类别"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="drugType" label="剂型"/>
      <el-table-column prop="manufacturer" label="生产厂家"/>

      <el-table-column prop="stock" label="库存" width="150">
        <template slot-scope="scope">
          <sn-text :text="scope.row.stock" font-color="pink"/>
        </template>
      </el-table-column>

      <el-table-column prop="buyPrice" label="采购金额(元)"/>
      <el-table-column prop="salePrice" label="零售金额(元)"/>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   @click="lookDetail"
                   class="margin-right">查看明细
          </el-link>
        </template>
      </el-table-column>
    </el-table>

    <sn-row-has-two-col :left="12" :right="12">
      <div slot="one-col" class="to-flex buy-info">
        <sn-text text="采购金额合计 :" class="margin-right" :move-down="2"/>
        <sn-text text="6454812.12" :font-size="20" font-color="pink" class="margin-right"/>
        <sn-text text="元" class="margin-right-20" :move-down="3"/>

        <sn-text text="零售金额合计 :" class="margin-right" :move-down="2.5"/>
        <sn-text text="52216546.12" :font-size="20" font-color="pink"  class="margin-right"/>
        <sn-text text="元" :move-down="3.5"/>
      </div>
      <sn-page
          :table-data="tableData"
          slot="two-col"
          class="float-right margin-top-20 margin-bottom-20"
          @getPageData="getPageData"/>
    </sn-row-has-two-col>
  </div>
</template>

<script>
export default {
  name: "StockManageTable",
  components: {},
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
    lookDetail() {
      this.$router.push('/home/stockManageDetail/11')
    }
  },

}
</script>

<style scoped>
.buy-info{
  margin-top: 27px;
}
</style>