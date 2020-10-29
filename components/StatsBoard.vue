<template>
  <div class="stats-container">
    <Timer />
    <ul>
      <li>level: {{ playerLevel }}</li>
      <li>hit points: {{ hitPoints }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "statsBoard",
  computed: {
    ...mapState("health", ["hitPoints", "playerLevel"]),
  },
};
</script>
<style lang="scss">
.stats-container {
  font-size: 1.8rem;
  font-weight: 400;
  padding: 0 1rem 0 1rem;
  height: 10rem;
  @include flex(null, space-between, center);
}
ul {
  width: 17rem;
  padding: 0.8rem;
  background: $gradient;
  border: $accent-border;
}
</style>