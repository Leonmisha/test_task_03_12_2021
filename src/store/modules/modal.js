import API from '@/api'

import { STATUSES } from '../constants'

export default {
  namespaced: true,
  state: {
    modalVisible: false,
    openedPackage: null,
    status: STATUSES.NONE,
    currentRequest: null,
    errorMessage: null
  },
  mutations: {
    setModalVisible (state, modalVisible) {
      state.modalVisible = modalVisible
    },
    setStatus (state, status) {
      state.status = status
    },
    setPackage (state, packageObj) {
      state.openedPackage = packageObj
    },
    updatePackage (state, newParams) {
      state.openedPackage = {
        ...state.openedPackage,
        ...newParams
      }
    },
    setCurrentRequest (state, request) {
      state.currentRequest = request
    },
    setError (state, error) {
      state.errorMessage = error
    }
  },
  actions: {
    setModalVisible ({ commit }, modalVisible) {
      commit('setModalVisible', modalVisible)
    },
    openPackage ({ dispatch, getters, commit }, packageObj) {
      commit('setPackage', { ...packageObj })
      commit('setStatus', STATUSES.PENDING)
      commit('setError', null)
      dispatch('setModalVisible', true)
      const request = API.getPackageFiles(packageObj.name, packageObj.version)
      commit('setCurrentRequest', request)
      request.then(resp => {
        if (getters.currentRequest !== request) {
          return
        }
        commit('updatePackage', { files: resp.data.files })
        commit('setStatus', STATUSES.DONE)
      }).catch((err) => {
        commit('setStatus', STATUSES.ERROR)
        commit('setError', err.message)
      })
    }
  },
  getters: {
    currentRequest: state => state.currentRequest,
    openedPackage: state => state.openedPackage,
    modalVisible: state => state.modalVisible,
    status: state => state.status
  }
}
