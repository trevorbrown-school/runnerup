<template>
  <div class="hero">
    <main class="hero-content">
      <div class="hero-splash">
        <div class="title-container">
          <TitleCard class="title" />
          <div class="subtitle">Fittness Reimagined</div>
        </div>
        <Login class="login" />
      </div>
    </main>
    <footer class="hero-footer">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum incidunt aliquam libero quisquam aperiam laudantium atque inventore. Eius, pariatur? Nostrum facilis earum dolor,
      mollitia fugit repellat doloremque vitae atque. Accusantium!
    </footer>
  </div>
</template>

<script>
import Login from "../Login.vue";
import TitleCard from "../TitleCard.vue";
export default {
  components: {
    Login,
    TitleCard,
  },
};
</script>

<style scoped>
.hero {
  background-color: var(--bg-color-main);
  position: relative;
  height: 100vh;
  color: var(--text-color-main);
}
.title-container {
  margin-right: 3rem;
  margin-bottom: 3rem;
}
@media only screen and (max-width: 600px) {
  .title-container {
    margin-top: 3rem;
    margin-left: 2.2rem;
    margin-bottom: 2rem;
  }
}

.title {
  align-self: center;
}

@keyframes subtitle {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.subtitle {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 3px;
  word-spacing: 20px;
  animation: subtitle 2s ease 0.5s;
  animation-fill-mode: both;
}

.hero-content {
  height: 85vh;
}
.hero-splash {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
}

.hero-footer {
  background-color: var(--bg-color-main-dark);
  height: 15vh;
  position: absolute;
  bottom: 0;
  padding: 2rem;
}
</style>
