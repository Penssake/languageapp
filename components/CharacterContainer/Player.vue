<template>
  <div
    class="player"
    :style="{
      'background-image': 'url(' + imageImport + ')',
      backgroundPosition: `${playerDimensions.x}, ${playerDimensions.y}`,
    }"
  ></div>
</template>
<script>
import backgroundImage from "~/assets/sprites/spritesheet.png";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("player", ["playerDimensions"]),
    imageImport() {
      return backgroundImage;
    },
  },
};
</script>
<style lang="scss" scoped>
.player {
  overflow: hidden;
  background-size: cover;
  width: 1.6rem;
  height: 5rem;

  @include respond(tab-port) {
    width: calc(1.5rem * 2);
    height: calc(5rem * 2);
  }
  @include respond(desktop) {
    width: calc(1.5rem * 3);
    height: calc(5rem * 3);
  }
}
</style>