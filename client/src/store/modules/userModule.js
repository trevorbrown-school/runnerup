export default {
    state: () => {
        return {
            auth: {},
            profile: {},
        };
    },
    getters: {
        profile: (state) => state.profile,
        auth: (state) => state.auth,
    },
    actions: {
        setAuth({ commit }, auth) {
            commit('setAuth', auth);
            commit('setProfile', auth);
        },
        signIn({ commit }) {
            commit('signIn');
        },
        async signOut({ commit }) {
            await commit('signOut');
        },
    },
    mutations: {
        setAuth(state, auth) {
            state.auth = auth;
        },
        setProfile(state, auth) {
            state.profile = auth.currentUser.get().getBasicProfile();
        },
        signIn(state) {
            state.auth.signIn();
        },
        signOut(state) {
            state.auth.signOut();
        },
    },
};
