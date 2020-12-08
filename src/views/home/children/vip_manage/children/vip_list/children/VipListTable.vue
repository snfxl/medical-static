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
              class="vip-grade"
              :text="scope.row.vipGrade"
              font-color="orange"
              :font-size="20"
              font-weight="bold"/>
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
      <el-table-column prop="cumulativeConsume" label="累计消费(元)"/>
      <el-table-column prop="storeResidue" label="储值余额(元)"/>
      <el-table-column prop="cumulativeStore" label="累计储值(元)"/>
      <el-table-column prop="integral" label="积分"/>
      <el-table-column prop="openCardDate" label="开卡时间" width="100"/>
      <el-table-column prop="expireDate" label="到期时间" width="100"/>

      <el-table-column prop="vipStatus" label="会员状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.vipStatus"/>
        </template>
      </el-table-column>


      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-dropdown trigger="click" placement="bottom">
            <el-link type="danger" :underline="false">
              <sn-text text="操作"/>
            </el-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="text-center">
                <el-link :underline="false" type="primary">
                  <sn-text text="充值"/>
                </el-link>
              </el-dropdown-item>
              <el-dropdown-item class="text-center">
                <el-link :underline="false" type="primary">
                  <sn-text text="设置等级"/>
                </el-link>
              </el-dropdown-item>
              <el-dropdown-item class="text-center">
                <el-link :underline="false" type="primary">
                  <sn-text text="积分变动"/>
                </el-link>
              </el-dropdown-item>
              <el-dropdown-item class="text-center">
                <el-link :underline="false" type="primary">
                  <sn-text text="退款"/>
                </el-link>
              </el-dropdown-item>
              <el-dropdown-item class="text-center">
                <el-link :underline="false" type="primary">
                  <sn-text text="等级变更记录"/>
                </el-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
    toVipSickInfo(){
      this.$router.push('/home/vipSickInfo/14')
    }
  },
}
</script>

<style scoped>
.vip-grade {
  font-style: italic;
}
</style>