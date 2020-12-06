<template>
  <sn-three-col-space>
    <div slot="spaceContent">

      <edit-sick-title/>

      <edit-sick-info/>

      <edit-sick-about-family/>
    </div>
  </sn-three-col-space>
</template>

<script>
import EditSickTitle from "@/views/home/children/sick_manage/edit_sick_children/EditSickTitle";
import EditSickInfo from "@/views/home/children/sick_manage/edit_sick_children/EditSickInfo";
import EditSickAboutFamily from "@/views/home/children/sick_manage/edit_sick_children/family/EditSickAboutFamily";

export default {
  name: "EditSick",
  components: {
    EditSickTitle,
    EditSickInfo,
    EditSickAboutFamily
  }
}
</script>

<style scoped>

</style>