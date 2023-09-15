<template>
    <div>
<button type="button" class="btn btn-secondary" data-bs-toggle="modal" :data-bs-target="`#${exampleModal}${productData.prodID}`">
    Edit
  </button>
  <div class="modal fade" :id="`${exampleModal}${productData.prodID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form @submit.prevent="editProduct">
                <div>
            <label for="prod_id">ID</label>
            <input type="text" class="form-control" placeholder="" id="prod_id" v-model="productEdit.prodID" aria-label="Title" required>
          </div>
                <div>
            <label for="productName">Name</label>
            <input type="text" class="form-control" placeholder="" id="productName" v-model="productEdit.prodName" aria-label="Title" required>
          </div>
          <div>
            <label for="productQuantity">Quantity</label>
            <input type="number" class="form-control" placeholder="" id="productQuantity" v-model="productEdit.quantity" aria-label="Title" required>
          </div>
          <div>
            <label for="productAmount">Amount</label>
            <input type="number" class="form-control" placeholder="" id="productAmount" v-model="productEdit.amount" aria-label="Title" required>
          </div>
          <div>
            <label for="productCategory">Category</label>
            <input type="text" class="form-control" placeholder="" id="productCategory" v-model="productEdit.Category" aria-label="Title" required>
          </div>
          <div>
            <label for="productPicture">Picture</label>
            <input type="text" class="form-control" placeholder="" id="productPicture" v-model="productEdit.prodUrl" aria-label="Title" required>
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
      props: ["productData"],
      data(){
        return{
          exampleModal: 'productModal',
          productEdit:{
            prodID: this.productData.prodID,
            prodName: this.productData.prodName,
            quantity: this.productData.quantity,
            amount: this.productData.amount,
            Category: this.productData.Category,
            prodUrl: this.productData.prodUrl
          }
        }
      },
        methods:{
           editProduct(){
            this.$store.dispatch("editProduct", this.productEdit)
            this.$store.dispatch("fetchProducts")
          }
        }
    }
</script>

<style scoped>

</style>