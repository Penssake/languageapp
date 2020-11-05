export const state = () => ({
  dataBank: {},
  currentIndex: 0,
  currentGroup: {},
  levelComplete: true,
  levelIndex: 0,
  results: false,

  correct: 0,
  total: 0
})

export const mutations = {
  ADD_DATA(state, data) {
    state.dataBank = data;
  },
  START_LEVEL(state) {
    state.currentGroup = state.dataBank.levels[state.levelIndex].selection[state.currentIndex];
    state.total = state.dataBank.levels[state.levelIndex].selection.length;
  },
  UPDATE_INDEX(state) {
    state.currentIndex += 1;
  },
  UPDATE_LEVEL_INDEX(state, value) {
    state.levelIndex = value;
  },
  NEXT_GROUP(state, value) {
    state.correct += value;
    state.currentGroup = state.dataBank.levels[state.levelIndex].selection[state.currentIndex];
  },
  LEVEL_COMPLETE(state, value) {
    state.levelComplete = value;
  },
  RESET_GAME(state) {
    state.currentIndex = 0,
      state.currentGroup = {},
      state.levelComplete = false,
      state.levelIndex = 0
  },
  RESULTS(state, value) {
    state.results = value
  }
}

export const actions = {
  init({ commit }, data) {
    commit("ADD_DATA", data);
  },
  start({ commit }) {
    commit("START_LEVEL");
  },
  complete({ commit }, value) {
    commit("LEVEL_COMPLETE", value);
  },
  results({ commit }, value) {
    commit("RESULTS", value);
  },
  update({ state, commit }, incr) {
    if (state.currentGroup.final) {
      let levelIndex = state.levelIndex;
      levelIndex += 1;
      commit("UPDATE_LEVEL_INDEX", levelIndex);
      commit("RESULTS", true);
    } else {
      commit("UPDATE_INDEX")
      commit("NEXT_GROUP", incr);
    }
  },
  gameOver({ commit }, reason) {
    commit("RESULTS", true);
    switch (reason) {
      case "time":
        commit("RESET_GAME");
        break;
      case "points":
        console.log("points")
        commit("RESET_GAME");
        break;
      default:
        break;
    }
    commit("START_LEVEL");
  }
}