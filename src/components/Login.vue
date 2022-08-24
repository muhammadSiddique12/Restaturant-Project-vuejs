<!-- html -->

<template>
  <div>
    <img class="logo" src="../assets/logo-1.png" alt="logo" />
    <!-- Login-Resturant-field -->

    <div class="register">
      <input type="text" v-model="email" placeholder="enter email" />
      <input type="password" v-model="password" placeholder="password" />
      <button v-on:click="logIn">Login</button>
    </div>
    <!-- Login-Resturant-field -->

    <p>
      <router-link to="SignUp">Sign-Up</router-link>
    </p>
  </div>
</template>
<!-- html -->

<!-- Java-Script -->

<script>
import axios from "axios";
export default {
  name: "Login_1",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  // LOGin--Function//

  methods: {
    async logIn() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("userInfo", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
      console.warn(result);
    },
  },
  // LOGin--Function//
};
</script>
<!-- Java-Script -->

<!-- CSS -->

<style scoped>
.logo {
  width: 100px;
}
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
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid orange;
  color: white;
  background: orange;
}
</style>
<!-- CSS -->
