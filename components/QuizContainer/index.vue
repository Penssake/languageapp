<template>
  <div class="quiz-container">
    <CurrentQuestion :choisiData="currentGroup.question" />
    <Checkbox :choisiData="currentGroup.options" @input="handleAnswer" />
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
    ...mapState("game", ["currentGroup", "currentIndex"]),
    ...mapState("health", ["playerLevel"]),
  },
  methods: {
    handleAnswer(val) {
      if (val) {
        this.$store.dispatch("game/update", this.currentIndex);
      } else this.$store.dispatch("health/decrement");
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