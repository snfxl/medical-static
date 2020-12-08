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
      <el-table-column prop="enterStockId" label="入库单号"/>
      <el-table-column prop="enterStockType" label="入库类型"/>
      <el-table-column prop="supplier" label="供应商名称"/>
      <el-table-column prop="makeFormWorker" label="制单人员"/>
      <el-table-column prop="buyPrice" label="采购金额"/>
      <el-table-column prop="salePrice" label="零售金额"/>
      <el-table-column prop="enterStockWorker" label="入库人员"/>
      <el-table-column prop="createDate" label="创建时间" width="100"/>
      <el-table-column prop="checkStatus" label="审核状态">
        <template slot-scope="scope">
          <sn-text :text="scope.row.checkStatus" font-color="pink"/>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   @click="toOutStockPassCheck"
                   v-if="scope.row.checkStatus === '审核通过'"
                   class="margin-right">查看
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   @click="toOutStockNotPassCheck"
                   v-if="scope.row.checkStatus === '审核未通过'"
                   class="margin-right">查看
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   @click="toOutStockNotCheck"
                   v-if="scope.row.checkStatus === '未审核'"
                   class="margin-right">编辑
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.checkStatus === '审核未通过' || scope.row.checkStatus === '未审核'"
                   class="margin-right">删除
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   @click="outStockAgain"
                   class="margin-right">再次出库
          </el-link>
        </template>
      </el-table-column>


    </el-table>
    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
import StockCheckWorkerInfo from "@/views/home/children/drug_manage/stock_check/children/StockCheckWorkerInfo";

export default {
  name: "EnterStockInfoTable",
  components: {
    StockCheckWorkerInfo
  },
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
    //查看审核通过
    toOutStockPassCheck() {
      this.$router.push('/home/enterStockPassCheck/9')
    },
    //查看审核未通过
    toOutStockNotPassCheck() {
      this.$router.push('/home/enterStockNotPassCheck/9')
    },
    //编辑未审核
    toOutStockNotCheck() {
      this.$router.push('/home/enterStockNotCheck/9')
    },
    //再次出库
    outStockAgain() {
      this.$router.push('/home/enterStockNotCheck/9')
    }
  },

}
</script>

<style scoped>
</style>