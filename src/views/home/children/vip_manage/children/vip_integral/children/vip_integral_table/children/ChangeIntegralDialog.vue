<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogChangeIntegralVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="变动积分"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="25%"
        :visible.sync="dialogChangeIntegralVisible">
      <!-- 标题 -->
      <sn-text
          class="text-left"
          text="变动积分"
          slot="title"
          :font-size="18"
          font-weight="bold"/>
      <div>
        <!-- 个人基本信息 -->
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text text="56512316551"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text text="宁姚"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="目前积分 :" class="margin-right"/>
          <sn-text text="2010" font-color="orange" font-weight="bold"/>
        </div>

        <!-- 变动积分按钮 -->
        <sn-show-by-button-no-card
            :button-names="integralButtonNames"
            @getCurrentClickButtonName="getCurrentClickButtonName"
            :button-count="3"
            :content-count="3"
            class="margin-top">
          <sn-text slot="buttonName0" text="增加积分"/>
          <sn-text slot="buttonName1" text="扣减积分"/>
          <sn-text slot="buttonName2" text="积分清零"/>

          <!-- 增加积分 -->
          <div slot="content0" class="margin-top text-left">
            <sn-input>
              <sn-must-text slot="title" text="增加数量"/>
            </sn-input>
            <sn-input
                :input-style="{'height':'80px'}"
                class="margin-top">
              <sn-text slot="title" text="备注"/>
            </sn-input>
          </div>
          <!-- 扣减积分 -->
          <div slot="content1" class="margin-top text-left">
            <sn-input>
              <sn-must-text slot="title" text="扣减数量"/>
            </sn-input>
            <sn-input
                :input-style="{'height':'80px'}"
                class="margin-top">
              <sn-text slot="title" text="备注"/>
            </sn-input>
          </div>
          <!-- 积分清零 -->
          <div slot="content2" class="margin-top text-left">
            <sn-input
                :input-style="{'height':'80px'}"
                class="margin-top">
              <sn-text slot="title" text="备注"/>
            </sn-input>
            <div class="to-flex margin-top">
              <sn-text
                  text="*"
                  class="margin-right"
                  font-color="pink"
                  :font-size="20"/>
              <sn-text text="清零后无法恢复,请谨慎操作"/>
            </div>
          </div>
        </sn-show-by-button-no-card>

      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeIntegralVisible = false">取 消</el-button>

        <!-- 确定增加积分按钮 -->
        <el-button type="primary"
                   v-if="currentClickButtonName === '增加积分'"
                   @click="dialogChangeIntegralVisible = false">
          <sn-text text="确定"/>
        </el-button>
        <!-- 确定扣减积分按钮 -->
        <el-button type="primary"
                   v-if="currentClickButtonName === '扣减积分'"
                   @click="dialogChangeIntegralVisible = false">
          <sn-text text="确定"/>
        </el-button>
        <!-- 确定清空积分按钮 -->
        <el-button type="primary"
                   v-if="currentClickButtonName === '积分清零'"
                   @click="dialogChangeIntegralVisible = false">
          <sn-text text="确定"/>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ChangeIntegral",
  data() {
    return {
      dialogChangeIntegralVisible: false,
      integralButtonNames: ['增加积分', '扣减积分', '积分清零'],
      currentClickButtonName: '增加积分'
    }
  },
  methods: {
    getCurrentClickButtonName(buttonName) {
      this.currentClickButtonName = buttonName
    }
  },
}
</script>

<style scoped>

</style>