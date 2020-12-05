<template>
  <div class="text-right margin-bottom">
    <el-button type="danger" plain @click="dialogFormVisible = true">
      <sn-text text="收费"/>
    </el-button>
    <el-dialog title="收费" class="text-left" :visible.sync="dialogFormVisible">
      <el-form :model="form">

        <!-- 应收金额 -->
        <sn-flex-appoint-element :element-count="2">
          <el-form-item label="应收金额" :label-width="formLabelWidth" :slot="1">
            <el-input v-model="form.needMoney" :disabled="true" autocomplete="off"></el-input>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 优惠金额 -->
        <sn-flex-appoint-element :element-count="4">
          <el-form-item label="优惠金额" :label-width="formLabelWidth" :slot="1">
            <el-input-number v-model="form.discountsMoney"
                             controls-position="right"
                             @change="handleChange"
                             :min="0">

            </el-input-number>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>

          <!-- 折扣 -->
          <el-form-item label="折扣" :label-width="formLabelWidth" :slot="3">
            <el-input-number v-model="form.discount"
                             controls-position="right"
                             @change="handleChange"
                             :min="1"
                             :max="10">

            </el-input-number>
          </el-form-item>
          <sn-text text="折" :slot="4" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 医保支付 -->
        <sn-flex-appoint-element :element-count="2">
          <el-form-item label="医保支付" :label-width="formLabelWidth" :slot="1">
            <el-input-number v-model="form.medicalInsurancePay"
                             controls-position="right"
                             @change="handleChange"
                             :min="0">

            </el-input-number>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 实收金额 -->
        <sn-flex-appoint-element :element-count="2">
          <el-form-item label="实收金额" :label-width="formLabelWidth" :slot="1">
            <el-input-number v-model="form.actualMoney"
                             controls-position="right"
                             @change="handleChange"
                             :min="0">

            </el-input-number>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 找零 -->
        <sn-flex-appoint-element :element-count="2">
          <el-form-item label="找零" :label-width="formLabelWidth" :slot="1">
            <el-input v-model="getChange" :disabled="true" autocomplete="off"></el-input>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 支付方式 -->
        <el-form-item label="支付方式" :label-width="formLabelWidth">
          <el-radio v-model="form.payMethod" label="0">现金</el-radio>
          <el-radio v-model="form.payMethod" label="1">支付宝</el-radio>
          <el-radio v-model="form.payMethod" label="2">微信</el-radio>
          <el-radio v-model="form.payMethod" label="3">银行卡</el-radio>
          <el-radio v-model="form.payMethod" label="4">会员卡</el-radio>
        </el-form-item>

        <!-- 收款备注 -->
        <el-form-item label="收款备注" :label-width="formLabelWidth">
          <sn-input class="move-up"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        medicalInsurancePay: 50.23,// 医保支付
        discount: 1, //折扣
        discountsMoney: 12, //优惠金额
        needMoney: 100.55, //应付金额
        actualMoney: 200.22, //实收金额
        payMethod:'1',//支付方式
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleChange(value) {

    }
  },
  computed: {
    getChange() {
      return this.form.actualMoney - (this.form.needMoney - this.form.discountsMoney - this.form.medicalInsurancePay)
    }
  }
};
</script>

<style scoped>
/deep/ .el-button {
  width: 100px;
}

.move-down {
  position: relative;
  top: 12px;
}

.move-up{
  position: relative;
  bottom: 10px;
}
/deep/ .el-dialog__body{
  padding-bottom: 0;
}
</style>