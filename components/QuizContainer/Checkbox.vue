<template>
  <fieldset :key="reset" class="choisi-container">
    <legend>{{ currentGroup.question }}</legend>
    <label
      v-for="option in currentGroup.options"
      :key="option.key"
      :class="
        selected.key
          ? `choisi-container__option choisi-container__option--${option.correct}`
          : 'choisi-container__option'
      "
    >
      <input
        type="radio"
        :name="option.text"
        :value="option.text"
        :disabled="disabled"
        @change="handleChange(option)"
      />
      <span>{{ option.text }}</span>
    </label>
  </fieldset>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "CheckBox",
  computed: mapState("game", ["currentGroup"]),
  data() {
    return {
      reset: false,
      selected: {},
      true: false,
      disabled: false,
    };
  },
  methods: {
    handleChange(val) {
      this.selected = val;
      this.disabled = true;
      setTimeout(() => {
        this.$emit("input", val.correct);
        this.reset = !this.reset;
        this.disabled = false;
        this.selected = {};
      }, 900);
    },
  },
};
</script>
<style lang="scss">
.choisi-container {
  &__option {
    @include flex(null, center, center);

    cursor: pointer;
    margin: 0.6rem;
    width: 12rem;
    height: 3rem;
    border: $accent-border;
    background: $gradient;
    background-size: 300%;
    background-position: left;
    transition: all 400ms;

    &:focus,
    &:hover {
      background-position: right;
      color: $accent-green;
    }
    &--true {
      border: $accent-border-true;
    }
    &--false {
      border: $accent-border-false;
    }
  }
}
</style>
