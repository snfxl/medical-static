<template>
  <div>
    <el-dropdown trigger="click" size="medium"
                 split-button type="primary" class="sn-dropdown">
      <div>
        <slot name="title"/>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in downData" @click="addTab(item)">
          <el-button
              size="small"
              @click="addTab(item)">
            {{ item }}
          </el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
          v-for="(item, index) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name">
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SnText from "@/components/common/text/SnText";

export default {
  name: "DownHasTabs",
  components: {
    SnText
  },
  props: {
    downData: {
      type: Array,
      default: ['全部', '待接诊', '接诊中', '已完成']
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
        content: 'New Tab content'
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
.sn-dropdown {
  margin-right: 30px;
  margin-top: 5px;

}

/deep/ .el-button--primary {
  background-color: #66D4A2;
}

.el-dropdown-menu__item {
  width: 90px;
  padding-left: 20px;
}

span {
  position: relative;
  left: 20px;
}

</style>