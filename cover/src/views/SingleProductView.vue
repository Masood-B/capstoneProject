<template>
  <div>
    <h2 class="display-2">Single Product</h2>
    <div>
        <div class="card" style="width: 18rem;">
            <img :src="$route.query.picture" class="card-img-top" :alt="$route.query.name">
                <div class="card-body">
                    <h5 class="card-title">{{ $route.query.name }}</h5>
                    <p class="card-text">R{{$route.query.price}}</p>
                    <p class="card-text">{{$route.query.category}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 computed:{
    product(){
        return this.$store.state.product
    },
    mounted() {
        console.log("on mounted")
        this.$store.dispatch('fetchProduct', this.$route.params.id)
    },
}
};
</script>

<style scoped>

</style>