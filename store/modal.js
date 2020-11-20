export const state = () => ({
    dataBank: {},
    modalGreeting: "",
    modalInstructions: "",
    currentModal: {
        heading: "",
        note: {},
        buttonText: {}
    },
    finalModal: {
        heading: "",
        note: "",
        buttonText: ""
    }
})

export const mutations = {
    ADD_DATA(state, data) {
        state.dataBank = data;
    },
    CURRENT_MODAL(state) {
        state.modalGreeting = state.dataBank.intros.greeting;
        state.modalInstructions = state.dataBank.intros.instructions;

        state.currentModal.heading = state.dataBank.results.result;
        state.currentModal.note = state.dataBank.results.note;
        state.currentModal.buttonText = state.dataBank.results.buttonText;

        state.finalModal.heading = state.dataBank.fini.result;
        state.finalModal.note = state.dataBank.fini.note;
        state.finalModal.buttonText = state.dataBank.fini.buttonText;
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