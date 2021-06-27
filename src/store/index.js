import Vue from 'vue'
import Vuex from 'vuex'
import solid from './modules/solid'
import booklice from './modules/booklice'

Vue.use(Vuex)

export default new Vuex.Store({
  //plugins: [IdbPlugin],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { solid, booklice
  }
})
