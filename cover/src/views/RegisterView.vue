<template>
    <div>
        <div class="container">
            <h1 class="display-1">Create</h1>
            <div class="form">
                <form class="form" @submit.prevent="registration">
                    <div class="name">
                        <label for="firstName">Name</label>
                        <input type="text"  placeholder="First Name" v-model="payload.firstName" required>
                    </div>
                    <div class="surname">
                        <label for="lastname">Surname</label>
                        <input type="text" placeholder="Last Name" v-model="payload.lastName" required>
                    </div>
                    <div class="gender">
                        <label for="gender">Gender</label>
                        <input type="text" placeholder="Gender" v-model="payload.gender" required>
                    </div>
                    <div class="Age">
                        <label for="Age">Age</label>
                        <input type="number" placeholder="Your Age" v-model="payload.userAge" required>
                    </div>
                    <div class="addemail">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email Address" v-model="payload.emailAdd" required>
                    </div>
                    <div class="pwd">
                        <label for="password">Password</label>
                        <input type="password" placeholder="Password" v-model="payload.userPass" required>
                    </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                </form>
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

</style>