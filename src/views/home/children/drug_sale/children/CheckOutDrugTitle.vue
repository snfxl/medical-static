<template>
  <div class="to-flex">
    <sn-title title="应收金额 :" class="margin-right move-down"/>
    <sn-text :number="150.25"
             class="margin-right"
             font-color="orange"
             font-weight="bolder"
             font-size="30"/>
    <sn-title title="元" class="move-down"/>
    <div class="to-flex move-right">
      <router-link to="/home/drugSale/5">
        <el-button type="primary" plain>
          <sn-text text="返回"/>
        </el-button>
      </router-link>
      <collect-money-dialog class="margin-left-20"/>
    </div>
  </div>
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

.move-right {
  position: relative;
  left: 700px;
}
</style>