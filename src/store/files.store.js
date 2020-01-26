import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
        async getFiles ({ commit }) {
            if (!this.state.data.Vendors) {
                const res = await axios.get('http://localhost:3500/files/getAll');
                commit('save', res.data);
            }
        }
    },
    getters: {
        getAll: (state) => {
            return state.data;
        }
    }
})