<template>
  <div class="margin-bottom-20">
    <!-- 点击出现弹出框的链接 -->
    <el-button
        @click="dialogNewAddVipVisible = true"
        type="success"
        :underline="false"
        class="margin-right">
      <sn-text text="新增会员类型"/>
    </el-button>
    <!-- 弹出框 -->
    <el-dialog
        width="40%"
        :visible.sync="dialogNewAddVipVisible">
      <!-- 标题 -->
      <sn-text
          class="text-left margin-bottom"
          text="新增会员类型"
          slot="title"
          :font-size="18"
          font-weight="bold"/>

      <div>
        <!-- 第一行 -->
        <sn-row-has-two-col :left="12" :right="12" class="margin-bottom">
          <div slot="one-col">
            <sn-input>
              <sn-must-text text="会员等级" slot="title"/>
            </sn-input>
          </div>
          <div slot="two-col">
            <sn-input>
              <sn-must-text text="会员名称" slot="title"/>
            </sn-input>
          </div>
        </sn-row-has-two-col>
        <!-- 第二行 -->
        <sn-row-has-two-col :left="12" :right="12" class="margin-bottom">
          <div slot="one-col">
            <sn-input>
              <sn-must-text text="会员折扣" slot="title"/>
            </sn-input>
          </div>

          <div slot="two-col">
            <sn-input>
              <sn-must-text text="最低消费积分" slot="title"/>
            </sn-input>
          </div>
        </sn-row-has-two-col>
        <!-- 第三行 -->
        <sn-row-has-two-col :left="12" :right="12" class="margin-bottom">
          <div slot="one-col">
            <sn-input>
              <sn-must-text text="升级所用积分" slot="title"/>
            </sn-input>
          </div>

          <div slot="two-col" class="to-flex move-down">
            <sn-text text="状态 :" class="margin-right" :move-down="7"/>
            <el-switch v-model="vipStatus" class="move-down-little"/>
          </div>
        </sn-row-has-two-col>
        <!-- 第四行 -->
        <sn-row-has-two-col :left="24" :right="0">
          <div slot="one-col">
            <sn-input>
              <sn-text text="备注" slot="title"/>
            </sn-input>
          </div>
        </sn-row-has-two-col>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogNewAddVipVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogNewAddVipVisible = false">
          <sn-text text="确定"/>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "NewAddVipTypeDialog",
  data() {
    return {
      dialogNewAddVipVisible: false,
      vipStatus: true
    }
  },
}
</script>

<style scoped>
.move-down{
  position: relative;
  top: 35px;
}
.move-down-little{
  position: relative;
  top: 5px;
}
</style>