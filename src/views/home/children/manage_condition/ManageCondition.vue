<!-- 经营概况-->
<template>
  <sn-three-col-space>
    <div slot="spaceContent">
      <condition-first-row/>
      <condition-second-row/>
      <condition-third-row :table-data="allSink" v-if="allSink"/>
    </div>
  </sn-three-col-space>
</template>

<script>
import ConditionFirstRow from "@/views/home/children/manage_condition/children/ConditionFirstRow";
import ConditionSecondRow from "@/views/home/children/manage_condition/children/ConditionSecondRow";
import ConditionThirdRow from "@/views/home/children/manage_condition/children/ConditionThirdRow";

export default {
  name: "ManageCondition",
  components: {
    ConditionFirstRow,
    ConditionSecondRow,
    ConditionThirdRow,
  },
  data() {
    return {
      allSink: [
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
        {
          id:1,
          meetDoctorStatus: {
            status:'接诊中'
          },
          sickId:12,
          name:'陈平安',
          sex:{
            sex: '男'
          },
          age: 25,
          phoneNumber: '1234567890',
          clinicType:{
            clinicType: '初诊',
          },
          department:{
            department:"儿科"
          },
          doctor:'宁姚',
          updateTime: '1996-12-25 12:57:55'
        },
      ],
    }
  },
  methods: {},
  mounted() {

  }
}
</script>

<style scoped lang="less">

</style>

