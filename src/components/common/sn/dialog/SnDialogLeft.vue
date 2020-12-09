<template>
  <div>

    <div v-if="showDialogLeft" class="dialog-left-content">
      <div v-for="(item,index) in contentItemCount">
        <slot :name="'itemName' + index"/>
      </div>
    </div>

    <div>
      <el-link
          @click="toShowDialogLeft"
          type="primary"
          :underline="false">
        <slot name="title"/>
      </el-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "SnDialogLeft",
  data() {
    return {
      showDialogLeft: false
    }
  },
  methods: {
    toShowDialogLeft() {
      this.showDialogLeft = !this.showDialogLeft
    }
  },
  props: {
    contentItemCount: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>
.dialog-left-content {
  position: absolute;
  right:77px;
  top: 13px;
  width: 320px;
  display: flex;
  border: 1px solid #666EE8;
  justify-content: center;
  border-radius: 25px;
  background-color: #fff;
  padding: 10px 5px;
}
</style>