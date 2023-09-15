<template>
  <div>
    <div class="contactDisplay">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 mb-4">
          <div class="card">
            <h2><i class="bi bi-telephone"></i></h2>
            <h3>Phone</h3>
            <p>079-298-0631</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 mb-4">
          <div class="card">
            <h2><i class="bi bi-envelope"></i></h2>
            <h3>Email</h3>
            <p>masoodbasardien123@gmail.com</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 mb-4">
          <div class="card">
            <h2><i class="bi bi-geo-alt-fill"></i></h2>
            <h3>Address</h3>
            <p>14 Chapel Road, <span>Harmony village, Cape Town, 7785</span></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h2>Contact Us</h2>
        </div>
        <div class="col-12 col-md-6 mb-4">
          <img
            src="https://i.postimg.cc/2y2rFq47/anime-wallpaper-7628310-1280.webp"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="col-12 col-md-6">
          <form
            action="https://formspree.io/f/xbjewvba"
            class="w-100"
            method="POST"
          >
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="surname" class="form-label">Surname</label>
              <input
                type="text"
                name="Surname"
                class="form-control"
                id="surname"
                placeholder="Your Surname"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="form-control"
                name="message"
                id="message"
                rows="3"
                placeholder="Write Here"
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <button class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contactDisplay {
  display: flex;
  flex-direction: column;
  min-height: 76.3vh;
}

.footer {
  margin-top: auto;
  flex-shrink: 0; 
}

label, h2{
  color: white;
}
.card{
  background: grey
}
</style>
