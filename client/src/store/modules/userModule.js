export default {
    state: () => {},
    getters: {},
    actions: {},
    mutations: {},
};

/*
            window.gapi.load('client:auth2', () => {
                window.gapi.client
                    .init({
                        clientId: '250456254334-ftjm0p2a9om31g16btupt44qmhoqqoff.apps.googleusercontent.com',
                        scope: 'email',
                    })
                    .then(() => {
                        commit('setAuth', window.gapi.auth2.getAuthInstance());
                        commit('setProfile', window.gapi.auth2.getAuthInstance());
                    });
            });
            */
