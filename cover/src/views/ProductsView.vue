<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="filter col-3">
          <div class="filter">
            <h2 class="display-2">Filter</h2>
            <div class="row">
              <button class="filterButton" @click="filterByCategory('Action')">
                Action
              </button>
              <button
                class="filterButton"
                @click="filterByCategory('Adventure')"
              >
                Adventure
              </button>
              <button class="filterButton" @click="filterByCategory('Comedy')">
                Comedy
              </button>
              <button class="filterButton" @click="filterByCategory('Ecchi')">
                Ecchi
              </button>
              <button class="filterButton" @click="filterByCategory('Fantasy')">
                Fantasy
              </button>
              <button
                class="filterButton"
                @click="filterByCategory('historical')"
              >
                Historical
              </button>
              <button class="filterButton" @click="filterByCategory('Horror')">
                Horror
              </button>
              <button class="filterButton" @click="filterByCategory('Mystery')">
                Mystery
              </button>
              <button class="filterButton" @click="filterByCategory('Romance')">
                Romance
              </button>
              <button class="filterButton" @click="filterByCategory('Sci-Fi')">
                Sci-Fi
              </button>
              <button class="filterButton" @click="filterByCategory('Shonen')">
                Shonen
              </button>
              <button
                class="filterButton"
                @click="filterByCategory('Supernatural')"
              >
                Supernatural
              </button>
            </div>
          </div>
        </div>
        <div class="products col-9">
          <h2 class="display-2">Products</h2>
          <div class="row">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </button>
              <ul class="dropdown-menu">
                <div class="row">
                  <button class="btn" id="productSort" @click="ButtonDeafault()">
                    Default
                  </button>
                  <button class="btn" id="productSort" @click="sortAmount()">
                    Price
                  </button>
                  <button class="btn" id="productName" @click="sortName()">
                    Name
                  </button>
                </div>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center gap-3" v-if="products">
            <div
              class="card"
              v-for="product in filterProducts"
              style="width: 15rem"
              :key="product.prodID"
            >
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
                        picture: product.prodUrl
                    }

                  }"
                >
                  View More
                </router-link>
                <button @click="ButtonDeafault">default</button>
                <button class="btn">Buy Now</button>
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
</template>

<script>
import SpinnerComp from "../components/SpinnerComp.vue";
export default {
  data() {
    return {
      SelectedCategory: null,
    };
  },
  components: {
    SpinnerComp,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filterProducts() {
      if (!this.SelectedCategory) {
        return this.products;
      }
      return this.products.filter((product) =>
        product.Category.includes(this.SelectedCategory)
      );
    },
  },
  methods: {
    ButtonDeafault() {
        this.$store.dispatch("fetchProducts")
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
    filterByCategory(category) {
      this.SelectedCategory = category;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style scoped>
.filterButton {
  width: 12rem;
}
</style>
