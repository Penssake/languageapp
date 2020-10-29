<template>
  <div class="level">
    <StatsBoard />
    <QuizContainer />
    <CharacterContainer />
  </div>
</template>
<script>
export default {
  name: "level",
};
</script>
<style lang="scss" scoped>
.level {
  height: 100%;
  @include flex(column, space-between, null);
}
</style>