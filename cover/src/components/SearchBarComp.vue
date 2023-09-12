<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <i class="bi bi-search"></i>
          </button>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <form @submit.prevent="addProduct">
              <div class="col-9">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                </div>
                <div class="col-3">
            <button class="btn btn-outline-success" type="submit">Search</button>
              </div>
              </form>
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