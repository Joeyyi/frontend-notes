import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movieDetail: {},
        detailIsShown: false
    },
    getters: {
        getMovieDetail: state => {
            return state.movieDetail;
        }
    },
    mutations: {
        setMovieDetail: (state, payload) => {
            state.movieDetail = payload;
        },
        setVisibility: (state, payload) => {
            state.detailIsShown = payload;
        }
    }
})
