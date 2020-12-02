<!-- 经营概况-->
<template>
  <sn-three-col-space>
    <div slot="spaceContent">
      <condition-first-row/>
      <condition-second-row/>
      <condition-third-row />
    </div>
  </sn-three-col-space>
</template>

<script>
import ConditionFirstRow from "@/views/home/children/manage_condition/children/ConditionFirstRow";
import ConditionSecondRow from "@/views/home/children/manage_condition/children/ConditionSecondRow";
import ConditionThirdRow from "@/views/home/children/manage_condition/children/ConditionThirdRow";
import {getAllSink} from "@/api/sinkInfo";

export default {
  name: "ManageCondition",
  components: {
    ConditionFirstRow,
    ConditionSecondRow,
    ConditionThirdRow,
  },
  data() {
    return {
      allSink: []
    }
  },
  methods: {
    // getAllSink() {
    //   getAllSink.then(result => {
    //     this.allSink = result
    //   })
    // }
  },
  mounted() {
    getAllSink().then(result =>{
      console.log(result);
    })
  }
}
</script>

<style scoped lang="less">

</style>

