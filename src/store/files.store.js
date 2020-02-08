import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import API from '../config/api';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // Files
        data: {},

        // Boards without files
        boards: {},

        // Descriptions files for search
        descriptions: {},
    },
    mutations: {
        save (state, files) {
            state.data = files;
        },
        saveWithoutFiles (state, boards) {
            state.boards = boards;
        },
        saveDescriptionsFiles (state, descriptions) {
            state.descriptions = descriptions;
        }
    },
    actions: {
        async getFiles ({ commit }) {
            if (!this.state.data.vendors) {
                const res = await axios.get(API.host + API.routes.getFiles);

                // Generate only boards, without files
                const boards = Object.entries(res.data.vendors)
                    .map(board => {
                        return {
                            vendor: board[0],
                            boards: board[1].map(b => {
                                return {
                                    name: b.name,
                                    description: b.description,
                                    total: b.threads.length && b.threads.reduce((total, thread) => total+thread.files.length, 0)
                                }
                            })
                        }
                    });

                const descriptions = Object.entries(res.data.vendors).
                map(v => v[1].reduce((acc, b) => [...acc, b.threads.map(t => t.files.map(f => f)).flat()], []).flat()).flat();

                commit('save', res.data);
                commit('saveWithoutFiles', boards);
                commit('saveDescriptionsFiles', descriptions);

            }
        }
    },
    getters: {
        getAll: (state) => {
            return state.data;
        },
        getBoards: (state) => {
            return state.boards;
        },
        getDescriptionsFiles: (state) => {
            return state.descriptions;
        }
    }
})