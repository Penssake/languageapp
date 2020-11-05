<template>
  <div :class="levelComplete ? 'game-modal' : 'game-modal game-modal--closed'">
    <div class="game-modal__content">
      <h1 class="game-modal__heading">{{ modalGreeting }}</h1>
      <p>{{ modalInstructions }}</p>
      <Button @closeModal="closeModal" linkText="Commencer!" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "introModal",
  computed: {
    ...mapState("modal", ["modalGreeting", "modalInstructions"]),
    ...mapState("game", ["levelComplete"]),
  },
  methods: {
    closeModal() {
      this.$store.dispatch("game/complete", false);
    },
  },
};
</script>