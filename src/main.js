import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import UserLogin from './components/UserLogin'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const store = {
  state: {
    products: [],
    detail : {},
    user : {}
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getDetail(state) {
      return state.detail
    },
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    setProducts(state, value) {
      state.products = value
    },
    setDetail(state, value) {
      state.detail = value
    },
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    handleProducts({ commit }) {
      Vue.axios.get('https://61922b19aeab5c0017105dfb.mockapi.io/product').then(resp => {
        commit('setProducts', resp.data)
      })
    },
    handleDetail({ commit }, value) {
      Vue.axios.get(`https://61922b19aeab5c0017105dfb.mockapi.io/product/${value}`).then(resp => {
        commit('setDetail', resp.data)
      })
    },
    handleUser({ commit }, obj) {
      Vue.axios.post('http://restapi.adequateshop.com/api/authaccount/login',obj).then(resp => {
        commit('setUser', resp.data)
      })
    }
  }
}

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/pdp',
    name: 'ProductDetail',
    component: ProductDetail
  }
]

Vue.config.productionTip = false

new Vue({
  store: new Vuex.Store(store),
  router: new VueRouter({
    routes,
    mode: 'history'
  }),
  render: h => h(App),
}).$mount('#app')
