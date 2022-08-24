<!-- Html -->
<template>
  <div>
    <Header />
    <h1>Hello {{ name }}, Welcome to Home Page</h1>
    <!-- table -->
    <table class="table" border="1">
      <!-- menu-bar -->
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Actions</td>
        <td>Delete Restaurant</td>
      </tr>
      <!-- menu-bar -->
      <!-- items -->
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td><router-link :to="'/update/' + item.id">Update</router-link></td>
        <td>
          <button v-on:click="deleteResto(item.id)">Delete Restaurant</button>
        </td>
      </tr>
      <!-- items -->
    </table>
    <!-- table -->
  </div>
</template>
<!-- Html -->

<!-- Java-Script -->
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home_1",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: { Header },
  // Functions//
  // delete-function//

  methods: {
    async deleteResto(id) {
      let result = await axios.delete("http://localhost:3000/Restaurant/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    // delete-function//

    // loadData-function//
    async loadData() {
      let user = localStorage.getItem("userInfo");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push("SignUp");
      }
      let result = await axios.get("http://localhost:3000/Restaurant");
      // console.warn(result);
      this.restaurants = result.data;
    },
    // loadData-function//
  },
  // Functions

  mounted() {
    this.loadData();
  },
};
</script>
<!-- Java-Script -->

<!-- CSS -->
<style>
td {
  width: 160px;
  height: 40px;
}
table {
  margin-left: auto;
  margin-right: auto;
}
h1 {
  color: #e13e24;
}
</style>
<!-- CSS -->
