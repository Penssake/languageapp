<template>
  <div class="app-container">
    <Nuxt />
  </div>
</template>
<script>
import { mapState } from "vuex";
import levelData from "@/assets/data/level.json";
import modalData from "@/assets/data/modal.json";

export default {
  computed: mapState("game", ["levelComplete"]),
  created() {
    this.$store.dispatch("game/init", levelData);
    this.$store.dispatch("game/start");
    this.$store.dispatch("modal/initModal", modalData);
    this.$store.dispatch("modal/setModal", 0);
    this.$store.dispatch("game/modalReset", {
      value: true,
      name: "opening",
    });
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  height: 100vh;
  background-image: url("~@/assets/images/bg-sm.png");
  background-repeat: no-repeat;
  background-size: 300% 100%;
  background-position-y: bottom;
  background-position-x: left;
  font-family: "Segoe UI", Roboto, Arial, sans-serif;
  font-weight: $primary-font-weight;
  font-size: $primary-font-size;
  letter-spacing: $primary-letter-spacing;
  color: $primary-font-color;
  animation: bg-animation 300s infinite alternate;
  @include moving-backgrounds(bg-animation);
  @include respond(bg-resolution) {
    background-image: url("~@/assets/images/bg-lg.png");
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
