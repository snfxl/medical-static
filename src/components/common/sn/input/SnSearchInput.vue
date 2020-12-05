<template>
  <div class="demo-input-suffix">
    <div class="title">
      <slot name="title"/>
    </div>
    <el-input
        :placeholder="inputPlaceholder"
        suffix-icon="el-icon-search"
        v-model="input"
        :style="inputStyle"
        class="input"
        :type="inputType">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SnSearchBox",
  data() {
    return {
      input: '',
    }
  },

  props: {
    inputPlaceholder: {
      type: String,
      default: ''
    },
    inputStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    inputType: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  font-size: 12px;
}
</style>