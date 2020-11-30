<template>
  <el-card class="box-card workspace-item">
    <el-row :gutter="10" class="workspace-item-info">
      <el-col :span="4" class="head-picture-col">
        <SnImageInCircle :img-src="sick.image" class="head-picture"/>
      </el-col>
      <el-col :span="17">
        <div class="workspace-item-first-row">
          <span class="name">{{ sick.name }}</span>
          <span class="vip">{{ sick.vip }}</span>
          <span class="sex">{{ sick.sex }}</span>
          <span class="age">{{ sick.age }}</span>
          <span :style="getBackgroundColor" class="status">
            {{ sick.status }}
          </span>
        </div>
        <div class="workspace-item-second-row">
          <span>创建时间 : </span>
          <span>{{ sick.createTime }}</span>
        </div>
        <div class="workspace-item-third-row">
          <span>科室 : </span>
          <span class="department">{{ sick.department }}</span>
          <span>医生 : </span>
          <span>{{ sick.doctor }}</span>
        </div>
        <div class="workspace-item-fourth-row">
          <span>手机号码 : </span>
          <span>{{ sick.phoneNumber }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="workspace-item-buttons">
      <el-col :span="12">
        <el-button>
          <span class="left">
            接诊
          </span>
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-button>
          <span class="right">
            查看患者信息
          </span>
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "WorkspaceItem",
  data() {
    return {}
  },
  props: {
    sick: {
      type: Object,
      default() {
        return {
          status: '待接诊',
          name: '师楠',
          sex: '男',
          age: '22',
          phoneNumber: '123456789',
          clinicType: '初诊',
          department: '内科',
          doctor: '李进',
          createTime: '2019-11-12 12:08:12',
          image: require('@/assets/image/home/workspace/headPicture.png'),
          vip: 'VIP3'
        }
      }
    },
    backgroundColor: {
      type: String,
      default: '#FF6262'
    }
  },
  computed: {
    getBackgroundColor() {
      return {
        'background-color': this.backgroundColor,
        'color': '#fff'
      }
    }
  }
}
</script>

<style scoped lang="less">
.workspace-item {
  margin-right: 15px;
  margin-left: 15px;
  height: 280px/1.25;
  margin-top: 20px;
  padding: 0;

  .workspace-item-info {
    margin-bottom: 20px;

    .head-picture-col {
      margin-right: 35px;

      .head-picture {
        margin-top: 20px;
      }
    }

    .workspace-item-first-row {
      margin-bottom: 14px;

      .name {
        margin-right: 20px;
        font-size: 18px;
        font-weight: bold;
      }

      .vip {
        margin-right: 20px;
        font-weight: bold;
        color: #FFC71C;
        font-style: italic;
        font-size: 14px;
      }

      .sex {
        margin-right: 10px;
        color: #999999;
        font-size: 14px;
      }

      .age {
        color: #999999;
        font-size: 14px;
      }

      .status {
        float: right;
        height: 20px;
        text-align: center;
        width: 60px;
        font-size: 12px;
        line-height: 20px;
        border-radius: 10px;
      }
    }

    .workspace-item-second-row {
      font-size: 14px;
      color: #999;
      margin-bottom: 14px;
    }

    .workspace-item-third-row {
      font-size: 14px;
      color: #999;
      margin-bottom: 14px;

      .department {
        margin-right: 30px;
      }
    }

    .workspace-item-fourth-row {
      font-size: 14px;
      color: #999;
      margin-bottom: 14px;
    }
  }

  .workspace-item-buttons {
    border-top: #F2F2F2 2px solid;

    .el-button {
      border: transparent;
      width: 210px;
      height: 55px;
      span{
        position: relative;
        right: 12px;
        bottom: 5px;
      }
      .left{
        color: plum;
      }
      .right{
        color: #66D4A2;
      }
    }
  }

  /deep/ .el-card__body {
    padding: 30px 0 0 0;
  }

}
</style>