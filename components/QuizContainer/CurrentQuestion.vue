<template>
  <section>
    <p>{{ choisiData }}</p>
  </section>
</template>
<script>
export default {
  name: "CurrentQuestion",
  props: {
    choisiData: {
      type: String,
      default: () => null,
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  @include flex(column, center, null);
  p {
    border-bottom: 2px solid $accent-green;
  }
}
</style>