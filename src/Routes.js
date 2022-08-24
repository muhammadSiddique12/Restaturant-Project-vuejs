import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add";
import Update from "./components/Update";
import About from "./components/About.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/SignUp",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
  },
  {
    name: "About",
    component: About,
    path: "/about",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
