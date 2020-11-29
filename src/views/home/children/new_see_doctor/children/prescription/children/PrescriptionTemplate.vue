<template>
  <sn-row-has-two-col :left=14 :right=10>
    <sn-card-with-title slot="one-col">
    </sn-card-with-title>
    <sn-card-with-title slot="two-col">
      <sn-row-has-two-col slot="title" :left="12" :right="12">
        <div slot="one-col" class="title-left">
          <sn-text text="药品分类" class="description"/>
          <sn-select select-placeholder="药品分类" :select-data="selectData" :select-style="{'width':'150px'}"/>
        </div>
        <sn-search-input class="sn-search-input" slot="two-col"/>
      </sn-row-has-two-col>
      <drug-table-info slot="content"></drug-table-info>
    </sn-card-with-title>
  </sn-row-has-two-col>
</template>

<script>
import SnCardWithTitle from "@/components/common/card/SnCardWithTitle";
import SnRowHasTwoCol from "@/components/common/layout/row/SnRowHasTwoCol";
import DrugTableInfo from "@/views/home/children/new_see_doctor/children/prescription/children/DrugTableInfo";
import SnSelect from "@/components/common/select/SnSelect";
import SnSearchInput from "@/components/common/input/SnSearchInput";
import SnText from "@/components/common/text/SnText";

export default {
  name: "PrescriptionTemplate",
  components: {
    SnCardWithTitle,
    SnRowHasTwoCol,
    DrugTableInfo,
    SnSelect,
    SnSearchInput,
    SnText
  },
  data() {
    return {
      selectData: [
        {
          value: 1,
          label: '全部分类'
        },
        {
          value: 2,
          label: '常用药品'
        },
        {
          value: 3,
          label: '西药'
        },
        {
          value: 4,
          label: '感冒药'
        },
        {
          value: 5,
          label: '材料'
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
.sn-search-input {
  position: relative;
  top: 10px;
}

.title-left {
  display: flex;
}

.description {
  position: relative;
  margin-right: 20px;
  top: 20px;
}
</style>