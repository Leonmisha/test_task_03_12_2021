import API from '@/api'

import { STATUSES } from '../constants'

export default {
  namespaced: true,
  state: {
    queryString: '',
    currentPage: 1,
    pages: 0,
    resultsPerPage: 10,
    results: [],
    status: STATUSES.NONE,
    currentRequest: null
  },
  mutations: {
    setQueryString (state, queryString) {
      state.queryString = queryString
    },
    setStatus (state, status) {
      state.status = status
    },
    setResults (state, { pages, results }) {
      state.pages = pages
      state.results = results
    },
    setCurrentRequest (state, request) {
      state.currentRequest = request
    },
    setCurrentPage (state, page) {
      state.currentPage = page
    }
  },
  actions: {
    getListSearch ({ commit, getters }) {
      commit('setStatus', STATUSES.PENDING)
      const request = API.getListSearch(getters.queryString, getters.currentPage - 1, getters.resultsPerPage)
      commit('setCurrentRequest', request)
      request.then(({ nbPages: pages, hits: results }) => {
        if (getters.currentRequest !== request) {
          return
        }
        commit('setResults', { pages, results })
        commit('setStatus', STATUSES.DONE)
      }).catch(() => {
        if (getters.currentRequest !== request) {
          return
        }
        commit('setStatus', STATUSES.ERROR)
      })
    },
    setQueryString ({ commit }, queryString) {
      commit('setQueryString', queryString)
      commit('setCurrentPage', 1)
    },
    changePage ({ commit, dispatch }, page) {
      commit('setCurrentPage', page)
      return dispatch('getListSearch')
    }
  },
  getters: {
    queryString: state => state.queryString,
    currentPage: state => state.currentPage,
    status: state => state.status,
    results: state => state.results,
    currentRequest: state => state.currentRequest,
    pages: state => state.pages,
    resultsPerPage: state => state.resultsPerPage
  }
}
