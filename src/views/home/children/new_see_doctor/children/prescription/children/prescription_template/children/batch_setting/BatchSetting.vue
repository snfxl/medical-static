<template>
  <div class="to-flex">
    <sn-text text="批量操作" class="margin-right move-down"/>
    <BatchSettingDialog :button-description="hasChooseButtonName" :table-data="batchSettingDialogData" class="margin-right"/>
    <BatchSettingDialog :button-description="notChooseButtonName" :table-data="batchSettingDialogData"/>
  </div>
</template>

<script>
import BatchSettingDialog
  from "@/views/home/children/new_see_doctor/children/prescription/children/prescription_template/children/batch_setting/BatchSettingDialog";

export default {
  components: {
    BatchSettingDialog
  },
  data() {
    return {
      batchSettingDialogData: [
        {
          id: '1',
          groupId: '',
          name: '舒必利盖子',
          onceUse: '1',
          useMethod: '',
          frequency: '',
          days: '',
          total: '10',
          price: '6.00',
          remove: ''
        },
      ]
    }
  },
  props: {
    hasChooseButtonName: {
      type:String,
      default:''
    },
    notChooseButtonName:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 4px;
}
</style>