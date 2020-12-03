<!-- 病人信息 -->
<template>
  <sn-card-with-title class="sick-info">
    <div slot="title">
      <el-button type="primary" plain size="medium" @click="toShowPrescription">处方</el-button>
      <el-button type="danger" plain size="medium" @click="toShowSickCase">病例</el-button>
    </div>
    <div slot="content">
      <sink-info-first-row ref="first"></sink-info-first-row>
      <sink-info-second-row ref="second"></sink-info-second-row>
      <sink-info-third-row></sink-info-third-row>
      <sink-info-fourth-row></sink-info-fourth-row>
    </div>
  </sn-card-with-title>
</template>

<script>
import SinkInfoFirstRow from "@/views/home/children/new_see_doctor/children/sink_info/children/SinkInfoFirstRow";
import SinkInfoSecondRow from "@/views/home/children/new_see_doctor/children/sink_info/children/SinkInfoSecondRow";
import SinkInfoThirdRow from "@/views/home/children/new_see_doctor/children/sink_info/children/SinkInfoThirdRow";
import SinkInfoFourthRow from "@/views/home/children/new_see_doctor/children/sink_info/children/SinkInfoFourthRow";
import {addSink} from "@/api/sinkInfo";
import {dateFormat} from "@/utils/date";

export default {
  components: {
    SinkInfoFirstRow,
    SinkInfoSecondRow,
    SinkInfoThirdRow,
    SinkInfoFourthRow
  },
  data() {
    return {
      sinkInfo: {
        id: 1,
        /**
         * 接诊状态
         */
        meetDoctorStatus: {
          value: 0,
          status: '接诊中'
        },

        /**
         * 患者姓名
         */
        name: '陈平安',

        /**
         * 患者编号
         */
        sickId: 666,

        /**
         * 性别
         */
        sex: {
          value: 0,
          sex: '男'
        },

        age: 22,

        /**
         * 手机号码
         */
        phoneNumber: 778899,

        /**
         * 门诊类型
         */
        clinicType: {
          value: 0,
          clinicType: '初诊'
        },

        /**
         * 科室
         */
        department: {
          value: 0,
          department: '全科'
        },

        /**
         * 挂号医生
         */
        doctor: '宁姚',

        /**
         * 最后更新时间
         */
        updateTime: '',

        /**
         * 初诊时间
         */
        firstVisitTime: '',
      }
    }
  },
  methods: {
    toShowPrescription() {
      this.$emit('showPrescription')
    },
    toShowSickCase() {
      this.$emit('showSickCase')
    },
    toAddSick() {

      let firstRowComponent = this.$refs.first.$refs
      let secondRowComponent = this.$refs.second.$refs

      let name = firstRowComponent.name.state

      let sickId = firstRowComponent.sickId.inputValue
      let age = firstRowComponent.age.inputValue

      let sex = {
        value: secondRowComponent.sex.getNowSelect.value,
        sex: secondRowComponent.sex.getNowSelect.label
      }

      let clinicType = {
        value: secondRowComponent.clinicType.getNowSelect.value,
        clinicType: secondRowComponent.clinicType.getNowSelect.label
      }

      let phoneNumber = secondRowComponent.phoneNumber.inputValue

      this.sinkInfo.name = name
      this.sinkInfo.sickId = sickId
      this.sinkInfo.sex = sex
      this.sinkInfo.clinicType = clinicType
      this.sinkInfo.phoneNumber = phoneNumber
      this.sinkInfo.age = age
      this.sinkInfo.updateTime = dateFormat(new Date());
      this.sinkInfo.firstVisitTime = dateFormat(new Date());

      addSink(this.sinkInfo)
    }
  }

}
</script>

<style scoped lang="less">
.sick-info {
  padding-left: 20px;
  padding-right: 20px;

  .el-button {
    width: 90px;
  }
}
</style>