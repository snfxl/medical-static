<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :header-cell-style="{
          'text-align':'center',
          'font-size': this.headerCellFontSize
        }"
        :cell-style="{
          'text-align':'center',
          'font-size': this.cellFontSize
        }"
        :height="height">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="groupId" label="组号">
        <template slot-scope="scope">
          <sn-select class="select" :select-data="groupIdData" :select-style="selectStyle"/>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称"/>
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
      <el-table-column prop="price" label="单价" width="90">
        <template slot-scope="scope">
          <sn-input :input-value="tableData[scope.$index].price" class="drug-add-table-input"/>
        </template>
      </el-table-column>
      <el-table-column prop="remove" label="移除" width="95px">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" plain circle ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px;float: left;margin-bottom: 10px" v-if="hasAddButton">
      <el-button type="primary" plain @click="addSelection()">{{ addTitle }}</el-button>
    </div>
    <div style="margin-top: 20px;float: right;margin-bottom: 10px">
      <el-button type="danger" plain @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      inputStyle: {
        'padding': '0',
        'text-align': 'center',
      }
    }
  },
  computed: {
    headerCellFontSize() {
      return this.headerCellFontSizeNumber + 'px'
    },
    cellFontSize() {
      return this.cellFontSizeNumber + 'px'
    }
  },

  props: {
    //选择器相关
    //供选择的分组
    groupIdData: {
      type: Array,
      default
          () {
        return [
          {
            value: 1,
            label: '1'
          },
          {
            value: 2,
            label: '2'
          },
          {
            value: 3,
            label: '3'
          },
          {
            value: 4,
            label: '4'
          },
          {
            value: 5,
            label: '5'
          },
          {
            value: 6,
            label: '6'
          },
          {
            value: 7,
            label: '7'
          },
        ]
      }
    },
    //供选择的使用方式
    useMethodData: {
      type: Array,
      default
          () {
        return [
          {
            value: 1,
            label: '口服'
          },
          {
            value: 2,
            label: '静脉注射'
          },
          {
            value: 3,
            label: '注射药物'
          },
          {
            value: 4,
            label: '检查'
          },
          {
            value: 5,
            label: '皮试'
          },
          {
            value: 6,
            label: '外用'
          },
          {
            value: 7,
            label: '雾化'
          },
        ]
      }
    },
    //供选择的频率
    frequencyData: {
      type: Array,
      default
          () {
        return [
          {
            value: 1,
            label: '一天1次'
          },
          {
            value: 2,
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
      default
          () {
        return [
          {
            value: 1,
            label: '1'
          },
          {
            value: 2,
            label: '2'
          },
          {
            value: 3,
            label: '3'
          },
          {
            value: 4,
            label: '4'
          },
          {
            value: 5,
            label: '5'
          },
          {
            value: 6,
            label: '6'
          },
          {
            value: 7,
            label: '7'
          },
        ]
      }
    },
    //供选择的总量的单位
    totalUnitData: {
      type: Array,
      default
          () {
        return [
          {
            value: 1,
            label: '瓶'
          },
          {
            value: 2,
            label: '盒'
          }
        ]
      }
    },
    //供选择的单次用量的单位
    onceUseUnit: {
      type: Array,
      default
          () {
        return [
          {
            value: 1,
            label: '片'
          },
          {
            value: 2,
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
        return [
          {
            value: 1,
            label: '1'
          }
        ]
      }
    },
    //选择器样式
    selectStyle: {
      type: Object,
      default
          () {
        return {
          'width': '100%'
        }
      }
    },

    //默认选中哪个
    toSelect: {
      type: Number,
      default:
          1
    },

    //默认显示的内容
    selectPlaceholder: {
      type: String,
      default:
          '请选择'
    },

    //表头字体大小
    headerCellFontSizeNumber: {
      type: Number,
      default:
          14
    },

    //单元格字体大小
    cellFontSizeNumber: {
      type: Number,
      default:
          8
    },

    //是否需要按钮
    hasAddButton: {
      type: Boolean,
      default:
          true
    },

    //添加按钮内容
    addTitle: {
      type: String,
      default:
          '添加'
    },

    //表格高度
    height: {
      type: String,
      default: '405'
    },

    //表格标题
    tableTitle: {
      type: Array,
      default
          () {
        return [
          {
            prop: 'date',
            label: '日期',
          },
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ];
      }
    },

    //表格数据
    tableData: {
      type: Array,
      default
          () {
        return [
          {
            id: '1',
            groupId: '',
            name: 'aaaaaaaaaaaaaaaaaaaaaaaaaa',
            onceUse: '1',
            useMethod: '',
            frequency: '',
            days: '',
            total: '10',
            price: '6.00',
            remove: ''
          },
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
    }
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
    },
    addSelection() {

    }
  }
}
</script>

<style scoped>
.select {
  position: relative;
  bottom: 7px;
}

.drug-add-table-input {
  position: relative;
  bottom: 7px;
}

.move-up{
  position: relative;
  bottom: 5px;
}
</style>