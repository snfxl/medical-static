<!-- 挂号记录 -->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <registration-record-title slot="title"/>
      <div slot="content">
        <find-info-from-table/>
        <registration-info-table :table-data="allRegistrationInfoData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>

</template>
<script>
import RegistrationRecordTitle
  from "@/views/home/children/registration_manage/registration_record/children/RegistrationRecordTitle";
import FindInfoFromTable
  from "@/views/home/children/registration_manage/registration_record/children/FindInfoFromTable";
import RegistrationInfoTable
  from "@/views/home/children/registration_manage/registration_record/children/RegistrationInfoTable";

export default {
  name: "RegistrationRecord",
  components: {
    RegistrationRecordTitle,
    FindInfoFromTable,
    RegistrationInfoTable
  },
  data() {
    return {
      allRegistrationInfoData: [
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '已就诊',
        },
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '未就诊',
        },
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '未就诊',
        },
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '未就诊',
        },
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '未就诊',
        },
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '未就诊',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>