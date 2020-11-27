import Vue from 'vue'
import Vuex from 'vuex'
import action from "@/store/action";
import getters from "@/store/getters";
import mutation from "@/store/mutation";

Vue.use(Vuex)
const state = {
  homeTitle: '经营概况',
  user:{
    username:"忆生"
  }
}

export default new Vuex.Store({

  modules: {},
  state,
  mutation,
  action,
  getters
})
