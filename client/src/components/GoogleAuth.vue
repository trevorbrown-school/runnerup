<template>
  <button @click="isSignedIn == false && onAuthChange(isSignedIn)">
    <i class="fab fa-google"></i>
    <span style="margin-left: 1rem;">Google</span>
  </button>
</template>

<script>
export default {
  name: "GoogleAuth",
  data() {
    return {
      auth: { ...this.$store.state.auth },
      isSignedIn: false,
    };
  },
  methods: {
    async onAuthChange(isSignedIn) {
      if (!isSignedIn) await this.auth.signIn();
      else this.auth.signOut();
      this.$store.state.isSignedIn = this.auth.isSignedIn;
      this.isSignedIn = this.auth.isSignedIn;

      if (this.isSignedIn) this.$router.push("home");
    },
  },
  mounted() {
    // console.log(window.gapi);
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "250456254334-ftjm0p2a9om31g16btupt44qmhoqqoff.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.$store.state.auth = this.auth;
          //   this.onAuthChange(this.auth.isSignedIn.get());
        });
    });
  },
};
</script>

<style scoped>
</style>
