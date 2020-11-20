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
  },
  methods: {
    handleAnswer(val) {
      if (val) {
        this.$store.dispatch("game/update", 1);
      } else this.$store.dispatch("game/update", 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.quiz-container {
  max-width: 400px;
  padding-left: 1rem;
  @include flex(null, space-between, null);
}
</style>
