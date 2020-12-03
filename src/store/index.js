import Vue from 'vue'
import Vuex from 'vuex'
import action from "@/store/action";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

Vue.use(Vuex)
const state = {
  homeTitle:[
    '经营概况','工作台','新开就诊'
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
