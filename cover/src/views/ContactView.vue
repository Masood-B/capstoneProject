<template>
    <div>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                        <h2><i class="bi bi-telephone"></i></h2>
                        <h3>Phone</h3>
                        <p>xxx-xxx-xxxx</p>
                    </div>  
                    </div>
                    <div class="col-4">
                        <div class="card">
                        <h2><i class="bi bi-envelope"></i></h2>
                        <h3>Email</h3>
                        <p>masoodbasardien123@gmail.com</p>
                    </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                        <h2><i class="bi bi-geo-alt-fill"></i></h2>
                        <h3>Address</h3>
                        <p>14 Chapel Road, <span>Harmony village, Cape Town, 7785</span></p>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6 col-md-6">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/5/685/desktop-wallpaper-bloodhound-puppy-5-cool-bloodhound-puppy-computer.jpg" class="w-100" alt="">
                    </div>
                    <div class="col-12 col-lg-6 col-md-6 ">
                        <form action="https://formspree.io/f/xbjewvba" class="w-100" method="POST">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" name="fullname" class="form-label">Name</label>
                                <input name="name" type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"  required
                                oninvalid="this.setCustomValidity('You need to put your name here')"
                                oninput="this.setCustomValidity('')">
                                <label for="exampleFormControlInput2" name="fullname" class="form-label">Surname</label>
                                <input name="Surname" type="Surname" class="form-control" id="exampleFormControlInput2" placeholder="Your Name"  required
                                oninvalid="this.setCustomValidity('You need to put your name here')"
                                oninput="this.setCustomValidity('')">
                                <label for="exampleFormControlInput3" name="email" class="form-label">Email address</label>
                                <input name="email" type="email" class="form-control" id="exampleFormControlInput3" placeholder="Your Email"  required
                                oninvalid="this.setCustomValidity('You need to put your email here')"
                                oninput="this.setCustomValidity('')">
                              </div>
                              <div class="mb-3">
                                <label for="exampleFormControlTextarea1" name="message" class="form-label" >Message</label>
                                <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Write Here"  required
                                oninvalid="this.setCustomValidity('You need to write here')"
                                oninput="this.setCustomValidity('')"></textarea>
                              </div>
                              <div>
                                <button class="btn">Submit</button>
                              </div>
                        </form>
                    </div>
                </div>
            </div>
            
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>