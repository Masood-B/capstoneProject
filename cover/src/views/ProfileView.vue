<template>
    <div>
        <h1>My Account</h1>
        <div>
            <h2>Full Name</h2>
            {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
        </div>
        <div>
            <h2>Picture</h2>
            <img :src="$store.state.user?.userProfile" :alt="$store.state.user?.firstName">
        </div>
        <div>
            <h2>Email</h2>
            {{ $store.state.user?.userAdd }}
        </div>

        <div>
            <button>Setting</button>
        </div>
        <div>
            <button @click="logOut">Log Out</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            logOut(){
                this.$store.dispatch("logout")
            }
        },
        created(){
            const saveUser = localStorage.getItem("user")
            if (saveUser){
                this.user = JSON.parse(saveUser)
            }
            const data = JSON.parse(localStorage.getItem("user"))
            if (data){
                this.$store.commit("setUser", data)
            }
        }
    }
</script>

<style scoped>

</style>