<template>
  <div class="character-container">
    <Player />
    <Monster />
  </div>
</template>
<script>
export default {
  name: "QuizContainer",
};
</script>
<style lang="scss" scoped>
.character-container {
  @include flex(null, space-between, flex-end);
}
</style>