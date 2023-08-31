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
                    <img src="https://wallpaperset.com/w/full/b/f/2/153494.jpg" class="d-block image" alt="...">
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus laboriosam iusto veritatis accusamus velit </h2>
                  </div>
                  <div class="carousel-item">
                    <img src="https://wallpapercave.com/wp/4rCGn9D.jpg" class="d-block image" alt="...">
                    <h2>optio recusandae dolore dignissimos, eos perspiciatis similique? Cum sequi amet distinctio consequatur beatae, maxime nisi commodi. <button class="btn btn-primary">Go HERE</button></h2>
                  </div>
                  <div class="carousel-item">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/544/792/desktop-wallpaper-bloodhound-dog-pack-in-pack-of-dogs.jpg" class="d-block image" alt="...">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi consequuntur iusto ullam necessitatibus nam placeat</h2>
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
  color: white;
  font-size: clamp(1.1rem, 2.3vw, 2rem); 
}

.image {
  position: relative;
  height:88.5vh;
  width:100%;
  }
  
h2{
position: absolute;
top: 80%;
}
</style>