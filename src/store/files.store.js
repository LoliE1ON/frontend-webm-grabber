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
    },
    mutations: {
        save (state, files) {
            state.data = files;
        },
        saveWithoutFiles (state, boards) {
            state.boards = boards;
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

                commit('save', res.data);
                commit('saveWithoutFiles', boards);

            }
        }
    },
    getters: {
        getAll: (state) => {
            return state.data;
        },
        getBoards: (state) => {
            return state.boards;
        }
    }
})