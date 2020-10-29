export const state = () => ({
  hitPoints: 8,
  playerLevel: 1,
  gameOver: false
})

export const mutations = {
  DECREMENT_HITPOINTS(state, newHitPoints) {
    state.hitPoints = newHitPoints;
  },
  GAME_OVER(state, value) {
    state.gameOver = value
  },
  RESTART_GAME(state, { stateReset }) {
    state = stateReset
  }
}

export const actions = {
  decrement({ state, commit }) {
    let newHitPoints = state.hitPoints;
    if (newHitPoints) {
      newHitPoints -= 1;
      commit("DECREMENT_HITPOINTS", newHitPoints)
    } else {
      commit("GAME_OVER", true)
    }
  },
  reset({ commit }) {
    let stateReset = {
      hitPoints: 8,
      playerLevel: 0,
      gameOver: false
    }
    commit("RESTART_GAME", { stateReset })
  }
}