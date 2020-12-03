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
      <el-table-column prop="bodyPart" label="身体部位" width="145">
        <template slot-scope="scope">
          <div class="to-flex">
            <sn-input :input-value="tableData[scope.$index].bodyPart" class="drug-add-table-input"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="count" label="数量" width="100">
        <template slot-scope="scope">
          <div class="to-flex">
            <sn-input :input-value="tableData[scope.$index].bodyPart" class="drug-add-table-input margin-right"/>
            <sn-text text="次" class="move-down"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="checkType" label="检查类型" width="117">
        <template slot-scope="scope">
          <sn-select class="select" :select-data="checkTypeData" :select-style="{'width':'105px'}"/>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价" width="90">
        <template slot-scope="scope">
          <sn-input :input-value="tableData[scope.$index].price" class="drug-add-table-input"/>
        </template>
      </el-table-column>
      <el-table-column prop="totalPrice" label="金额" width="90">
        <template slot-scope="scope">
          <sn-input :input-value="tableData[scope.$index].totalPrice" class="drug-add-table-input"/>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" width="150">
        <template slot-scope="scope">
          <sn-input :input-value="tableData[scope.$index].remark" class="drug-add-table-input"/>
        </template>
      </el-table-column>
      <el-table-column prop="remove" label="移除" width="95">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" plain circle></el-button>
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
      //分组
      groupIdData: [
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
      ],
      //选择器相关
      inputStyle: {
        'padding': '0',
        'text-align': 'center',
      },
      //检查类型
      checkTypeData: [
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
      ],
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
    //选择器数据
    selectData: {
      type: Array,
      default() {
        return []
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
      default: 0
    },

    //默认显示的内容
    selectPlaceholder: {
      type: String,
      default: '请选择'
    },

    //表头字体大小
    headerCellFontSizeNumber: {
      type: Number,
      default: 14
    },

    //单元格字体大小
    cellFontSizeNumber: {
      type: Number,
      default: 8
    },

    //是否需要按钮
    hasAddButton: {
      type: Boolean,
      default: true
    },

    //添加按钮内容
    addTitle: {
      type: String,
      default: '添加'
    },

    //表格高度
    height: {
      type: String,
      default: '405'
    },

    //表格标题
    tableTitle: {
      type: Array,
      default() {
        return [];
      }
    },

    //表格数据
    tableData: {
      type: Array,
      default() {
        return [

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

.move-up {
  position: relative;
  bottom: 5px;
}

.move-down{
  position: relative;
  top: 12px;
}
</style>