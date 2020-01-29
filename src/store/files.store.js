import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import API from '../config/api';

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
            if (!this.state.data.vendors) {
                const res = await axios.get(API.host + API.route.getFiles);
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