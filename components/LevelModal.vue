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
  computed: mapState("game", [
    "modalGreeting",
    "modalInstructions",
    "levelComplete",
  ]),
  methods: {
    closeModal() {
      this.$store.dispatch("game/complete", false);
    },
  },
  mounted() {
    this.$store.dispatch("game/complete", true);
  },
};
</script>
<style lang="scss">
.game-modal,
.game-modal__content {
  width: 100%;
  height: 100%;
  transition: height 1s, width 1s;
}
.game-modal {
  position: fixed;
  left: 0;
  top: 0;
  background-color: $modal-bg;
  &__content {
    @include flex(column, center, center);
  }
  &--closed {
    display: none;
  }
}
</style>