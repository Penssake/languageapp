<template>
  <div
    class="level-one-container"
    :style="{
      'background-image': 'url(' + imageImport + '), url(' + imageImport + ')',
    }"
  >
    <Level />
    <LevelModal />
    <ResultsModal />
    <FinalModal />
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
    text-align: center;
    transition: height 1s, width 1s;
  }
  .game-modal {
    position: fixed;
    left: 0;
    top: 0;
    background-color: $modal-bg;
    &__heading,
    &__percentage {
      font-size: $xlarge-font-size;
    }
    &__content, &__note {
      @include flex(column, center, center);
    }
    &--closed {
      display: none;
    }
    &__percentage {
      color: $accent-green;
      margin: 1rem;
    }
  }
}
</style>
