<template>
  <div
    class="monster"
    :style="{ 'background-image': 'url(' + imageImport + ')' }"
  ></div>
</template>
<script>
import monsterImage from "~/assets/images/munster.png";

export default {
  data() {
    return {
      imageImport: monsterImage,
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.monster {
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
</style>