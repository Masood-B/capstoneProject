<template>
  <div>
<carousel/>
<div class="aboutContent">
  <div class="container">
    <div class="row">
<h2 class="display-2">New Products</h2>
<FeatureCards/>
    </div>
  </div>
  <div class="container">
    <div class="row">
<h2 class="display-2">Best Selling Products</h2>
<FeatureCards/>
    </div>
  </div>
<div class="container">
  <div class="row">
    <h2 class="display-2">Feature Products</h2>
    <FeatureCards/>
  </div>
</div>
</div>
  </div>
</template>

<script>
import carousel from '@/components/CarouselComp.vue'
import FeatureCards from '@/components/FeatureCardsComp.vue'
  export default {
    components:{
      carousel,
      FeatureCards
    }
  }
</script>

<style scoped>

</style>