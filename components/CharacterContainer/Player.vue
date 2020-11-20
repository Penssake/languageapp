<template>
  <div
    :class="start ? 'character character--show' : 'character'"
    :style="{
      'background-image': 'url(' + imageImport + ')',
    }"
  >
  </div>
</template>
<script>
import backgroundImage from "~/assets/sprites/joint-sprite.png";
import { mapState } from "vuex";

export default {
  data() {
    return {
      position: 1030,
    };
  },
  computed: {
    ...mapState("timer", ["start"]),
    imageImport() {
      return backgroundImage;
    },
  },
};
</script>
<style lang="scss" scoped>
.character {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  &--show {
    animation: sprite 1.5s steps(19) infinite;
    @include sprite-movement(sprite);
  }
}
</style>
