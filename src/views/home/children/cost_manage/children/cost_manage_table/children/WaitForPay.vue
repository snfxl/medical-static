<template>
  <div>
    <el-table-column prop="needMoney" label="应收金额(元)"/>
    <el-table-column prop="costStatus" label="收费状态">
      <template slot-scope="scope">
            <span class="status">
              {{ pageData[scope.$index].costStatus }}
            </span>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-link type="primary"
                 :underline="false"
                 v-if="scope.row.costStatus === '待收费'"
                 class="margin-right">收费
        </el-link>
        <el-link type="primary"
                 :underline="false"
                 class="margin-right">编辑
        </el-link>
        <el-link type="primary"
                 :underline="false">删除
        </el-link>
      </template>
    </el-table-column>
  </div>
</template>

<script>
export default {
  name: "WaitForPay"
}
</script>

<style scoped>

</style>