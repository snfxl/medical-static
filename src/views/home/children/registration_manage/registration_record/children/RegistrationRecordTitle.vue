<template>
  <sn-flex-appoint-element :element-count="4" class="margin-left-20">
    <el-button type="primary" plain :slot="1">
      <sn-text text="未就诊"/>
    </el-button>
    <el-button type="primary" plain :slot="2">
      <sn-text text="已就诊"/>
    </el-button>
    <el-button type="primary" plain :slot="3">
      <sn-text text="已退号"/>
    </el-button>
    <el-button type="primary" plain :slot="4" class="to-right" @click="toNewAddRegistration">
      <sn-text text="新增挂号"/>
    </el-button>
  </sn-flex-appoint-element>
</template>

<script>
export default {
  name: "RegistrationRecordTitle",
  methods: {
    toNewAddRegistration() {
      this.$router.push("/home/newAddRegistration/3")
    },
  }
}
</script>

<style scoped>
.to-right {
  margin-left: 900px;
}
</style>