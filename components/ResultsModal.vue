<template>
  <div :class="results ? 'game-modal' : 'game-modal game-modal--closed'">
    <div class="game-modal__content">
      <h1 class="game-modal__heading">{{ resultsText }}</h1>
      <p class="game-modal__score">{{ correct }} / {{ total }}</p>
      <p class="game-modal__percentage">{{ percent }}%</p>
      <Button @closeModal="closeModal" linkText="Continuer!" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "introModal",
  computed: {
    ...mapState("modal", ["resultsText", "heading"]),
    ...mapState("game", ["results", "total", "correct"]),
    percent() {
      return ((this.correct / this.total) * 100).toFixed();
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch("game/start");
      this.$store.dispatch("game/results", false);
    },
  },
};
</script>