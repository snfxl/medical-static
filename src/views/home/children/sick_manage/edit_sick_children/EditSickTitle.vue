<template>
  <sn-row-has-two-col :left="20" :right="4" class="margin-bottom-20">
    <div slot="one-col">
      <el-button type="primary" plain>
        <sn-text text="个人信息"/>
      </el-button>
      <el-button type="primary" plain>
        <sn-text text="电子病历"/>
      </el-button>
      <el-button type="primary" plain>
        <sn-text text="收费记录"/>
      </el-button>
    </div>
    <div slot="two-col" class="move-right">
      <el-button type="primary" plain>
        <sn-text text="保存"/>
      </el-button>
      <el-button type="primary" @click="toReturnSickManage" plain>
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "EditSickTitle",
  methods: {
    toReturnSickManage() {
      this.$router.push("/home/sickManage/7")
    }
  },
}
</script>

<style scoped>
.move-right{
  position: relative;
  left: 50px;
}
</style>