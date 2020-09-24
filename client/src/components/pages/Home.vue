<template>
  <div id="app">
    <Header />
    <main class="body">Hello {{ name }}!</main>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  data() {
    return {
      name: "Trevor",
    };
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