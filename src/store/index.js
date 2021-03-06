import Vue from 'vue'
import Vuex from 'vuex'
import action from "@/store/action";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

Vue.use(Vuex)
const state = {
  homeTitle: [
    '经营概况', '工作台', '新开就诊',
    '新增挂号', '挂号记录', '药品零售',
    '收费管理', '患者管理', '药品信息维护',
    '入库管理', '出库管理', '库存管理',
    '库存盘点', '药品调价', '会员管理',
    '药品统计', '收费统计', '患者统计',
    '检查项目统计',
    '基础设置','费用设置',
    '模板维护','供应商管理','检查项目设置',
    '员工管理','字典表维护','诊所信息维护'
  ],
  user: {
    username: "忆生"
  },
  cellCenter: {
    'text-align': 'center',
  }
}

export default new Vuex.Store({

  modules: {},
  state,
  mutations,
  action,
  getters
})
