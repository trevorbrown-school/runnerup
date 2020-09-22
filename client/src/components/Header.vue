<template>
  <div class="header">
    <div class="title">
      <TitleCard />
    </div>
  </div>
</template>

<script>
import TitleCard from "./TitleCard.vue";
export default {
  components: {
    TitleCard,
  },
};
</script>

<style scoped>
.header {
  position: relative;
  height: 30vh;
  background: var(--bg-color-main);

  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.title {
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 600px) {
  .header {
    clip-path: none;
  }
}
</style>