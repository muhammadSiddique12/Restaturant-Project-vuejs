<!-- html -->
<template>
  <div>
    <Header />
    <h1>Hello {{ name }}, Welcome to Update Page</h1>
    <!-- Update-Resturant-field -->

    <form class="register">
      <input
        type="text"
        v-model="restaurant.name"
        placeholder="Enter Restauranat Name"
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
    <!-- Update-Resturant-field -->

    <button v-on:click="updateRestaurant">Update Restaurant</button>
  </div>
</template>
<!-- html -->

<!-- Java-Script -->

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Update_1",
  data() {
    return {
      name: "",
      restaurant: { name: "", address: "", contact: "" },
    };
  },
  // update-Restaurant-Function//

  methods: {
    async updateRestaurant() {
      const result = await axios.put(
        "http://localhost:3000/Restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
        console.warn("result", result);
      }
    },
  },
  // update-Restaurant-Function//

  // mounted-function//

  async mounted() {
    let user = localStorage.getItem("userInfo");
    this.name = JSON.parse(user).name;

    if (!user) {
      this.$router.push("SignUp");
    }
    const result = await axios.get(
      "http://localhost:3000/Restaurant/" + this.$route.params.id
    );

    // console.log(this.$route.params.id);
    // console.warn(result.data);

    this.restaurant = result.data;
  },
  // mounted-function//

  components: { Header },
};
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
