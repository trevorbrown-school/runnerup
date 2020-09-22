import { createStore } from 'vuex';
export default createStore({
    state() {
        return {
            auth: 'Hello!',
            isSignedIn: false,
        };
    },
});
