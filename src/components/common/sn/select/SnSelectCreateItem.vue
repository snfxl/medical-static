<template>
  <div>
    <div class="title">
      <slot name="title"/>
    </div>
    <el-select
        v-model="selectValue"
        multiple
        filterable
        allow-create
        default-first-option
        :placeholder="placeholder"
        style="width: 100%">
      <el-option
          v-for="item in options"
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
      selectValue: ''
    }
  },

  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    options: {
      type: Array,
      default() {
        return [
          {
            value: 'HTML',
            label: 'HTML'
          },
          {
            value: 'CSS',
            label: 'CSS'
          },
          {
            value: 'JavaScript',
            label: 'JavaScript'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}
</style>