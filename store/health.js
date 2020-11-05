export const state = () => ({
  hitPoints: 8,
  playerLevel: 1
})

export const mutations = {
  DECREMENT_HITPOINTS(state, newHitPoints) {
    state.hitPoints = newHitPoints;
  },
  GAME_OVER(state, value) {
    state.gameOver = value;
  },
  RESTART_GAME(state) {
    state.hitPoints = 8;
    state.playerLevel = 0;
    state.gameOver = false;

  }
}

export const actions = {
  decrement({ state, commit }) {
    let newHitPoints = state.hitPoints;
    if (newHitPoints) {
      newHitPoints -= 1;
      commit("DECREMENT_HITPOINTS", newHitPoints)
    }
  },
  reset({ commit }) {
    commit("RESTART_GAME")
  }
}