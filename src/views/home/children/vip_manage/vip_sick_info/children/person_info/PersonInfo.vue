<template>
  <div>
    <person-base-info/>
    <person-info-about-family/>
  </div>
</template>

<script>
import PersonBaseInfo
  from "@/views/home/children/vip_manage/vip_sick_info/children/person_info/children/PersonBaseInfo";
import PersonInfoAboutFamily
  from "@/views/home/children/vip_manage/vip_sick_info/children/person_info/children/family/PersonInfoAboutFamily";

export default {
  name: "PersonInfo",
  components: {
    PersonBaseInfo,
    PersonInfoAboutFamily
  }
}
</script>

<style scoped>

</style>