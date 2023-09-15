<template>
    <div>
        <div class="loginDisplay">
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
                        <label>Dont have an account ?</label>
                        <router-link to="/register" class="custom-link"> Create a account</router-link>
                    </div>
                  </form>
        </div>
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
        },
        
    };
</script>

<style scoped>
.custom-link {
    text-decoration: none;
    color: black;
  }
h1, label{
color:white
  }
  .loginDisplay {
    display: flex;
    flex-direction: column;
    min-height: 77vh;
  }
  
  .footer {
    margin-top: auto;
    flex-shrink: 0; 
  }
</style>