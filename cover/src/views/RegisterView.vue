<template>
    <div>
        <div class="productDisplay">

        
        <div class="container">
            <h1 class="display-1">Create</h1>
            <div class="form">
                <form class="form" @submit.prevent="registration">
                    <div class="mb-3">
                        <label for="firstName" class="form-label">Name</label>
                        <input type="text" id="firstName" class="form-control" placeholder="First Name" v-model="payload.firstName" required>
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Last Name</label>
                        <input type="text" id="lastname" class="form-control" placeholder="Last Name" v-model="payload.lastName" required>
                    </div>
                    <div class="mb-3">
                        <label for="gender" class="form-label">Gender</label>
                        <input type="text" id="gender" class="form-control" placeholder="Gender" v-model="payload.gender" required>
                    </div>
                    <div class="mb-3">
                        <label for="Age" class="form-label">Age</label>
                        <input type="number" id="Age" class="form-control" placeholder="Your Age" v-model="payload.userAge" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" class="form-control" placeholder="Email Address" v-model="payload.emailAdd" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Password" v-model="payload.userPass" required>
                    </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                payload: {
                    firstName: "",
                    lastName: "",
                    gender: "",
                    userAge: null,
                    emailAdd: "",
                    userPass: "",
                    userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png"
                }
            }
        },
        methods: {
            registration() {
                this.$store.dispatch('addUser', this.payload)
            }
        }
    }
</script>

<style scoped>
.productDisplay {
    display: flex;
    flex-direction: column;
    min-height: 76.3vh;
  }
  
  .footer {
    margin-top: auto;
    flex-shrink: 0; 
  }
</style>