<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="9"
      :two="7">
    <sn-date-picker-with-round slot="one-col" class="to-flex" :date-picker-style="{'width':'270px'}">
      <sn-text text="创建时间" slot="title" :move-down="12" class="margin-right-20 move-down-date"/>
    </sn-date-picker-with-round>
    <sn-search-input
        :input-placeholder="inputPlaceholder"
        slot="two-col" class="move-down-little"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "DrugChangePriceFindInfoBar",
  data() {
    return {}
  },
  props: {
    inputPlaceholder: {
      type: String,
      default: ''
    },
  },
}
</script>

<style scoped>
.move-down-little {
  position: relative;
  top: 3px;
}
</style>