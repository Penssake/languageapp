export const state = () => ({
  dataBank: {},
  currentIndex: 0,
  currentGroup: {},
  levelComplete: false,
  levelIndex: 0,
  modalGreeting: "",
  modalInstructions: "",
  resultsText: "",
})

export const mutations = {
  ADD_DATA(state, data) {
    state.dataBank = data;
  },
  START_LEVEL(state) {
    state.currentGroup = state.dataBank.levels[state.levelIndex].selection[state.currentIndex];
    state.modalGreeting = state.dataBank.intros.greeting[state.levelIndex];
    state.modalInstructions = state.dataBank.intros.instructions[state.levelIndex];
    state.resultsText = state.dataBank.results.text;
  },
  UPDATE_INDEX(state, value) {
    state.currentIndex = value;
  },
  UPDATE_LEVEL_INDEX(state, value) {
    state.levelIndex = value;
  },
  NEXT_GROUP(state, newIndex) {
    state.currentGroup = state.dataBank.levels[state.levelIndex].selection[newIndex];
  },
  LEVEL_COMPLETE(state, value) {
    state.levelComplete = value;
  },
}

export const actions = {
  init({ commit }, data) {
    commit("ADD_DATA", data);
  },
  start({ commit }, level) {
    commit("LEVEL_COMPLETE", false);
    commit("START_LEVEL", level);
  },
  complete({ commit }, value) {
    commit("LEVEL_COMPLETE", value);
  },
  update({ state, commit }, index) {
    let newIndex = index += 1;
    commit("UPDATE_INDEX", index)
    if (state.currentGroup.final) {
      // let levelIndex = state.levelIndex;
      // levelIndex += 1;
      // commit("UPDATE_LEVEL_INDEX", levelIndex)
      commit("LEVEL_COMPLETE", true);
    } else commit("NEXT_GROUP", newIndex);
  },
  reset({ state, commit }, index) {
    commit("UPDATE_LEVEL_INDEX", 0)
    commit("UPDATE_INDEX", 0)
    commit("LEVEL_COMPLETE", true);
  }
}