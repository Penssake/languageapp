<template>
  <div
    class="app-container"
    :style="{ 'background-image': 'url(' + imageImport + ')' }"
  >
    <transition name="route-fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";
import image from "@/assets/images/phase-one-backdrop.png";
import dataFile from "@/assets/data/data.json";

export default {
  data() {
    return {
      imageImport: image,
    };
  },
  computed: mapState("health", ["playerLevel"]),
  created() {
    this.$store.dispatch("game/init", dataFile);
    this.$store.dispatch("game/start", this.playerLevel);
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  height: 100vh;
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
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.route-fade-enter-active,
.route-fade-leave-active {
  transition: opacity 400ms ease-in-out;
}

.route-fade-enter,
.route-fade-leave-active {
  opacity: 0;
}
</style>