<template>
    <div>
        <div class="singleDisplay">
            <div class="container">
      <h2 class="display-2 heading">Single Product</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card card-image">
            <img :src="$route.query.picture" class="card-img-top" :alt="$route.query.name">
          </div>
        </div>
        <div class="col-md-8">
          <div class="card card-content">
            <div class="card-body">
              <h2 class="card-title">{{ $route.query.name }}</h2>
              <p class="card-text">R{{$route.query.price}}</p>
              <p class="card-text">{{$route.query.category}}</p>
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
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
.heading{
    color:white
}

p{
    color: black;
}
.card-content {
    background-color: rgba(186, 166, 144, 0.7);
    margin-top: 12rem;
  }

  .singleDisplay {
    display: flex;
    flex-direction: column;
    min-height: 76.3vh;
  }
  
  .footer {
    margin-top: auto;
    flex-shrink: 0; 
  }
</style>