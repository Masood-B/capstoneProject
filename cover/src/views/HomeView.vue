<template>
  <div>
<carousel/>
<div class="aboutContent">
<h2 class="display-2">Feature Products</h2>
<div class="container">
  <div class="row">
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