<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Add
          </button>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Products</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addProduct">
                    <div>
                <label for="productName">Name</label>
                <input type="text" class="form-control" placeholder="" id="productName" v-model="productData.prodName" aria-label="Title" required>
              </div>
              <div>
                <label for="productQuantity">Quantity</label>
                <input type="number" class="form-control" placeholder="" id="productQuantity" v-model="productData.quantity" aria-label="Title" required>
              </div>
              <div>
                <label for="productAmount">Amount</label>
                <input type="number" class="form-control" placeholder="" id="productAmount" v-model="productData.amount" aria-label="Title" required>
              </div>
              <div>
                <label for="productCategory">Category</label>
                <input type="text" class="form-control" placeholder="" id="productCategory" v-model="productData.Category" aria-label="Title" required>
              </div>
              <div>
                <label for="productPicture">Picture</label>
                <input type="text" class="form-control" placeholder="" id="productPicture" v-model="productData.prodUrl" aria-label="Title" required>
              </div>
                <button type="submit" class="btn" id="" data-bs-dismiss="modal">Proceed</button>
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
          productData:{
            prodName: "",
            quantity: "",
            amount: "",
            Category: "",
            prodUrl: ""
          }
        }
      },
        methods:{
           addProduct(){
            this.$store.dispatch("addProduct", this.productData)
          }
        }
    }
</script>

<style scoped>

</style>