<template>
  <div>
<carousel/>
<div class="aboutContent">
  <div class="container">
    <div class="px-2">
<h2 class="display-4">New Products</h2>
<div class="row justify-content-center gap-3" v-if="products">
  <div
    class="card col-md-3 col-sm-6"
    v-for="product in reversedSlicedProducts"
    style="width: 18rem"
    :key="product.prodID"
  >
    <img
      :src="product.prodUrl"
      class="card-img-top img-fluid"
      :alt="product.prodName"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.prodName }}</h5>
      <p class="card-text">
        R<span>{{ product.amount }}</span>
      </p>
    </div>
    <div class="card-footer">
      <router-link
        :to="{
          name: 'SingleProduct',
          params: { id: product.prodID },
          query: {
            name: product.prodName,
            price: product.amount,
            category: product.Category,
            picture: product.prodUrl,
          },
        }"
      >
        View More
      </router-link>
      <button @click="addToCart(product)" class="btn">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  </div>
  <div class="container">
    <div class="px-2">
<h2 class="display-4">Recommend Products</h2>
<div class="row justify-content-center gap-3" v-if="products">
  <div
    class="card col-md-3 col-sm-6"
    v-for="product in randomProducts"
    style="width: 18rem"
    :key="product.prodID"
  >
    <img
      :src="product.prodUrl"
      class="card-img-top img-fluid"
      :alt="product.prodName"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.prodName }}</h5>
      <p class="card-text">
        R<span>{{ product.amount }}</span>
      </p>
    </div>
    <div class="card-footer">
      <router-link
        :to="{
          name: 'SingleProduct',
          params: { id: product.prodID },
          query: {
            name: product.prodName,
            price: product.amount,
            category: product.Category,
            picture: product.prodUrl,
          },
        }"
      >
        View More
      </router-link>
      <button @click="addToCart(product)" class="btn">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  </div>
<div class="container">
  <div class="px-2">
    <h2 class="display-4">Adventure Products</h2>
<div class="row justify-content-center gap-3" v-if="products">
  <div
    class="card col-md-3 col-sm-6"
    v-for="product in adventureProducts"
    style="width: 18rem"
    :key="product.prodID"
  >
    <img
      :src="product.prodUrl"
      class="card-img-top img-fluid"
      :alt="product.prodName"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.prodName }}</h5>
      <p class="card-text">
        R<span>{{ product.amount }}</span>
      </p>
    </div>
    <div class="card-footer">
      <router-link
        :to="{
          name: 'SingleProduct',
          params: { id: product.prodID },
          query: {
            name: product.prodName,
            price: product.amount,
            category: product.Category,
            picture: product.prodUrl,
          },
        }"
      >
        View More
      </router-link>
      <button @click="addToCart(product)" class="btn">Buy Now</button>
    </div>
  </div>
</div>
  </div>
</div>
</div>
  </div>
</template>

<script>
import carousel from '@/components/CarouselComp.vue'
import FeatureCards from '@/components/FeatureCardsComp.vue'
  export default {
    data(){
      return{
        
      }
    },
    components:{
      carousel,
      FeatureCards
    },
    computed:{
      products() {
      return this.$store.state.products;
    },
   
      reversedSlicedProducts() {
      const slicedProducts = this.products.reverse().slice(0, 4);
      return slicedProducts;
    },
    randomProducts(){
      const shuffledProducts = this.products.slice(); 
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }
    const selectedProducts = shuffledProducts.slice(0, 4);
    return selectedProducts;
    },
    adventureProducts() {
    //if (this.category === "Adventure") {
      return this.products?.filter(prod => prod.Category?.includes("Adventure")).slice(0, 4)
      //find(product => product?.category?.includes("Adventure"));
   // } 
    // else {
    //   return this.products;
    // }
}
    },
    methods:{
      addToCart(product){
      this.cart.push(product)
      console.log(this.cart)
      localStyorage.setItem("cart",JSON.stringify(this.cart))
    },
    },
    created() {
    this.$store.dispatch("fetchProducts");
  }
  }
</script>

<style scoped>
h2{
  color: white;
}
</style>