<!-- html -->
<template>
  <div>
    <Header />
    <h1>Hello {{ name }}, Welcome to Add Page</h1>

    <!-- Add-Resturant-field -->
    <form class="register">
      <input
        type="text"
        v-model="restaurant.name"
        placeholder="Enter Restaturant Name"
      />
      <input
        type="text"
        v-model="restaurant.address"
        placeholder="Enter Address"
      />
      <input
        type="text"
        v-model="restaurant.contact"
        placeholder="Enter Contact"
      />
    </form>
    <!-- Add-Resturant-field -->

    <button v-on:click="addnewRestaurant">Add New Restaurant</button>
  </div>
</template>
<!-- html -->

<!-- Java-Script -->
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Add_1",
  data() {
    return {
      name: "",
      restaurant: { name: "", address: "", contact: "" },
    };
  },
  // Add-New-Function//
  methods: {
    async addnewRestaurant() {
      console.warn(this.restaurant);
      const result = await axios.post("http://localhost:3000/Restaurant", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
        console.warn("result", result);
      }
    },
  },
  // Add-New-Function//

  // mounted-function//
  mounted() {
    let user = localStorage.getItem("userInfo");
    this.name = JSON.parse(user).name;

    if (!user) {
      this.$router.push("SignUp");
    }
  },
  components: { Header },
};
// mounted-function//
</script>
<!-- Java-Script -->

<!-- CSS -->
<style>
.register input {
  display: block;
  width: 300px;
  height: 40px;
  padding-left: 20px;
  border: 1px solid rgb(232, 155, 12);
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
}
.register input:focus {
  outline: none;
}
button {
  width: 320px;
  height: 40px;
  border: 1px solid orange;
  color: white;
  background: orange;
  font-size: 18px;
}
h1 {
  color: #e13e24;
}
</style>
<!-- CSS -->
