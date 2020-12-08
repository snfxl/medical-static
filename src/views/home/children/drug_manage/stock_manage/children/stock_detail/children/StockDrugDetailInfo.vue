<template>
  <div class="drug-detail-info">
    <sn-row-has-four-col :one="5" :two="9" :three="4" :four="6" class="to-flex">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="药品编码 :" class="margin-right"/>
        <sn-text text="100021"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="药品名称 :" class="margin-right"/>
        <sn-text text="甲硝唑氯化钠注射液"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="药品类型 :" class="margin-right"/>
        <sn-text text="西/成药"/>
      </div>
      <div slot="four-col" class="to-flex">
        <sn-text text="药品规格 :" class="margin-right"/>
        <sn-text text="100g*20支/盒"/>
      </div>
    </sn-row-has-four-col>

    <sn-row-has-four-col :one="5" :two="9" :three="4" class="to-flex">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="药品剂型 :" class="margin-right"/>
        <sn-text text="口服"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="生产厂家 :" class="margin-right"/>
        <sn-text text="上海医药集团有限公司"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="库存数量 :" class="margin-right"/>
        <sn-text text="98盒"/>
      </div>
    </sn-row-has-four-col>
  </div>
</template>

<script>
export default {
  name: "StockDrugDetailInfo"
}
</script>

<style scoped>
.drug-detail-info {
  background-color: #EEEFFB;
  line-height: 60px;
}
</style>