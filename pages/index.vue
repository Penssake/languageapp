<template>
  <div
    class="level-one-container"
    :style="{
      'background-image': 'url(' + imageImport + '), url(' + imageImport + ')',
    }"
  >
    <LevelModal />
    <Level />
    <ResultsModal />
  </div>
</template>

<script>
import image from "@/assets/images/tree-line-min.png";

export default {
  data() {
    return {
      imageImport: image,
    };
  },
};
</script>
<style lang="scss">
.level-one-container {
  height: 100%;
  background-size: 400%, 300%;
  background-repeat: no-repeat, no-repeat;
  background-position-y: bottom, bottom;
  background-position-y: left, left;
  .game-modal,
  .game-modal__content {
    width: 100%;
    height: 100%;
    transition: height 1s, width 1s;
  }
  .game-modal {
    position: fixed;
    left: 0;
    top: 0;
    background-color: $modal-bg;
    &__heading,
    &__percentage {
      font-size: $large-font-size;
    }
    &__content {
      @include flex(column, center, center);
    }
    &--closed {
      display: none;
    }
    &__percentage {
      color: $accent-green;
    }
    &__percentage, &__score {
      margin-top: 0;
    }
  }
}
</style>