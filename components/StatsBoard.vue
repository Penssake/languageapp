<template>
  <div class="stats-container">
    <!-- <Timer /> -->
    <ul>
      <li>level: {{ levelNum }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "statsBoard",
  computed: {
    ...mapState("game", ["levelNum"]),
  },
};
</script>
<style lang="scss">
.stats-container {
  font-weight: 400;
  padding: 0 1rem 0 1rem;
  height: 6rem;
  font-size: $primary-font-size;
  ul {
    width: 13rem;
    padding: 0.8rem;
    margin-left: 1rem;
    background: $gradient;
    border: $accent-border;
  }
  @include flex(null, flex-end, center);
  @include respond(tab-port) {
    height: 9rem;
    font-size: $large-font-size;
    ul {
      width: 15rem;
    }
  }
  @include respond(desktop) {
    height: 10rem;
    ul {
      width: 17rem;
    }
  }
}
</style>
