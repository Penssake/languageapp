export const state = () => ({
  dataBank: {},
  currentIndex: 0,
  currentGroup: {},
  levelIndex: 0,
  levelNum: 0,

  opening: true,
  results: false,
  final: false,

  finalLevel: false,
  correct: 0,
  total: 0,
  percent: 0
})

export const mutations = {
  ADD_DATA(state, data) {
    state.dataBank = data;
  },
  START_LEVEL(state) {
    state.correct = 0;
    state.percent = 0;
    state.finalLevel = state.dataBank.levels[state.levelIndex].finalLevel;
    state.levelNum = state.dataBank.levels[state.levelIndex].levelNum;
    state.currentGroup = state.dataBank.levels[state.levelIndex].selection[state.currentIndex];
    state.total = state.dataBank.levels[state.levelIndex].selection.length;
  },
  UPDATE_INDEX(state) {
    state.currentIndex += 1;
  },
  UPDATE_LEVEL(state, value) {
    state.currentIndex = 0;
    state.levelIndex = value;
  },
  UPDATE_PERCENT(state, correctInc) {
    state.correct += correctInc;
    state.percent = parseInt(((state.correct / state.total) * 100).toFixed(), 10);
  },
  NEXT_GROUP(state) {
    state.currentGroup = state.dataBank.levels[state.levelIndex].selection[state.currentIndex];
  },
  // game reset
  RESET_GAME(state) {
    state.currentIndex = 0,
      state.currentGroup = {},
      state.opening = false,
      state.levelIndex = 0
  },
  // modal resets
  OPENING(state, value) {
    state.opening = value;
  },
  FINAL(state, value) {
    state.final = value
  },
  RESULTS(state, value) {
    state.results = value
  },
}

export const actions = {
  init({ commit }, data) {
    commit("ADD_DATA", data);
  },
  start({ commit }) {
    commit("START_LEVEL");
  },
  modalReset({ commit }, { value, name }) {
    if (name === "opening") commit("OPENING", value);
    if (name === "results") commit("RESULTS", value);
    if (name === "final") commit("FINAL", value);
  },
  update({ state, commit }, correctInc) {
    commit("UPDATE_PERCENT", correctInc);
    if (state.currentGroup.finalQuestion) {
      let levelIndex = state.levelIndex;
      levelIndex += 1;
      commit("UPDATE_LEVEL", levelIndex);
      commit("RESULTS", true);
    } else {
      commit("UPDATE_INDEX")
      commit("NEXT_GROUP", correctInc);
    }
  },
  gameOver({ commit }) {
    commit("RESULTS", true);
    commit("RESET_GAME");
    commit("START_LEVEL");
  }
}