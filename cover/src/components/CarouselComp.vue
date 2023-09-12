<template>
    <div>
          <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://i.postimg.cc/RCkSBGGf/wallpaperflare-com-wallpaper-9.jpg" class="d-block image" alt="Bleach" loading="lazy">
                    <h2 class="carousel-content">optio recusandae dolore dignissimos, eos perspiciatis </h2>
                  </div>
                  <div class="carousel-item">
                    <img src="https://i.postimg.cc/15ys7b4C/wp9544482-anime-girl-silhouette-wallpapers.jpg" class="d-block image" alt="Random Girl" loading="lazy">
                    <h2 class="carousel-content">optio recusandae dolore dignissimos, eos perspiciatis</h2>
                    <h2 class="product-link"><router-link to="/product">More Products</router-link></h2>
                  </div>
                  <div class="carousel-item">
                    <img src="https://i.postimg.cc/Vk5Y8TnY/wallpaperflare-com-wallpaper-8.jpg" class="d-block image" alt="Fairy Tail" loading="lazy">
                    <h2 class="carousel-content">optio recusandae dolore dignissimos, eos perspiciatis</h2>
                  </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h2{
  color: black;
  font-size: clamp(1.1rem, 2.3vw, 2rem); 
}

.image {
  position: relative;
  height:88.5vh;
  width:100%;
  }
  
.carousel-content{
position: absolute;
top: 70%;
left:30%;
}
.product-link{
  position: absolute;
top: 80%;
left:45%;
}

</style>