import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getter'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug, // 严格模式看调试，上线不建议使用，占用性能
  plugins: debug ? [createLogger()] : []
})
