import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const mangaUrl = 'https://capstoneproject-1ls3.onrender.com/'
import authUser from '../../services/AuthenticateUser'
const {cookies} = useCookies()

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
        sweet({
          title: "Error",
          text: "An error occurred",
          icon: "error",
          timer: 500
        })
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
    async addUser(context, payload){
      try{
        const {msg} = (await axios.post(`${mangaUrl}users`, payload)).data
        if(msg){
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 5000
          })
          context.dispatch('fetchUsers')
          router.push({name: 'login'})
        }else{
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 5000
          })
        }
      } catch(e){
        console.log(e);
      }
    },

    async addProduct(context, productData){
      try{
        const add = await axios.post(`${mangaUrl}products`, productData)
        context.commit("setAddProduct", add)
        context.commit("setProduct")
        // location.reload()
      }catch(e){
        // context.commit("setMsg", "An error occured")
        console.log(e);
      }
    },
    async login(context, payload){
      try{
        const {msg, token, result} = (await axios.post(`${mangaUrl}user`, payload)).data
        if (result) {
          context.commit(`setUsers`, {result, msg})
          cookies.set('LegitUser', {token, msg, result})
          authUser.applyToken(token)
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName}
            ${result?.lastName}`,
            icon: "success",
            timer: 500
          })
          router.push({name:'home'})
        }else{
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 500
          })
        }
    } catch(e){
      console.log(e);
    }
  }
},
  modules: {
  }
})
