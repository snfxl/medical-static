<!-- 患者管理-->
<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <sick-manage-title slot="title"/>
      <div slot="content">
        <sick-manage-find-info-bar/>
        <sick-manage-table
            :table-data="sickManageTableData"/>
      </div>
    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
import SickManageTitle from "@/views/home/children/sick_manage/sick_manage_children/SickManageTitle";
import SickManageFindInfoBar from "@/views/home/children/sick_manage/sick_manage_children/SickManageFindInfoBar";
import SickManageTable from "@/views/home/children/sick_manage/sick_manage_children/SickManageTable";

export default {
  name: "SinkPersonManage",
  components: {
    SickManageTitle,
    SickManageFindInfoBar,
    SickManageTable
  },
  data() {
    return {
      sickManageTableData: [
        {
          id: 1,
          sickId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          vipGrade:'vip2',
          createDate: '1996-12-25 12:05:12',
          meetDoctor:'陈平安',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>