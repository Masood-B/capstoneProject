<template>
  <div>
    <div class="productDisplay">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-3">
          <div class="filter">
            <h2 class="display-4">Filter</h2>
            <div class="btn-group-vertical">
              <button class="btn btn-secondary" @click="filterByDefault('')">
                Default
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Action')">
                Action
              </button>
              <button
                class="btn btn-secondary"
                @click="filterByCategory('Adventure')"
              >
                Adventure
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Comedy')">
                Comedy
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Ecchi')">
                Ecchi
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Fantasy')">
                Fantasy
              </button>
              <button
                class="btn btn-secondary"
                @click="filterByCategory('historical')"
              >
                Historical
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Horror')">
                Horror
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Mystery')">
                Mystery
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Romance')">
                Romance
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Sci-Fi')">
                Sci-Fi
              </button>
              <button class="btn btn-secondary" @click="filterByCategory('Shonen')">
                Shonen
              </button>
              <button
                class="btn btn-secondary"
                @click="filterByCategory('Supernatural')"
              >
                Supernatural
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <h2 class="display-4">Products</h2>
      
            <div class="row">
              <div class="col-md-6">
                <div class="input-group">
                <input
                  type="search"
                  class="form-control"
                  placeholder="Search by name..."
                  v-model="searchQuery"
                />
              </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                      <button
                        class="dropdown-item"
                        
                        @click="ButtonDeafault()"
                      >
                        Default
                      </button>
                      <button class="dropdown-item"  @click="sortAmount()">
                        Price
                      </button>
                      <button class="dropdown-item"  @click="sortName()">
                        Name
                      </button>
                    
                  </ul>
                </div>
              </div>
            </div>
          
          <div class="row mt-3" v-if="products">
            <div
              class="col-md-4 mb-4"
              v-for="product in filteredAndSearchedProducts"
             
              :key="product.prodID"
            >
            <div class="card h-100 card-background">
              <img
                :src="product.prodUrl"
                class="card-img-top"
                :alt="product.prodName"
              />
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">
                  R<span>{{ product.amount }}</span>
                </p>
              </div>
              <div class="card-footer">
                <router-link
                  :to="{
                    name: 'SingleProduct',
                    params: { id: product.prodID },
                    query: {
                      name: product.prodName,
                      price: product.amount,
                      category: product.Category,
                      picture: product.prodUrl,
                    },
                  }"
                  class="btn btn-primary btn-block"
                >
                  View More
                </router-link>
                <button @click="addToCart(product)" class="btn btn-success btn-block">Buy Now</button>
              </div>
            </div>
            </div>
          </div>
          <div v-else class="row">
            <SpinnerComp />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import SpinnerComp from "../components/SpinnerComp.vue";
export default {
  data() {
    return {
      SelectedCategory: null,
      searchQuery: "",
      cart: [],
    };
  },
  components: {
    SpinnerComp,
  },
  computed: {
  products() {
    return this.$store.state.products;
  },
  filteredAndSearchedProducts() {
    let filteredProducts = this.products;
    const isCategorySelected = !!this.SelectedCategory;
    const isSearchQueryEntered = !!this.searchQuery;
    if (isCategorySelected) {
      filteredProducts = filteredProducts.filter((product) =>
        product.Category.includes(this.SelectedCategory)
      );
    }
    if (isSearchQueryEntered) {
      return this.searchBar(filteredProducts);
    }
    return filteredProducts;
  },
},
  methods: {
    ButtonDeafault() {
      this.$store.dispatch("fetchProducts");
    },
    sortAmount() {
      this.amount = !this.amount;
      this.products.sort((a, b) => {
        const big = a.amount;
        const small = b.amount;

        if (big < small) {
          return this.amount ? -1 : 1;
        } else if (big > small) {
          return this.amount ? 1 : -1;
        } else {
          return 0;
        }
      });
    },
    sortName() {
      this.amount = !this.amount;
      this.products.sort((a, b) => {
        const big = a.prodName.toLowerCase();
        const small = b.prodName.toLowerCase();

        if (big < small) {
          return this.amount ? -1 : 1;
        } else if (big > small) {
          return this.amount ? 1 : -1;
        } else {
          return 0;
        }
      });
    },
    searchBar(filteredProducts) {
  const query = this.searchQuery.toLowerCase();
  return filteredProducts.filter((prod) => {
    const prodItem = prod.prodName.toLowerCase();
    return prodItem.includes(query);
  });
},
    
    filterByCategory(category) {
      this.SelectedCategory = category;
    },
    filterByDefault() {
      this.SelectedCategory = "";
    },
    addToCart(product){
      this.cart.push(product)
      console.log(this.cart)
    }
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>

h2 {
  color: white;
}
.card-background{
  background: rgb(186, 166, 144)
}
.productDisplay {
  display: flex;
  flex-direction: column;
  min-height: 76.3vh;
}

.footer {
  margin-top: auto;
  flex-shrink: 0; 
}
</style>
