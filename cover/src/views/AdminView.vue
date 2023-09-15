<template>
  <div>
    <div class="adminDisplay">
  <div class="container">
    <div class="row">
      <div class="col">
      <h2 class="display-2">Product Table</h2>
    </div>
    </div>
    <div class="row">
      <div class="col">
      <AddProductsComp />
    </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Picture</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.prodID">
          <tr>
            <th scope="row">{{ product.prodID }}</th>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.Category }}</td>
            <td>
              <img
                :src="product.prodUrl"
                :alt="product.prodName"
                class="img-fluid"
                style="max-height: 15rem"
              />
            </td>
            <td>
              <EditProductComp :productData="product"/>
            </td>
            <td>
              <button
                class="btn btn-danger"
                type="button"
                @click="deleteProd(product.prodID)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

  <div class="container">
      <div class="row">
        <div class="col">
        <h2 class="display-2">User Table</h2>
      </div>
      </div>
      <div class="row">
        <div class="col">
        <AddUsersComp />
      </div>
      </div>
      <div class="row">
        <div class="row">
          <div class=" table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">DOB</th>
              <th scope="col">Role</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Profile</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody v-for="user in users" :key="user.userID">
            <tr>
              <th scope="row">{{ user.userID }}</th>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.userDOB }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userPass }}</td>
              <td>
                <img
                  :src="user.userProfile"
                  class="img-fluid"
                  :alt="user.prodName"
                  style="max-height: 15rem"
                />
              </td>
              <td>
              <EdiUserComp/>
            </td>
              <td>
                <button
                  class="btn btn-danger"
                  type="button"
                  @click="deleteUsers(user.userID)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
  </div>
  
</template>

<script>
import AddUsersComp from "../components/AddUsersComp.vue";
import AddProductsComp from "../components/AddProductsComp.vue";
import EditProductComp from "../components/EditProductComp.vue";
import EdiUserComp from "@/components/EdiUserComp.vue";
export default {
  components: {
    AddUsersComp,
    AddProductsComp,
  EditProductComp,
  EdiUserComp
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteProd(prodID) {
      this.$store.dispatch("deleteProduct", prodID);
    },
    deleteUsers(userID) {
      this.$store.dispatch("deleteUser", userID);
    }
  },
};
</script>

<style scoped>
h2{
  color:white
}
.adminDisplay {
  display: flex;
  flex-direction: column;
  min-height: 76.3vh;
}

.footer {
  margin-top: auto;
  flex-shrink: 0; 
}

</style>
