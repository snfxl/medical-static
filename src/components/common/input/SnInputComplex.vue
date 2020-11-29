<template>
  <div>
    <div class="title">
      <slot name="title"/>
    </div>
    <el-input placeholder="请输入内容" v-model="input1" class="input-with-select" style="width: 100%">
      <el-select v-model="select" slot="append" placeholder="请选择" style="width: 70px">
        <el-option :label="item.label" :value="item.value" v-for="item in chooseItem"></el-option>
      </el-select>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      select: this.toSelect
    }
  },
  props: {
    toSelect: {
      type: Number,
      default: 1
    },
    chooseItem: {
      type: Array,
      default() {
        return [
          {
            label: '岁',
            value: 1
          },
          {
            label: '月',
            value: 2
          },
          {
            label: '天',
            value: 3
          },
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