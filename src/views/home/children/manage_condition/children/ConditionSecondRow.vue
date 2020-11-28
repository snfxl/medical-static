<template>
  <el-row :gutter="10" class="second-row">
    <el-col :span="18">
      <el-card class="box-card">
        <div>
          <span class="change-show-chart">
            <el-button round class="button-seven" :style="activeStyleSeven" @click="changeToSeven">
              <span>
                近7天
              </span>
            </el-button>
            <el-button round class="button-thirty" :style="activeStyleThirty" @click="changeToThirty">
              <span>
                近30天
              </span>
            </el-button>
          </span>
        </div>
        <line-chart v-if="chooseSeven"/>
        <line-chart-month v-if="chooseThirty"/>
      </el-card>
    </el-col>
    <el-col :span="6" class="pie-right">
      <el-card class="box-card">
        <pie/>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import LineChart from "@/views/home/children/manage_condition/children/LineChart";
import Pie from "@/views/home/children/manage_condition/children/Pie";
import LineChartMonth from "@/views/home/children/manage_condition/children/LineChartMonth";

export default {
  data() {
    return {
      chooseSeven: true,
      chooseThirty: false
    }
  },
  components: {
    LineChart, Pie, LineChartMonth
  },
  methods: {
    changeToSeven() {
      this.chooseSeven = true
      this.chooseThirty = false
    },
    changeToThirty() {
      this.chooseSeven = false
      this.chooseThirty = true
    }
  },
  computed: {
    activeStyleSeven() {
      if (this.chooseSeven) {
        return {
          'background-color': '#FF6262',
          'color': '#fff'
        }
      }
    },
    activeStyleThirty() {
      if (this.chooseThirty) {
        return {
          'background-color': '#FF6262',
          'color': '#fff'
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.second-row {
  padding-left: 40px;
  padding-right: 34px;

  .box-card {
    margin-right: 10px;
  }
}

.change-show-chart {
  float: right;
  margin-right: 20px;

  .el-button {
    font-size: 10px;
    height: 5px;
    width: 60px;

    span {
      position: relative;
      bottom: 5px;
      right: 10px;
    }
  }

}
</style>