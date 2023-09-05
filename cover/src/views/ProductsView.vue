<template>
    <div>
        <div class="container">
            <div class="row">
            <div class="filter col-3">
                <div class="filter">
                    <h2 class="display-2">Filter</h2>
                    <div class="row">
                     <label for="">Adventure</label>
                     <input type="checkbox" name="" id="">
                     <label for="">Action</label>
                     <input type="checkbox" name="" id="">
                     <label for="">Romance</label>
                     <input type="checkbox" name="" id="">
                     <label for="">Horror</label>
                     <input type="checkbox" name="" id="">
                     <label for="">Mystery</label>
                     <input type="checkbox" name="" id="">
                     <label for="">Slice of Life</label>
                     <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="products col-9">
                <h2 class="display-2">Products</h2>
                <button class="btn">Sort</button>
            <div class="row justify-content-center gap-3" v-if="products">
                <div class="card" v-for="product in products" style="width: 18rem;" :key="product.prodID">
                    <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodName }}</h5>
                      <p class="card-text">R<span>{{product.amount}}</span></p>
                    </div>
                    <div class="card-footer">
                        <button class="btn">View More</button>
                        <button class="btn">Buy Now</button>
                    </div>
                  </div>
            </div>
            <div v-else class="row">
                <SpinnerComp/>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue'
    export default {
        components:{
            SpinnerComp
        },
        computed:{
            products(){
                return this.$store.state.products
            }
        },
        created(){
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>

</style>