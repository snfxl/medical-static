<template>
  <div>
    <div class="to-flex">
      <i class="el-icon-s-custom my-icon"/>
      <sn-text
          font-color="#666EE8"
          :font-size="25"
          font-weight="bold"
          class="margin-bottom-20 "
          text="人员信息"/>
    </div>

    <div>
      <sn-row-has-many-div :div-count="4">
        <div :slot="1" class="to-flex">
          <sn-text text="患者编号 :" class="margin-right"/>
          <sn-text text="16512"/>
        </div>
        <div :slot="2" class="to-flex">
          <sn-text text="患者姓名 :" class="margin-right"/>
          <sn-text text="宁姚" font-weight="bold" font-color="#666EE8"/>
        </div>
        <div :slot="3" class="to-flex">
          <sn-text text="年龄 :" class="margin-right"/>
          <sn-text text="15" class="margin-right"/>
          <sn-text text="岁"/>
        </div>
        <div :slot="4" class="to-flex">
          <sn-text text="性别 :" class="margin-right"/>
          <sn-text text="女"/>
        </div>
      </sn-row-has-many-div>
      <sn-row-has-many-div :div-count="4">
        <div :slot="1" class="to-flex">
          <sn-text text="手机 :" class="margin-right"/>
          <sn-text text="21651231651"/>
        </div>
        <div :slot="2" class="to-flex">
          <sn-text text="会员等级 :" class="margin-right"/>
          <sn-text text="VIP3" class="margin-right vip" :move-down="-3"/>
        </div>
        <div :slot="3" class="to-flex">
          <sn-text text="账户余额 :" class="margin-right"/>
          <sn-text text="2411.21" class="margin-right"/>
          <sn-text text="元"/>
        </div>
        <div :slot="4" class="to-flex">
          <sn-text text="积分 :" class="margin-right"/>
          <sn-text text="600"/>
        </div>
      </sn-row-has-many-div>


    </div>

  </div>


</template>

<script>

export default {
  name: "CostRecordSickInfo",
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