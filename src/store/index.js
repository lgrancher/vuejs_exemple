import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    compteur: 0
};

const getters = {
    compteur () {
        return state.compteur;
    }
};

const mutations = {
    compteur (state, value) {
        state.compteur = value;
    }
};

const actions =  {
    updateCompteur ({commit}, value) {
        commit('compteur', value)
    }
};
    
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});