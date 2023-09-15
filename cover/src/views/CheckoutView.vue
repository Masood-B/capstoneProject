<template>
    <div>
        <div class="cartDisplay">
        <CartComp/>
    </div>
    </div>
</template>

<script>
import CartComp from '@/components/CartComp.vue';
    export default {
        components:{
            CartComp
        }
    }
</script>

<style scoped>
.cartDisplay {
    display: flex;
    flex-direction: column;
    min-height: 76.3vh;
  }
  
  .footer {
    margin-top: auto;
    flex-shrink: 0; 
  }
</style>