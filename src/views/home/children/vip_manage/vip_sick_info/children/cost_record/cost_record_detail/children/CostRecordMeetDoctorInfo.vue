<!-- 接诊信息 -->
<template>
  <div>
    <!-- 标题 -->
    <div class="to-flex">
      <i class="el-icon-document-checked my-icon"/>
      <sn-text
          font-color="#666EE8"
          :font-size="25"
          font-weight="bold"
          class="margin-bottom-20 "
          text="接诊信息"/>
    </div>
    <!--  信息 -->
    <div>
      <sn-row-has-many-div :div-count="5">
        <div :slot="1" class="to-flex">
          <sn-text text="门诊编号 :" class="margin-right"/>
          <sn-text text="1561612"/>
        </div>
        <div :slot="2" class="to-flex">
          <sn-text text="科室 :" class="margin-right"/>
          <sn-text text="全科"/>
        </div>
        <div :slot="3" class="to-flex">
          <sn-text text="接诊医生 :" class="margin-right"/>
          <sn-text text="陈平安"/>
        </div>
        <div :slot="4" class="to-flex">
          <sn-text text="接诊日期 :" class="margin-right"/>
          <sn-text text="2019-12-11 10:45:12"/>
        </div>
        <div :slot="5" class="to-flex">
          <sn-text text="接诊类型 :" class="margin-right"/>
          <sn-text text="初诊"/>
        </div>
      </sn-row-has-many-div>
    </div>
  </div>


</template>

<script>
export default {
  name: "CostRecordOrderInfo",
}
</script>

<style scoped>
.my-icon {
  font-size: 20px;
  color: #666EE8;
  position: relative;
  top: 5px;
  margin-right: 5px;
}
</style>