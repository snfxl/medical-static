<template>
  <div :style="{'margin-top':'20px'}">
    <el-dropdown trigger="click"
                 size="medium"
                 split-button
                 type="warning" round>
      <div>
        <slot name="title"/>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in downData" @click="addTab(item)">
          <span
              @click="addTab(item)">
            {{ item }}
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
          v-for="(item, index) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name">
        <west-prescription v-if="item.content === '西/成药处方'"/>
        <center-prescription v-if="item.content === '中药处方'"/>
        <check-item-prescription v-if="item.content === '检查项目'"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import WestPrescription from "@/views/home/children/new_see_doctor/children/prescription/children/WestPrescription";
import CenterPrescription from "@/views/home/children/new_see_doctor/children/prescription/children/CenterPrescription";
import CheckItemPrescription
  from "@/views/home/children/new_see_doctor/children/prescription/children/CheckItemPrescription";

export default {
  name: "DownHasTabs",
  components: {
    WestPrescription,
    CenterPrescription,
    CheckItemPrescription
  },
  props: {
    downData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      editableTabsValue: '0',
      editableTabs: [],
      tabIndex: 0
    }
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        title: targetName,
        name: newTabName,
        content: targetName
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
}
</script>

<style scoped>
</style>