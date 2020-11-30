<!-- 工作空间-->
<template>
  <sn-three-col-space class="workspace">
    <div slot="spaceContent">
      <workspace-top-bar/>
      <div class="text item">
        <workspace-row v-for="i in 3">
        </workspace-row>
        <sn-page class="sn-page"/>
      </div>
    </div>
  </sn-three-col-space>
</template>

<script>
import WorkspaceRow from "@/views/home/children/workspace/children/WorkspaceRow";
import WorkspaceTopBar from "@/views/home/children/workspace/children/WorkspaceTopBar";

export default {
  name: "WorkSpace",
  components: {
    WorkspaceRow,
    WorkspaceTopBar,
  }
}
</script>

<style scoped lang="less">
.workspace {
  .sn-page {
    text-align: center;
    margin-top: 20px;
  }
}
</style>

