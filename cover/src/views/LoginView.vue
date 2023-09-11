<template>
    <div>
        <div class="container">
            <h1 class="display-1">Login</h1>
                <form class="form" @submit.prevent="login">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" v-model="payload.emailAdd" required>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password" minlength="4" v-model="payload.userPass" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                    <div>
                        <router-link to="#">Forgot your password</router-link> |
                        <router-link to="/register">Create a account</router-link>
                    </div>
                  </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                payload: {
                    emailAdd: "",
                    userPass: ""
                }
            }
        },
        methods:{
            login(){
                this.$store.dispatch('login', this.payload)
            }
        },
        beforeCreate(){
            this.$store.dispatch('fetchUsers')
        }
    };
</script>

<style scoped>

</style>