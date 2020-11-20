<template>
  <section>
    <p>{{ currentGroup.question }}</p>
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "CurrentQuestion",
  computed: mapState("game", ["currentGroup"]),
};
</script>
<style lang="scss" scoped>
section {
  @include flex(column, center, null);
  p {
    border-bottom: 2px solid $accent-green;
  }
}
</style>