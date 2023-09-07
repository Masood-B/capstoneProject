<template>
  <div>
    <h2>Edit Item</h2>
    <a href="/admin">Back</a>
    <form id="edit" @submit.prevent="EditUser">
      <input v-model="edituse.firstName" type="text" placeholder="Name" />
      <input v-model="edituse.lastName" type="text" placeholder="Surname" />
      <input v-model="edituse.gender" type="text" placeholder="Amount" />
      <input v-model="edituse.userAge" type="number" placeholder="Age" />
      <input
        v-model="edituse.userDOB"
        type="text"
        placeholder="Date of Birth"
      />
      <input v-model="edituse.userRole" type="text" placeholder="Role" />
      <input v-model="edituse.emailAdd" type="text" placeholder="Email" />
      <input v-model="edituse.userPass" type="text" placeholder="Password" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edituse: {
        userID: this.id,
        firstName: "",
        lastName: "",
        gender: "",
        userAge: "",
        userDOB: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
      },
    };
  },
  props: ["id"],
  methods: {
    EditUser() {
      this.$store.dispatch("EditUserConfirm", this.edituse);
    },
  },
};
</script>

<style scoped></style>
