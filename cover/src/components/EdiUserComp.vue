<template>
    <div>
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            Edit
          </button>
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="editUser">
                        <div>
                    <label for="prod_id">ID</label>
                    <input type="text" class="form-control" placeholder="" id="prod_id" v-model="userEdit.userID" aria-label="Title" >
                  </div>
                        <div>
                    <label for="productName">Name</label>
                    <input type="text" class="form-control" placeholder="" id="productName" v-model="userEdit.firstName" aria-label="Title" >
                  </div>
                  <div>
                    <label for="productQuantity">Surname</label>
                    <input type="text" class="form-control" placeholder="" id="productQuantity" v-model="userEdit.lastName" aria-label="Title" >
                  </div>
                  <div>
                    <label for="productAmount">Gender</label>
                    <input type="text" class="form-control" placeholder="" id="productAmount" v-model="userEdit.gender" aria-label="Title" >
                  </div>
                  <div>
                    <label for="productCategory">Age</label>
                    <input type="number" class="form-control" placeholder="" id="productCategory" v-model="userEdit.userAge" aria-label="Title" >
                  </div>
                  <div>
                    <label for="productPicture">Role</label>
                    <input type="text" class="form-control" placeholder="" id="productPicture" v-model="userEdit.userRole" aria-label="Title" >
                  </div>
                  <div>
                    <label for="productPicture">Email</label>
                    <input type="text" class="form-control" placeholder="" id="productPicture" v-model="userEdit.emailAdd" aria-label="Title" >
                  </div>
                  <div>
                    <label for="productPicture">Password</label>
                    <input type="text" class="form-control" placeholder="" id="productPicture" v-model="userEdit.userPass" aria-label="Title" >
                  </div>
                  <div>
                    <label for="productPicture">Profile</label>
                    <input type="text" class="form-control" placeholder="" id="productPicture" v-model="userEdit.userProfile" aria-label="Title" >
                  </div>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Save changes</button>
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
                userEdit:{
                    userID: "",
                    firstName: "",
                    lastName: "",
                    gender: "",
                    userAge: "",
                    userRole: "",
                    emailAdd: "",
                    userPass: "",
                    userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png"
                }
            }
        },
        methods:{
            editUser(){
                this.$store.dispatch("editUser", this.userEdit)
                this.$store.dispatch("fetchUsers")
            }
        }
    }
</script>

<style scoped>

</style>