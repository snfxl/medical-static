<template>
  <div>
    <el-button type="primary" size="mini" plain @click="dialogTableVisible = true">
      {{ buttonDescription }}
    </el-button>
    <el-dialog title="批量操作" width="55%" :visible.sync="dialogTableVisible">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          :header-cell-style="{
          'text-align':'center',
        }"
          :cell-style="{
          'text-align':'center',
        }">
        <el-table-column type="selection">
        </el-table-column>
        <el-table-column prop="groupId" label="组号">
          <template slot-scope="scope">
            <sn-select class="select" :select-data="groupIdData" :select-style="selectStyle"/>
          </template>
        </el-table-column>
        <el-table-column prop="onceUse" label="单次用量" width="145">
          <template slot-scope="scope">
            <div class="to-flex">
              <sn-input :input-value="tableData[scope.$index].onceUse" class="drug-add-table-input"/>
              <sn-select :select-data="onceUseUnit" :select-style="selectStyle"/>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="useMethod" label="用法" width="117">
          <template slot-scope="scope">
            <sn-select class="select" :select-data="useMethodData" :select-style="{'width':'105px'}"/>
          </template>
        </el-table-column>
        <el-table-column prop="frequency" label="频率" width="117">
          <template slot-scope="scope">
            <sn-select :select-data="frequencyData" :select-style="{'width':'105px'}"/>
          </template>
        </el-table-column>
        <el-table-column prop="days" label="天数">
          <template slot-scope="scope">
            <sn-select :select-data="daysData" :select-style="selectStyle"/>
          </template>
        </el-table-column>
        <el-table-column prop="total" label="总量" width="145">
          <template slot-scope="scope">
            <div class="to-flex">
              <sn-input :input-value="tableData[scope.$index].total" class="drug-add-table-input"/>
              <sn-select :select-data="totalUnitData" :select-style="selectStyle"/>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      multipleSelection: [],
      dialogTableVisible: false
    }
  },

  props: {
    buttonDescription: {
      type: String,
      default: ''
    },

    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    //选择器相关
    //供选择的分组
    groupIdData: {
      type: Array,
      default() {
        return [
          {
            value: 0,
            label: '1'
          },
          {
            value: 1,
            label: '2'
          },
          {
            value: 2,
            label: '3'
          },
          {
            value: 3,
            label: '4'
          },
          {
            value: 4,
            label: '5'
          },
          {
            value: 5,
            label: '6'
          },
          {
            value: 6,
            label: '7'
          },
        ]
      }
    },
    //供选择的使用方式
    useMethodData: {
      type: Array,
      default() {
        return [
          {
            value: 0,
            label: '口服'
          },
          {
            value: 1,
            label: '静脉注射'
          },
          {
            value: 2,
            label: '注射药物'
          },
          {
            value: 3,
            label: '检查'
          },
          {
            value: 4,
            label: '皮试'
          },
          {
            value: 5,
            label: '外用'
          },
          {
            value: 6,
            label: '雾化'
          },
        ]
      }
    },
    //供选择的频率
    frequencyData: {
      type: Array,
      default() {
        return [
          {
            value: 0,
            label: '一天1次'
          },
          {
            value: 1,
            label: '一天2次'
          },
          {
            value: 3,
            label: '一天3次'
          },
          {
            value: 4,
            label: '一天4次'
          },
          {
            value: 5,
            label: '2小时1次'
          },
          {
            value: 6,
            label: '4小时1次'
          },
          {
            value: 7,
            label: '6小时1次'
          },
        ]
      }
    },
    //供选择的天数
    daysData: {
      type: Array,
      default() {
        return [
          {
            value: 0,
            label: '1'
          },
          {
            value: 1,
            label: '2'
          },
          {
            value: 2,
            label: '3'
          },
          {
            value: 3,
            label: '4'
          },
          {
            value: 4,
            label: '5'
          },
          {
            value: 5,
            label: '6'
          },
          {
            value: 6,
            label: '7'
          },
        ]
      }
    },
    //供选择的总量的单位
    totalUnitData: {
      type: Array,
      default() {
        return [
          {
            value: 0,
            label: '瓶'
          },
          {
            value: 1,
            label: '盒'
          }
        ]
      }
    },
    //供选择的单次用量的单位
    onceUseUnit: {
      type: Array,
      default() {
        return [
          {
            value: 0,
            label: '片'
          },
          {
            value: 1,
            label: '颗'
          }
        ]
      }
    },

    //选择器数据
    selectData: {
      type: Array,
      default
          () {
        return []
      }
    },
    //选择器样式
    selectStyle: {
      type: Object,
      default() {
        return {
          'width': '100%'
        }
      }
    },

    //默认选中哪个
    toSelect: {
      type: Number,
      default: 1
    },
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style scoped>
.el-dialog__title {
  margin-top: 10px;
}
</style>