import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // Files
        data: {},
    },
    mutations: {
        save (state, files) {
            state.data = files;
        }
    },
    actions: {
    },
    getters: {
    }
})