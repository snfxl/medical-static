<template>
  <sn-card-with-title class="margin-top-20">
    <about-family-title slot="title"/>
    <about-family-table slot="content"/>
  </sn-card-with-title>
</template>

<script>
import AboutFamilyTable from "@/views/home/children/sick_manage/edit_sick_children/family/children/AboutFamilyTable";
import AboutFamilyTitle from "@/views/home/children/sick_manage/edit_sick_children/family/children/AboutFamilyTitle";

export default {
  name: "PersonInfoAboutFamily",

  components: {
    AboutFamilyTable,
    AboutFamilyTitle
  }
}
</script>

<style scoped>

</style>