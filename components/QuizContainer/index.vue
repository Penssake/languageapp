<template>
  <div class="quiz-container">
    <CurrentQuestion />
    <Checkbox @input="handleAnswer" />
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "QuizContainer",
  props: {
    choisiData: {
      type: String,
      default: () => null,
    },
  },
  computed: {
    ...mapState("game", ["currentIndex"]),
    ...mapState("health", ["hitPoints"]),
  },
  methods: {
    handleAnswer(val) {
      if (val) {
        this.$store.dispatch("game/update", 1);
      } else {
        this.$store.dispatch("game/update", 0);
        this.$store.dispatch("health/decrement");
        if (this.hitPoints === 0) {
          this.$store.dispatch("game/gameOver", "points");
          this.$store.dispatch("health/reset");
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.quiz-container {
  max-width: 300px;
  padding-left: 1rem;
  @include flex(null, space-between, null);
}
</style>
