<!-- Html -->
<template>
  <!-- nav-bar -->
  <div class="nav">
    <router-link class="a" to="/">Home</router-link>
    <router-link class="a" to="add">Add Restaurant</router-link>
    <router-link class="a" to="update">Update Restaurant</router-link>
    <router-link class="a" to="about">About US</router-link>
    <a class="a" v-on:click="logout" href="#">Logout</a>
  </div>
  <!-- nav-bar -->
</template>
<!-- Html -->

<!-- Java-script -->
<script>
export default {
  name: "Header_1",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<!-- Java-Script -->

<!-- CSS -->
<style>
.nav {
  background-color: orange;
  overflow: hidden;
}
.nav a {
  float: left;
  color: white;
  padding: 16px 14px;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  margin-right: 4px;
  text-align: center;
}
.nav a:hover {
  background-color: #e13e24;
  color: white;
}
</style>
<!-- CSS -->
