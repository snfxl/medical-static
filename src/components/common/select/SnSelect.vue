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
      default: 1
    },
    selectPlaceholder: {
      type: String,
      default: '请选择'
    },
    selectData: {
      type: Array,
      default: [
        {
          value: 1,
          label: 'aaa'
        },
        {
          value: 2,
          label: 'bbb'
        },
        {
          value: 3,
          label: 'ccc'
        },
      ],
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