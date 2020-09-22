<template>
  <Header />
  <main class="body">Hello {{name}}!</main>
</template>

<script>
import Header from "../Header.vue";
export default {
  mounted() {
    console.log();
  },
  data() {
    return {
      name: this.$store.state.auth.currentUser.get().rt.tV,
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