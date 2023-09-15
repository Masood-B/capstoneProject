<template>
    <div>
        <div class="loading-spinner">
            <img src="https://i.postimg.cc/ncYtFNFF/Sharingan.gif" alt="Loading Spinner" style="width:10rem"/>
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
    margin-top: 5rem;
  }
  
  img{
    border-radius: 10rem;
  }
</style>