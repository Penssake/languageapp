<template>
  <div :class="results ? 'game-modal' : 'game-modal game-modal--closed'">
    <div class="game-modal__content">
      <h1 class="game-modal__heading">{{ heading }}</h1>
      <p class="game-modal__score">{{ correct }} / {{ total }}</p>
      <p class="game-modal__percentage">{{ percent }}%</p>
      <div class="game-modal__note">
        <p>{{ note }}</p>
        <Button @closeModal="handleContinue" :linkText="buttonText" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "resultsModal",
  computed: {
    ...mapState("modal", ["heading"]),
    ...mapState("game", [
      "total",
      "correct",
      "percent",
      "finalLevel",
      "results",
    ]),
    buttonText() {
      if (this.continue)
        return this.$store.state.modal.currentModal.buttonText.continue;
      else return this.$store.state.modal.currentModal.buttonText.discontinue;
    },
    note() {
      if (this.continue)
        return this.$store.state.modal.currentModal.note.continue;
      else return this.$store.state.modal.currentModal.note.discontinue;
    },
  },
  data() {
    return {
      continue: false,
      finalModal: false,
    };
  },
  watch: {
    percent(val) {
      if (val < 77) this.continue = false;
      else {
        this.$store.dispatch("health/inc");
        this.continue = true;
      }
    },
    finalLevel(val) {
      if (val) {
        this.continue = false;
        this.finalModal = true;
      }
    },
  },
  methods: {
    handleContinue() {
      if (!this.finalModal) {
        if (this.continue) this.$store.dispatch("game/start");
        else this.$store.dispatch("game/gameOver");
      } else {
        this.$store.dispatch("health/reset");
        this.$store.dispatch("game/gameOver");
        this.$store.dispatch("game/modalReset", {
          value: true,
          name: "final",
        });
      }
      this.$store.dispatch("game/modalReset", {
        value: false,
        name: "results",
      });
    },
  },
};
</script>
