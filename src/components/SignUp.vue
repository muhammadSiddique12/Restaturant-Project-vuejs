<!-- html -->

<template>
  <img class="logo" src="../assets/logo-1.png" alt="logo" />
  <h1>Sign Up</h1>
  <!-- Sign-Up-Resturant-field -->

  <div class="register">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="signUp">Sign Up</button>
    <!-- Sign-Up-Resturant-field -->

    <p>
      <router-link to="Login">Log-In</router-link>
    </p>
  </div>
</template>
<!-- html -->

<!-- Java-Script -->

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  // SIGN-Up--Function//

  methods: {
    async signUp() {
      console.warn("signUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("userInfo", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
  // SIGN-Up--Function//

  // mounted-function//

  mounted() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
  // mounted-function//
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
