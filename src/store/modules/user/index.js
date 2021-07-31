import axios from 'axios'

export default {
    namespaced: true,
    state: {
        users: null,
    },

    getters: {
        users(state) {
            return state.users
        },
    },

    mutations: {
        SET_USERS (state, users) {
            state.users = users
        },
    },

    actions: {
        async getUserList({ commit }) {
            const res = await axios.get('user/list')

            commit('SET_USERS', res.data.users)
        },
    }
}