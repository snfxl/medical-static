<template>
  <el-row :gutter="10" class="space">
    <el-col class="space-side" :span="2">
    </el-col>
    <el-col :span="20" class="space-content">
      <div class="space-content-div">
        <slot name="spaceContent"></slot>
      </div>
    </el-col>
    <el-col class="space-side" :span="2">
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SnThreeColSpace"
}
</script>

<style scoped lang="less">
.space {
  height: 100%;
  background-color: #F2F2F2;
  padding-bottom: 40px;
}

.space-content {
  background-color: #fff;
  margin-top: 40px;
  padding-top: 30px;
  padding-bottom: 20px;
}

.space-side {

  height: 100%;
}

.space-content-div{
  padding-left: 25px;
  padding-right: 25px;
}
</style>