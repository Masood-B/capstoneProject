<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add
          </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Products</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <p>Name</p>
              <input type="text" class="form-control" placeholder="" id="" aria-label="Title">
              <p>Surname</p>
              <input type="text" class="form-control" placeholder="" id="" aria-label="Title">
              <p>Gender</p>
              <input type="number" class="form-control" placeholder="" id="" aria-label="Title">
              <p>Age</p>
              <input type="number" class="form-control" placeholder="" id="" aria-label="Title">
              <p>Date of birth</p>
              <input type="number" class="form-control" placeholder="" id="" aria-label="Title">
              <p>Role</p>
              <input type="text" class="form-control" placeholder="" id="" aria-label="Title">
              <p>Email</p>
              <input type="text" class="form-control" placeholder="" id="" aria-label="Title">
              <p>Password</p>
              <input type="text" class="form-control" placeholder="" id="" aria-label="Title">
              <p>Profile</p>
              <input type="text" class="form-control" placeholder="" id="" aria-label="Title">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn" id="" data-bs-dismiss="modal">Proceed</button>
              </div>
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