<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ cardTitle }}</span>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="12">
          <div>{{ describe }}</div>
          <div>
            <img :src="upImg" v-if="up"/>
            <img :src="downImg" v-else>
            <span>{{ aboutCondition }}</span>
          </div>
        </el-col>
        <el-col :span="12">
          <img :src="manageCondition1" v-if="infoIcon===1">
          <img :src="manageCondition2" v-if="infoIcon===2">
          <img :src="manageCondition3" v-if="infoIcon===3">
          <img :src="manageCondition4" v-if="infoIcon===4">
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      upImg: require("@/assets/image/home/manage_condition/up.svg"),
      downImg: require("@/assets/image/home/manage_condition/down.svg"),
      manageCondition1: require("@/assets/image/home/manage_condition/managecondition1.png"),
      manageCondition2: require("@/assets/image/home/manage_condition/managecondition2.png"),
      manageCondition3: require("@/assets/image/home/manage_condition/managecondition3.png"),
      manageCondition4: require("@/assets/image/home/manage_condition/managecondition4.png"),
    }
  },
  props: {
    cardTitle: {
      type: Number,
      default: 56
    },
    describe: {
      type: String,
      default: "今日挂号人次"
    },
    up: {
      type: Boolean,
      default: false
    },
    aboutCondition: {
      type: String,
      default: "较昨日上涨20%"
    },
    infoIcon: {
      type: Number,
      default: 1
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>