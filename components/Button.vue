<template>
  <div class="play-link">
    <button @click="handleClick">{{ linkText }}</button>
  </div>
</template>
<script>
export default {
  name: "Link",
  methods: {
    handleClick() {
      this.$emit("closeModal");
      this.$store.dispatch("timer/setTimer", 180);
      this.$store.dispatch("timer/startTimer", true);
      this.$store.dispatch("game/start", this.playerLevel);
    },
  },
  props: {
    linkText: String,
  },
};
</script>
<style lang="scss" scope>
.play-link {
  margin: 0.6rem;
  width: 12rem;
  height: 3rem;
  background-color: $accent-blue;
  background-size: 300%;
  background-position: left;
  transition: all 400ms;
  text-align: center;
  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: $primary-font-color;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
  }
  &:focus,
  &:hover {
    background-position: right;
    color: $accent-green;
  }
}
</style>