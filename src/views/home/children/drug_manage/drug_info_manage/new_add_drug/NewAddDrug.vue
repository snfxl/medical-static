<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <div slot="title">
        <sn-row-has-two-col :left="19" :right="5">
          <div slot="one-col">
            <el-button type="primary" plain
                       @click="toWestDrugInfo"
                       :style="westDrugButtonStyle">
              <sn-text text="西/成药信息"/>
            </el-button>
            <el-button type="primary" plain
                       @click="toCenterDrugInfo"
                       :style="centerDrugButtonStyle">
              <sn-text text="中药信息"/>
            </el-button>
          </div>
          <div slot="two-col">
            <el-button
                @click="saveAndReturn"
                type="primary" plain>
              <sn-text text="保存"/>
            </el-button>
            <el-button
                @click="toReturnDrugInfoShow"
                type="primary" plain>
              <sn-text text="返回"/>
            </el-button>
          </div>
        </sn-row-has-two-col>
      </div>
      <div slot="content">
        <west-drug-info v-if="chooseWestDrugInfo"/>
        <center-drug-info v-if="chooseCenterDrugInfo"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import CenterDrugInfo
  from "@/views/home/children/drug_manage/drug_info_manage/new_add_drug/children/center_drug_info/CenterDrugInfo";
import WestDrugInfo
  from "@/views/home/children/drug_manage/drug_info_manage/new_add_drug/children/west_drug_info/WestDrugInfo";

export default {
  name: "NewAddDrugInfo",
  components: {
    CenterDrugInfo,
    WestDrugInfo
  },
  data() {
    return {
      chooseWestDrugInfo: false,
      chooseCenterDrugInfo: true,
      westDrugButtonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      },
      centerDrugButtonStyle: '',
      buttonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      }
    }
  },
  methods: {
    //切换到西药
    toWestDrugInfo() {
      this.chooseWestDrugInfo = true
      this.chooseCenterDrugInfo = false
      this.westDrugButtonStyle = this.buttonStyle
      this.centerDrugButtonStyle = ''
    },
    //切换到中药
    toCenterDrugInfo() {
      this.chooseWestDrugInfo = false
      this.chooseCenterDrugInfo = true
      this.centerDrugButtonStyle = this.buttonStyle
      this.westDrugButtonStyle = ''
    },
    //保存并返回
    saveAndReturn(){
      this.$router.push('/home/drugInfoShow/8')
    },
    //返回
    toReturnDrugInfoShow(){
      this.$router.push('/home/drugInfoShow/8')
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.el-button {
  width: 115px;
}
</style>