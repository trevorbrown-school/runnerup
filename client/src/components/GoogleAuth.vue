<template>
    <button @click="onAuthChange()">
        <i class="fab fa-google"></i>
        <span style="margin-left: 1rem">Google</span>
    </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'GoogleAuth',
    methods: {
        ...mapActions(['setAuth', 'signIn', 'signOut']),
        //TODO: This could probably be refactored to be much cleaner.
        async onAuthChange() {
            console.log(this.auth.isSignedIn.get());
            if (!this.auth.isSignedIn.get()) {
                await this.signIn();
                this.$router.push('home');
            }
            console.log(this.auth.isSignedIn.get());
            if (this.auth.isSignedIn.get()) this.$router.push('home');
        },
    },
    computed: {
        ...mapGetters(['profile', 'auth']),
    },
};
</script>

<style scoped></style>
