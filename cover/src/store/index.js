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
    setDeleteUser(state, rusers){
      state.users = rusers
    },
    setAddUser(state, auser){
      state.users = auser
    },
    setUser(state, user){
      state.user = user
    },
    setProducts(state, products){
      state.products = products
    },
    setDeleteProduct(state, rproduct){
      state.products = rproduct
    },
    setAddProduct(state, aproduct){
      state.products = aproduct
    },
    setProduct(state, product){
      state.product = product
    },
    setMsg(state, msg){
      state.msg = msg
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
    },
    async deleteProduct(context, prodID){
      try{
        const remove = await axios.delete(`${mangaUrl}product/${prodID}`)
        context.commit("setDeleteProduct", remove)
        location.reload()
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    async deleteUser(context, userID){
      try{
        const remove = await axios.delete(`${mangaUrl}users/${userID}`)
        context.commit("setDeleteUser", remove)
        location.reload()
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    async addProduct(context, productData){
      try{
        const add = await axios.post(`${mangaUrl}products`, productData)
        context.commit("setAddProduct", add)
        context.commit("setProducts")
        // location.reload()
      }catch(e){
        // context.commit("setMsg", "An error occured")
        console.log(e);
      }
    }
  },
  modules: {
  }
})
