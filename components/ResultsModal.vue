<template>
  <div :class="modalOpen ? 'game-modal' : 'game-modal game-modal--closed'">
    <div class="game-model__content">
      <p>{{ resultsText }}</p>
      <!-- <Link to="/game" @closeModal="closeModal" linkText="Continuer!" /> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "introModal",
  data() {
    return {
      modalOpen: false,
    };
  },
  computed: mapState("game", ["resultsText"]),
  methods: {
    closeModal() {
      this.modalOpen = !this.modalOpen;
    },
  },
};
</script>