<template>
  <div>
    <sn-text
        text="消费明细"
        :font-size="18"
        font-weight="bold"
        class="margin-left-20 margin-bottom"/>

    <el-table
        :data="tableData"
        :border="true"
        stripe
        height="400"
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="getOrReturnCostDate" label="收费/退费时间"/>
      <el-table-column prop="costStatus" label="收费状态">
        <template slot-scope="scope">
          <sn-text
              v-if="scope.row.costStatus === '未收费'"
              :text="scope.row.costStatus"
              font-color="orange"/>
          <sn-text
              v-if="scope.row.costStatus === '已退费'"
              :text="scope.row.costStatus"
              font-color="pink"/>
          <sn-text
              v-if="scope.row.costStatus === '已收费'"
              :text="scope.row.costStatus"
              font-color="#28D094"/>
        </template>
      </el-table-column>
      <el-table-column prop="costType" label="收费类型"/>
      <el-table-column prop="needGetOrReturnMoney" label="应收(可退)金额"/>
      <el-table-column prop="actualGetOrReturnMoney" label="实收(实退)金额"/>
      <el-table-column prop="payMethod" label="支付方式"/>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link
              @click="lookNotCostDetail"
              v-if="scope.row.costStatus === '未收费'"
              type="primary"
              :underline="false">
            <sn-text text="收费"/>
          </el-link>
          <el-link
              @click="lookHasCostDetail"
              v-if="scope.row.costStatus === '已收费'"
              type="primary"
              :underline="false">
            <sn-text text="查看详情"/>
          </el-link>
          <el-link
              @click="lookReturnCostDetail"
              v-if="scope.row.costStatus === '已退费'"
              type="primary"
              :underline="false">
            <sn-text text="查看详情"/>
          </el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>


</template>

<script>
export default {
  name: "CostRecordShowTable",
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
    lookHasCostDetail() {
      this.$router.push('/home/hasCostRecord/14')
    },
    lookNotCostDetail() {
      this.$router.push('/home/notCostRecord/14')
    },
    lookReturnCostDetail() {
      this.$router.push('/home/returnCostRecord/14')
    },

  },
}
</script>

<style scoped>

</style>