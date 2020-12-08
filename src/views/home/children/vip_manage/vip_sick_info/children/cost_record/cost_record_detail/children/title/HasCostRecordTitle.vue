<template>
  <sn-row-has-two-col
      :left="20"
      :right="4"
      class="to-flex">
    <sn-text
        slot="one-col"
        :font-size="20"
        font-weight="bold"
        text="订单详情-已收费"
        class="margin-right"
        :move-down="5"/>
    <div class="to-flex" slot="two-col">
      <router-link to="/home/vipSickInfo/14">
        <el-button type="primary" plain class="margin-right">
          <sn-text text="退费"/>
        </el-button>
      </router-link>
      <router-link to="/home/vipSickInfo/14">
        <el-button type="primary" plain>
          <sn-text text="返回"/>
        </el-button>
      </router-link>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "HasCostRecordTitle"
}
</script>

<style scoped>
.el-button{
  width: 100px;
}
</style>