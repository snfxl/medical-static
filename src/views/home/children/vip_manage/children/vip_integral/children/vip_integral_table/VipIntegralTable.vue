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
      <el-table-column prop="cardId" label="卡号"/>
      <el-table-column prop="vipType" label="会员类型"/>
      <el-table-column prop="vipGrade" label="会员等级">
        <template slot-scope="scope">
          <sn-text
              class="vip"
              :text="scope.row.vipGrade"
        </template>
      </el-table-column>
      <el-table-column prop="vipName" label="会员姓名">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="toVipSickInfo">
            <sn-text :text="scope.row.vipName"/>
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="手机号码"/>
      <el-table-column prop="integral" label="积分"/>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <div class="to-flex">
            <!-- 变动积分弹出框 -->
            <change-integral-dialog/>
            <!-- 积分变动记录弹出框 -->
            <change-integral-record-dialog/>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <sn-page
        :table-data="tableData"
        slot="two-col"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
import ChangeIntegralDialog
  from "@/views/home/children/vip_manage/children/vip_integral/children/vip_integral_table/children/ChangeIntegralDialog";
import ChangeIntegralRecordDialog
  from "@/views/home/children/vip_manage/children/vip_integral/children/vip_integral_table/children/ChangeIntegralRecordDialog";

export default {
  name: "VipIntegralTable",
  components: {
    ChangeIntegralDialog,
    ChangeIntegralRecordDialog
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
    toVipSickInfo() {
      this.$router.push('/home/vipSickInfo/14')
    }
  },
}
</script>

<style scoped>

</style>