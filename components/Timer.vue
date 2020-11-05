<template>
  <div
    :class="{
      timer: true,
      'timer timer--warning1': oneMinuteWarning,
      'timer timer--warning2': thirtySecondWarning,
      'timer timer--final': outOfTime,
    }"
  >
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="50" stroke="none" fill="none" />
      <text x="51%" y="59%" text-anchor="middle" stroke="none" fill="white">
        {{ formattedTime }}
      </text>
    </svg>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      countDown: 0,
      oneMinuteWarning: false,
      thirtySecondWarning: false,
      outOfTime: false,
      interval: 0,
      time: true,
    };
  },
  watch: {
    countDown(val) {
      let timeOut = setTimeout(
        () => this.$store.dispatch("timer/decrement"),
        1000
      );
      if (val > 0) {
        this.outOfTime = false;
        if (val <= 60) this.oneMinuteWarning = true;
        if (val <= 30) {
          this.oneMinuteWarning = false;
          this.thirtySecondWarning = true;
        }
        return timeOut;
      }
      if (val <= 0) {
        window.clearTimeout(timeOut);
        this.oneMinuteWarning = false;
        this.thirtySecondWarning = false;
        this.outOfTime = true;
        this.$store.dispatch("game/gameOver", "time");
      }
    },
    currentTime(val) {
      this.countDown = val;
    },
    start(val) {
      if (val) {
        this.countDown = this.currentTime;
        this.$store.dispatch("timer/startTimer", false);
      }
    },
  },
  computed: {
    ...mapState("timer", ["start", "currentTime"]),
    formattedTime() {
      const minutes = Math.floor(this.countDown / 60);
      let seconds = this.countDown % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.timer {
  padding: 0.7rem;
  background: $gradient;
  border: $accent-border;
  &--warning1 {
    background: $accent-red-opacity;
  }
  &--warning2 {
    animation: flash-red 1s infinite;
    @include flash-warning(flash-red);
  }
  &--final {
    background: $accent-red-opacity;
  }
}
</style>