import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:4000'
})

const store = new Vuex.Store({
  state: {
    articles: [],
    article: {}
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    },
    setArticle (state, payload) {
      state.article = payload
    },
    setNewArticles (state, payload) {
      state.articles.push(payload)
    }
  },
  actions: {
    getArticles ({commit}) {
      http.get('/articles')
      .then(({data}) => {
        commit('setArticles', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getArticle ({commit}, id) {
      http.get('/articles/' + id)
      .then(({data}) => {
        commit('setArticle', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    addArticles ({commit}) {
      http.post('/articles')
      .then(({data}) => {
        commit('setNewArticles', data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})

export default store
