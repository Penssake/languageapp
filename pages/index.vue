<template>
  <div
    class="level-one-container"
    :style="{
      'background-image': 'url(' + imageImport + '), url(' + imageImport + ')',
    }"
  >
    <LevelModal />
    <Level />
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
<style lang="scss" scoped>
.level-one-container {
  height: 100%;
  background-size: 400%, 300%;
  background-repeat: no-repeat, no-repeat;
  background-position-y: bottom, bottom;
  background-position-y: left, left;
}
</style>