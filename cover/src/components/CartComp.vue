<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Cart</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <table class="table table-responsive">
            <thead>
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody v-for="(items, index) in cart" :key="items">
              <tr>
                <td>
                  <img
                    :src="items.prodUrl"
                    :alt="items.prodName"
                    class="img-fluid"
                    style="max-height: 15rem"
                  />
                </td>
                <td>{{ items.prodName }}</td>
                <td>R {{ items.amount }}</td>
                <td><button class="btn btn-danger" @click="removeItem(index)">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-header">
              <h2 class="display-2">Check Out</h2>
            </div>
            <div class="card-body">
              <label class="display-5">Total:</label>
              <h2>...</h2>
              <button class="btn btn-primary">Purchase</button>
              <button class="btn btn-danger" @click="clearCart">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      return cart;
    },
    clearCart() {
        try{
            localStorage.removeItem("cart");
            location.reload()
        }catch(e){
            console.log(e)
        }
    },
},
methods:{
    removeItem(index){
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        if (index >= 0 && index < cart.length){
            cart.splice(index, 1)
            localStorage.setItem("cart", JSON.stringify(cart))
            this.cart = cart
        }
location.reload()
    }
}
};
</script>

<style scoped></style>
