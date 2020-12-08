<template>
  <sn-row-has-two-col :left="20" :right="4" class="to-flex">
    <div class="to-flex" slot="one-col">
      <sn-title title="应收金额 :" class="margin-right move-down"/>
      <sn-text :number="150.25"
               class="margin-right"
               font-color="orange"
               font-weight="bolder"
               :font-size="30"/>
      <sn-title title="元" class="move-down"/>
    </div>
    <div class="to-flex" slot="two-col">
      <router-link to="/home/drugSale/5">
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
  name: "CheckOutDrugTitle",
  components: {
    CollectMoneyDialog
  }
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 8px;
}
.el-button{
  width: 100px;
}
</style>