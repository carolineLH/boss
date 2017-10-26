import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export default new Vuex.Store ({
    state: {
        selectTab: '职位',
        positions:{}
    },
    mutations: {
        saveDetail (state, positions) {
            console.log("mutati"+positions)
            state.positions = positions
        }
    },
    actions: {
        getDetail ({ commit }, positions) {
            commit('saveDetail', positions)
        }
    },
    getters: {
        showDetail (state) {
            console.log(state.positions)
            return state.positions
        }
    }
})