<template>
  <sn-flex-appoint-element
      :element-count="4"
      class="margin-bottom-20">
    <el-button type="primary" plain :slot="1">
      <sn-text text="个人信息"/>
    </el-button>
    <el-button type="primary" plain :slot="2">
      <sn-text text="电子病历"/>
    </el-button>
    <el-button type="primary" plain :slot="3">
      <sn-text text="收费记录"/>
    </el-button>
    <div class="to-right to-flex" :slot="4">
      <el-button type="primary" plain>
        <sn-text text="保存"/>
      </el-button>
      <el-button type="primary" @click="toReturnSickManage" plain>
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-flex-appoint-element>
</template>

<script>
export default {
  name: "EditSickTitle",
  methods: {
    toReturnSickManage(){
      this.$router.push("/home/sickManage/7")
    }
  },
}
</script>

<style scoped>
.to-right {
  margin-left: 880px;
}
</style>