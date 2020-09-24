<template>
  <button @click="isSignedIn == false && onAuthChange()">
    <i class="fab fa-google"></i>
    <span style="margin-left: 1rem">Google</span>
  </button>
</template>

<script>
export default {
  name: "GoogleAuth",
  data() {
    return {
      auth: null,
      isSignedIn: false,
      profile: {},
    };
  },
  methods: {
    async onAuthChange() {
      const { isSignedIn } = this;

      if (!isSignedIn) await this.auth.signIn();
      else await this.auth.signOut();

      this.isSignedIn = this.auth.isSignedIn;
      if (isSignedIn) this.$router.push("home");
    },
  },
  mounted() {
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId:
          "250456254334-ftjm0p2a9om31g16btupt44qmhoqqoff.apps.googleusercontent.com",
        scope: "email",
      });

      this.auth = window.gapi.auth2.getAuthInstance();
      this.profile = this.auth.currentUser.get().getBasicProfile();
      console.log(this.profile.getName());
    });
  },
};
</script>

<style scoped>
</style>
