const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' clicks';
    }
};

const mutations = {
    increment: (state, step) => {
        state.counter += step;
    },
    decrement: (state, step) => {
        state.counter -= step;
    }
};

const actions = {
    increment: (context, step) => {
        context.commit('increment', step);
    },
    decrement: (context, step) => {
        context.commit('decrement', step);
    },
    asyncIncrement: ({ commit }, args) => {
        setTimeout(() => {
            commit('increment', args.step);
        }, args.duration);
        
    },
    asyncDecrement: ({ commit }, args) => {
        setTimeout(() => {
            commit('decrement', args.step);
        }, args.duration);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}