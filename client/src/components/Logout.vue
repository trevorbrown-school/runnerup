<template>
    <div class="logout">Logging out...</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    methods: mapActions(['signOut']),
    computed: mapGetters(['auth']),
    created() {
        this.signOut();
        // this.$router.push('/');
    },
};
</script>

<style></style>
