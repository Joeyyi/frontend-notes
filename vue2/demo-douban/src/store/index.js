import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movieDetail: {},
        detailIsShown: false,
        localData: JSON.parse(localStorage.getItem('user')) || []
    },
    getters: {
        getMovieDetail: state => {
            return state.movieDetail;
        },
        // getters只接受默认参数state,其他getters，不能随意传入参数。
        //要使用高阶函数，返回的函数接受用户的参数id。
        //见vuex官方demo https://vuex.vuejs.org/getters.html
        getLocalId: (state, getters) => (alt) => {
            return state.localData.some(item => {
                return item.alt == alt; 
            });
        },
        getLocalData: (state) => {
            return state.localData;
        }
    },
    mutations: {
        setMovieDetail: (state, payload) => {
            state.movieDetail = payload;
        },
        setVisibility: (state, payload) => {
            state.detailIsShown = payload;
        },
        setLocalData: (state, brief) => {
            var index = state.localData.findIndex((item, index) => {
                return item.alt == brief.alt;
            });
            if( index > -1) {
                state.localData.splice(index, 1);
            } else {
                state.localData.push(brief);
            }
            localStorage.setItem('user', JSON.stringify(state.localData));
        }
    }
})
