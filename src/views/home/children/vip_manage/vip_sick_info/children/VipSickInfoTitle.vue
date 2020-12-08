<template>
  <sn-row-has-two-col :left="20" :right="4" class="margin-bottom-20">
    <div slot="one-col">
      <el-button type="primary" plain @click="toPersonInfo" :style="personInfoButtonStyle">
        <sn-text text="个人信息"/>
      </el-button>
      <el-button type="primary" plain @click="toElectronicMedicalRecord" :style="electronicMedicalRecordButtonStyle">
        <sn-text text="电子病历"/>
      </el-button>
      <el-button type="primary" plain @click="toCostRecord" :style="costRecordButtonStyle">
        <sn-text text="收费记录"/>
      </el-button>
    </div>
    <div slot="two-col" class="move-right">
      <el-button type="primary" plain @click="saveAndReturn">
        <sn-text text="保存"/>
      </el-button>
      <el-button type="primary" plain @click="toReturnVipManage">
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "VipSickInfoTitle",
  data() {
    return {
      personInfoButtonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      },
      electronicMedicalRecordButtonStyle: '',
      costRecordButtonStyle: '',

      buttonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      }
    }
  }
  ,
  methods: {
    toPersonInfo() {
      this.personInfoButtonStyle = this.buttonStyle
      this.electronicMedicalRecordButtonStyle = ''
      this.costRecordButtonStyle = ''
      this.$emit('toPersonInfo')
    },
    toElectronicMedicalRecord() {
      this.personInfoButtonStyle = ''
      this.electronicMedicalRecordButtonStyle = this.buttonStyle
      this.costRecordButtonStyle = ''
      this.$emit('toElectronicMedicalRecord')
    },
    toCostRecord() {
      this.personInfoButtonStyle = ''
      this.electronicMedicalRecordButtonStyle = ''
      this.costRecordButtonStyle = this.buttonStyle
      this.$emit('toCostRecord')
    },
    toReturnVipManage() {
      this.$router.push("/home/vipManage/14")
    },
    saveAndReturn() {
      this.$router.push("/home/vipManage/14")
    }
  }
}
</script>

<style scoped>
.move-right {
  position: relative;
  left: 50px;
}
</style>