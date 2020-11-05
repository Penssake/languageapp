export const state = () => ({
    dataBank: {},
    modalGreeting: "",
    modalInstructions: "",
    resultsText: ""
})

export const mutations = {
    ADD_DATA(state, data) {
        state.dataBank = data;
    },
    CURRENT_MODAL(state, index) {
        state.modalGreeting = state.dataBank.intros.greeting[index];
        state.modalInstructions = state.dataBank.intros.instructions[index];
        state.resultsText = state.dataBank.fini.result;
    },
}

export const actions = {
    initModal({ commit }, data) {
        commit("ADD_DATA", data);
    },
    setModal({ commit }, index) {
        commit("CURRENT_MODAL", index);
    },
}