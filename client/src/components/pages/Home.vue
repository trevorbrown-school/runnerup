<template>
  <div id="app">
    <Header />
    <main class="body">Hello {{ profile.getEmail() }}!</main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../Header.vue";
export default {
  computed: {
    ...mapGetters(["profile"]),
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.body {
  padding: 5rem;
}
</style>