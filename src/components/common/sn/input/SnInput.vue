<template>
  <div class="sn-input">
    <div class="title">
      <slot name="title"/>
    </div>
    <el-input v-model="inputValue"
              :style="inputStyle"
              :placeholder="inputPlaceholder"
              :disabled="isDisabled">
    </el-input>
    <div class="input-after">
      <slot name="input-after"/>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      inputValue: this.inputValueFromParent,
    }
  },

  props: {
    //是否禁用
    isDisabled: {
      type: Boolean,
      default: false
    },
    inputPlaceholder: {
      type: String,
      default: ''
    },
    inputStyle: {
      type: Object,
      default() {
        return {
          'width': '100%'
        }
      }
    },
    inputValueFromParent: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}

.sn-input {
  margin-right: 5px;
}

.input-after {
  margin-right: 5px;
}
</style>