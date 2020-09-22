<template>Logging out...</template>

<script>
export default {
  created() {
    if (this.$store.state.auth.isSignedIn) {
      this.$store.state.auth.signOut();
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>