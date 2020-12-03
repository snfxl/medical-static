<template>
  <div class="select">
    <div class="title">
      <slot name="title"/>
    </div>
    <el-select v-model="value" :placeholder="selectPlaceholder" :style="selectStyle">
      <el-option
          v-for="item in selectData"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {

  data() {
    return {
      value: this.toSelect
    }
  },

  computed: {
    getNowSelect() {
      return this.utils.getSelectOption(this.value,this.selectData)
    }
  },

  props: {
    selectStyle: {
      type: Object,
      default() {
        return {
          'width': '100%'
        }
      }
    },
    toSelect: {
      type: Number,
      default: 0
    },
    selectPlaceholder: {
      type: String,
      default: '请选择'
    },
    selectData: {
      type: Array,
      default() {
        return []
      }
    },
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}

.title-level {
  margin-right: 10px;
}
</style>