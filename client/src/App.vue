<template>
  <div class="ui-content">
    <Navbar v-if="$route.path != '/' && $route.path != '/signup'" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: mapGetters(["auth"]),
  methods: mapActions(["setAuth", "signIn", "signOut"]),
  mounted() {
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client
        .init({
          clientId:
            "250456254334-ftjm0p2a9om31g16btupt44qmhoqqoff.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.setAuth(window.gapi.auth2.getAuthInstance());
        });
    });
  },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css";
@import url("./css/style.css");
</style>
