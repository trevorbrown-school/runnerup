<template>
  <div class="ui-content">
    <Navbar v-if="$route.path != '/' && $route.path != '/signup'" />
    <router-view profile="this.profile"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css";
@import url("./css/style.css");
</style>
