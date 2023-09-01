import { createStore } from 'vuex'
import axios from 'axios'
const mangaUrl = 'https://capstoneproject-1ls3.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
    }

  },
  actions: {
    async fetchProducts(context){
      try{
        const {data} = await axios.get(`${mangaUrl}products`)
        context.commit("setProducts", data.results)
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    async fetchUsers(context){
      try{
        const {data} = await axios.get(`${mangaUrl}users`)
        context.commit("setUsers", data.results)
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    }
  },
  modules: {
  }
})
