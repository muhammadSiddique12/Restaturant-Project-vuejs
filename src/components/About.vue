<!-- html -->
<template>
  <Header />
  <div class="parent">
    <div class="left">
      <h1>ABOUT US</h1>
      <h3>WE ARE THE BEST DESIGNING COMPANY SINCE 1984.</h3>
      <p>
        Completely network collaborative web services via user-centric
        initiatives. Quickly promote sticky testing procedures before unique
        process improvements. Distinctively engineer innovative information
        whereas revolutionary process improvements. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum.
        Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam.
        Ratione atque dolorum nostrum a est voluptatibus.
      </p>
      <p>
        Completely network collaborative web services via user-centric
        initiatives. Quickly promote sticky testing procedures before unique
        process improvements. Distinctively engineer innovative information
        whereas revolutionary process improvements. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum.
        Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam.
        Ratione atque dolorum nostrum a est voluptatibus.
      </p>
      <button>Contact Us</button>
    </div>
    <div class="right">
      <img src="../assets/blog-image2.jpg" alt="logo" />
    </div>
  </div>
</template>
<!-- html -->

<!-- JAvaScript -->
<script>
import Header from "./Header.vue";
export default {
  name: "About-US",
  data() {
    return {};
  },
  components: { Header },
};
</script>
<!-- JAvaScript -->

<!-- CSS -->
<style scoped>
.parent {
  display: flex;
}
.left {
  text-align: left;
  width: 50%;
  margin-left: 30px;
}
.left h1 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.left p {
  margin-bottom: 40px;
  line-height: 24px;
  font-size: 16px;
}
.left h3 {
  margin-top: 20px;
  margin-bottom: 40px;
}
button {
  width: 280px;
  text-align: center;
  height: 40px;
  border: 1px solid orange;
  color: white;
  background: orange;
  font-size: 18px;
}
.right {
  width: 50%;
}
img {
  margin-top: 20px;
  width: 80%;
}
</style>
<!-- CSS -->
