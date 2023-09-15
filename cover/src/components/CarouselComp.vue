<template>
    <div>
          <div id="carouselExampleIndicators" class="carousel slide carousel-fade vh-80">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner h-80">
                <div class="carousel-item active d-flex justify-content-center align-items-center">
                    <img src="https://i.postimg.cc/RCkSBGGf/wallpaperflare-com-wallpaper-9.jpg" class="d-block image w-100 " alt="Bleach" loading="lazy">
                    <h2 class="carousel-content text-center type-1">High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from "Hollows".</h2>
                  </div>
                  <div class="carousel-item d-flex justify-content-center align-items-center">
                    <img src="https://i.postimg.cc/15ys7b4C/wp9544482-anime-girl-silhouette-wallpapers.jpg" class="d-block image w-100" alt="Random Girl" loading="lazy">
                    <h2 class="carousel-content text-center type-1">Discover a whole world of manga <router-link to="/product">More Products</router-link></h2>
                  </div>
                  <div class="carousel-item d-flex justify-content-center align-items-center">
                    <img src="https://i.postimg.cc/Vk5Y8TnY/wallpaperflare-com-wallpaper-8.jpg" class="d-block image w-100" alt="Fairy Tail" loading="lazy">
                    <h2 class="carousel-content text-center type-1">Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail.</h2>
                  </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon fs-3" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon fs-3" aria-hidden="true"></span>
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
  font-size: clamp(1.1rem, 2.3vw, 2rem); 
}
.type-1{
  color: rgb(225, 218, 218);
  background: rgba(24, 23, 23, 0.6);
}
.image {
  position: relative;
  height:88.2%;
  }
  
.carousel-content{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}


</style>