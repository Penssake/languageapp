<template>
  <div :class="final ? 'game-modal' : 'game-modal game-modal--closed'">
    <div class="game-modal__content">
      <h1 class="game-modal__heading">{{ finalModal.heading }}</h1>
      <div class="game-modal__note">
        <p>{{ finalModal.note }}</p>
        <Button
          @closeModal="handleContinue"
          :linkText="finalModal.buttonText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "finalModal",
  computed: {
    ...mapState("modal", ["finalModal"]),
    ...mapState("game", ["final"]),
  },
  data() {
    return {
      continue: false,
    };
  },
  methods: {
    handleContinue() {
      this.$store.dispatch("game/modalReset", {
        value: true,
        name: "opening",
      });
      this.$store.dispatch("game/modalReset", {
        value: false,
        name: "final",
      });
    },
  },
};
</script>
