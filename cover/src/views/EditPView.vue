<template>
  <div class="editingpage">
    <h2>Edit Item</h2>
    <a href="/admin">Back</a>
    <form id="edit" @submit.prevent="EditProduct">
      <input
        v-model="editprod.prodName"
        type="text"
        placeholder="Product Name"
      />
      <input v-model="editprod.quantity" type="number" placeholder="Quantity" />
      <input v-model="editprod.amount" type="number" placeholder="Amount" />
      <input v-model="editprod.Category" type="text" placeholder="Category" />
      <input
        v-model="editprod.prodUrl"
        type="text"
        placeholder="Product Image"
      />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editprod: {
        prodID: this.id,
        prodName: "",
        quantity: 0,
        amount: 0,
        Category: "",
        prodUrl: "",
      },
    };
  },
  props: ["id"],
  methods: {
    EditProduct() {
      this.$store.dispatch("EditProdConfirm", this.editprod);
    },
  },
};
</script>

<style scoped></style>
