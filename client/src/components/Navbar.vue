<template>
  <nav class="navbar">
    <router-link to="/home" :class="checkRoute('/home')">Home</router-link>
    <router-link to="/about" :class="checkRoute('/about')">About</router-link>
    <router-link to="/contact" :class="checkRoute('/contact')">Contact</router-link>
    <router-link to="/logout" class="logout">Log Out</router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    checkRoute(route) {
      return this.$route.path === route ? "current-nav" : "";
    },
  },
};
</script>

<style scoped>
.logout {
  margin-left: auto;
}
.navbar {
  background-color: var(--bg-color-main-dark);
  display: flex;
  flex-direction: row;
  /* padding: 0.5rem 1rem; */
}

.navbar a {
  position: relative;
  background-color: var(--bg-color-main);
  color: var(--text-color-main);
  display: inline-block;
  padding: 1rem;
  text-align: center;
}

.navbar .current-nav::after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  width: 100%;
  height: 10%;
  background: var(--text-color-main);
}

.navbar a:active {
  background-color: var(--bg-color-main-dark);
}
</style>
