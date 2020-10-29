export const state = () => ({
    start: false,
    currentTime: 180
})

export const mutations = {
    START_TIMER(state, value) {
        state.start = value;
    },
    SET_TIMER(state, value) {
        state.currentTime = value;
    },
    DECREMENT_TIME(state, newTime) {
        state.currentTime = newTime;
    }
}

export const actions = {
    startTimer({ commit }, value) {
        commit("START_TIMER", value);
    },
    setTimer({ commit }, value) {
        commit("SET_TIMER", value);
    },
    decrement({ state, commit }) {
        let newTime = state.currentTime;
        newTime -= 1;
        commit("DECREMENT_TIME", newTime);
    }
}