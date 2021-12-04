import Vue from 'vue'
import Vuex from 'vuex'

import search from './modules/search'
import modal from './modules/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search,
    modal
  }
})
