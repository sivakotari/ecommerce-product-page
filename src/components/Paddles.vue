<template>
  <button
    class="paddle__start"
    @click="$emit('paddleClick', 'start')"
  >
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
  </button>
  <button
    class="paddle__end"
    @click="$emit('paddleClick', 'end')"
  >
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
  </button>
</template>

<script>
export default {
  mounted() {
    this.$parent.$el.style.position = 'relative';
  },
  beforeUnmount() {
    this.$parent.$el.style.position = 'static';
  },
  emits: ['paddleClick']

}
</script>

<style lang="scss">
@use '../styles/_functions' as *;

  .paddle {
    &__start,
    &__end {
      position: absolute;
      top: 50%;
      transform: translate(0,-50%);
      background-color: var(--white);
      border-radius: 50%;
      width: rem(40);
      height: rem(40);
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        svg {
          path {
            stroke: var(--orange);
          }
        }
      }
      
      svg {
        transform: scale(0.7);
        path {
          stroke-width: 4;
        }
      }
    }
    &__start {
      left: rem(16);
    }
    &__end {
      right: rem(16);
    }
  }

</style>