<template>
    <div>
        <div class="loading-spinner">
            <img src="https://i.postimg.cc/ncYtFNFF/Sharingan.gif" alt="Loading Spinner" style="width:18rem"/>
            <span class="visually-hidden">Loading...</span>
          </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  /* Add CSS animations for rotation */
  /*.loading-spinner img {
    animation: spin 1s infinite linear;
  }*/
  
 /* @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */
  img{
    border-radius: 10rem;
  }
</style>