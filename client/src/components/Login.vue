<template>
  <div class="login-container">
    <div class="login-main">
      <input type="email" name="ru-email" placeholder="Email" />
      <input type="password" name="ru-password" placeholder="Password" />
      <div class="buttons">
        <button @click="$router.push('home')" class="button btn-login">Login</button>
        <router-link to="/signup" class="button btn-signup">Sign Up</router-link>
      </div>
      <div class="buttons">
        <GoogleAuth class="button btn-google" />
      </div>
    </div>
  </div>
</template>

<script>
import GoogleAuth from "./GoogleAuth.vue";
export default {
  components: {
    GoogleAuth,
  },
};
</script>

<style scoped>
.login-container {
  position: relative;
  background-color: var(--body-color);
  color: var(--text-color-main);
  width: 30rem;
  height: 20rem;
  border-radius: 8px;
}
.buttons {
  display: flex;
  /* position: relative; */
  width: 80%;
  margin-top: 1rem;
}
.button {
  margin-right: 1rem;
  padding: 1rem;
  text-align: center;
  width: 50%;
  border-radius: 4px;
  font-size: 1.3rem;
}

.btn-login {
  margin-left: 0.7rem;
  background-color: var(--bg-color-main);
  color: var(--text-color-main);
}

.btn-signup {
  background-color: var(--text-color-main);
  color: var(--bg-color-main);
}

.btn-google {
  margin: 0 auto;
}

.login-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 100%;
  top: 12%;
  /* transform: translate(-50%, -50%); */
}

.login-main input {
  width: 80%;
  height: 2rem;
  margin-bottom: 1rem;
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-radius: 4px;
  padding: 1.4rem 1rem;
  font-size: 1.3rem;
}

.login-main input:focus {
  outline: none;
  background-color: var(--text-color-main);
  color: var(--bg-color-main-dark);
  box-shadow: -4px 8px 20px #b92834ad;
}
.login-main input:focus::placeholder {
  color: var(--bg-color-main-dark);
}
</style>