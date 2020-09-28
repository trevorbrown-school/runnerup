<template>
  <div id="app">
    <Header />
    <main class="body">Hello Trevor!</main>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "Home",
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