<template>
    <div>
        <div class="container">
            <h1 class="display-1">Login</h1>
            <div class="form">
                <form action="">
                    <div class="email">
                        <label for="">Email</label>
                        <input type="email">
                    </div>
                    <div class="password">
                        <label for="password">Password</label>
                        <input type="password">
                    </div>
                        <button>Sign In</button>
                        <div>
                            <router-link to="#">Forgot your password</router-link> |
                            <router-link to="/register">Create a account</router-link>
                        </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>