<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            Add
          </button>
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Products</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="addUser">
              <p>Name</p>
              <input type="text" class="form-control" v-model="userData.firstName" placeholder="" id="" aria-label="Title">
              <p>Surname</p>
              <input type="text" class="form-control" v-model="userData.lastName" placeholder="" id="" aria-label="Title">
              <p>Gender</p>
              <input type="text" class="form-control" v-model="userData.gender" placeholder="" id="" aria-label="Title">
              <p>Age</p>
              <input type="number" class="form-control" v-model="userData.userAge" placeholder="" id="" aria-label="Title">
              <p>Date of birth</p>
              <input type="text" class="form-control" v-model="userData.userDOB" placeholder="" id="" aria-label="Title">
              <p>Role</p>
              <input type="text" class="form-control" v-model="userData.userRole" placeholder="" id="" aria-label="Title">
              <p>Email</p>
              <input type="text" class="form-control" v-model="userData.emailAdd" placeholder="" id="" aria-label="Title">
              <p>Password</p>
              <input type="text" class="form-control" v-model="userData.userPass" placeholder="" id="" aria-label="Title">
              <p>Profile</p>
              <input type="text" class="form-control" v-model="userData.userProfile" placeholder="" id="" aria-label="Title">
              <button type="sumbit" class="btn" id="" data-bs-dismiss="modal">Proceed</button>
            </form>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          userData:{
            firstName: "",
            lastName: "",
            gender: "",
            userAge: "",
            userDOB: "",
            userRole: "",
            emailAdd: "",
            userPass: "",
            userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png"
          }
        }
      },
      methods:{
        addUser(){
          this.$store.dispatch("addPeople", this.userData)
        }
      }
    }
</script>

<style scoped>

</style>