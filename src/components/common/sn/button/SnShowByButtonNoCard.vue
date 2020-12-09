<template>
  <div>
    <div class="to-flex">
      <el-button
          :class="{'button-click-style': index === buttonId}"
          @click="change(index)"
          plain
          type="primary"
          v-for="(item,index) in buttonCount">
        <span>
          <slot :name="'buttonName' + index"/>
        </span>
      </el-button>
    </div>
    <div>
      <div v-for="(item,index) in contentCount"
           v-if="buttonId === index">
        <slot :name="'content' + index"/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SnShowByButtonNoCard",

  data() {
    return {
      buttonId: 0,
    }
  },
  props: {
    buttonCount: {
      type: Number,
      default: 0
    },
    contentCount: {
      type: Number,
      default: 0
    },
    buttonNames: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    change(index) {
      this.buttonId = index
      //向父组件发送当前点击的按钮的名字
      this.$emit('getCurrentClickButtonName',this.buttonNames[index])
    },
  },
}
</script>

<style scoped>
.button-click-style {
  background-color: #409EFF;
  color: #fff
}
</style>