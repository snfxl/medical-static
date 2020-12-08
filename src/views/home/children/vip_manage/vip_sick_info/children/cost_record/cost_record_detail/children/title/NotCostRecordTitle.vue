<template>
  <sn-row-has-two-col
      :left="20"
      :right="4"
      class="to-flex move-down">
    <div class="to-flex" slot="one-col">
      <sn-text
          :font-size="20"
          font-weight="bold"
          text="应收金额 :"
          class="margin-right"
          :move-down="5"/>
      <sn-text :number="150.25"
               class="margin-right"
               font-color="orange"
               font-weight="bolder"
               :font-size="30"/>
      <sn-text
          :font-size="20"
          font-weight="bold"
          text="元"
          :move-down="5"/>
    </div>
    <div class="to-flex" slot="two-col">
      <router-link to="/home/vipSickInfo/14">
        <el-button type="primary" plain>
          <sn-text text="返回"/>
        </el-button>
      </router-link>
      <collect-money-dialog class="margin-left-20"/>
    </div>
  </sn-row-has-two-col>
</template>

<script>
import CollectMoneyDialog
  from "@/views/home/children/registration_manage/new_add_registration/children/CollectMoneyDialog";

export default {
  name: "NotCostRecordTitle",
  components: {
    CollectMoneyDialog
  }
}
</script>

<style scoped>
.el-button {
  width: 100px;
}

.move-down {
  position: relative;
  top: 10px;
}
</style>