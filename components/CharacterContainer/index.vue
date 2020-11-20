<template>
  <section class="character-container">
    <Player />
  </section>
</template>
<script>
export default {
  name: "QuizContainer",
};
</script>
<style lang="scss" scoped>
.character-container {
  position: relative;
  width: 95vw;
  margin-left: 5%;
  &:before {
    content: "";
    display: block;
    padding-top: 19.73%;
  }
}
</style>
