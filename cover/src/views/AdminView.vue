<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Table</h2>
        </div>
        <div class="row">
            <SortProductsComp/>
        </div>
        <div class="row">
            <AddProductsComp/>
        </div>
        <div class="row" v-show="products?.length">
            <table >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Picture</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody v-for="product in products" :key="product.prodID">
                    <tr>
                        <th scope="row">{{ product.prodID }}</th>
                        <td>{{ product.prodName }}</td>
                        <td>{{product.quantity}}</td>
                        <td>{{product.amount}}</td>
                        <td>{{product.Category}}</td>
                        <td><img :src="product.prodUrl" :alt="product.prodName" style="height: 15rem"></td>
                        <td><button class="btn">Edit</button></td>
                        <td><button class="btn" type="button" @click="deleteProd(product.prodID)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

<div>
    <h2 class="display-2">User Table</h2>
        <SortUsersComp/>
        <AddUsersComp/>
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Role</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody v-for="user in users" :key="user.userID">
                <tr v-if="users">
                    <th scope="row">{{ user.userID }}</th>
                    <td>{{ user.firstName }}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.userAge}}</td>
                    <td>{{user.userDOB}}</td>
                    <td>{{user.userRole}}</td>
                    <td>{{user.emailAdd}}</td>
                    <td>{{user.userPass}}</td>
                    <td><img :src="user.userProfile" class="card-img-top" :alt="user.prodName" style="height: 15rem"></td>
                    <td><button>Edit</button></td>
                    <td><button class="btn" type="button" @click="deleteUsers(user.userID)">Delete</button></td>    
                </tr>
            </tbody>
        </table>
</div>
    </div>
</template>

<script>

import AddUsersComp from '../components/AddUsersComp.vue'
import AddProductsComp from '../components/AddProductsComp.vue'
import SortUsersComp from '../components/SortUsersComp.vue'
import SortProductsComp from '../components/SortProductsComp.vue'
    export default {
        components:{
            AddUsersComp,
            AddProductsComp,
            SortUsersComp,
            SortProductsComp
        },
        computed:{
            products(){
                return this.$store.state.products
            },
            users(){
                return this.$store.state.users
            }
        },
        mounted(){
            this.$store.dispatch('fetchProducts')
            this.$store.dispatch('fetchUsers')
        },
        updated() {
            this.$store.dispatch('fetchProducts')
            this.$store.dispatch('fetchUsers')
        },
        methods:{
            deleteProd(prodID){
                this.$store.dispatch('deleteProduct', prodID)
            },
            deleteUsers(userID){
                this.$store.dispatch('deleteUser', userID)
            }
        }
    }
</script>

<style scoped>

</style>