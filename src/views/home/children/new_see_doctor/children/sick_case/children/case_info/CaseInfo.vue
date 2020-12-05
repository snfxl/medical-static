<template>
  <div>
    <sn-title
        title="病例信息"
        :title-style="{'color':'#40B6FF'}" class="to-flex">
      <sn-text
          text="( 病例信息可在系统设置-基础设置中的自定义设置 )"
          class="margin-left"
          slot="other"
          font-color="#40B6FF"/>
    </sn-title>
    <case-info-first-row/>
    <case-info-row left-description="现病史" right-description="既往史" class="margin-top-20"/>
    <case-info-row left-description="过敏史" right-description="个人史" class="margin-top-20"/>
    <case-info-row left-description="家族史" right-description="辅助检查" class="margin-top-20"/>
    <case-info-row left-description="治疗意见" right-description="备注" class="margin-top-20"/>
  </div>
</template>

<script>
import CaseInfoFirstRow
  from "@/views/home/children/new_see_doctor/children/sick_case/children/case_info/children/CaseInfoFirstRow";
import CaseInfoRow
  from "@/views/home/children/new_see_doctor/children/sick_case/children/case_info/children/CaseInfoRow";

export default {
  name: "CaseInfo",
  components: {
    CaseInfoFirstRow,
    CaseInfoRow
  }
}
</script>

<style scoped>

</style>