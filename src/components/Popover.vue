<template>
  <div
    class="popover-wrapper"
    id='popover-wrapper'
    :style= "{width: width}"
  >
      <slot name=header></slot>
      <slot>Your cart is empty</slot>
      <slot name=footer></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '22.5rem'
    }
  },
  methods: {
    clickOutside(el) {
      el.stopPropagation()
      // console.log(el.target.closest('#popover-wrapper'))
      // if(!el.target.closest('#popover-wrapper')) {
      //   this.$emit('clickoutside');
      // }
      if (!this.$el.contains(el.target)){
          // this.$emit('clickoutside');
      }

    }
  },
  created() {
    this.$nextTick(() => {
      document.addEventListener('click', this.clickOutside)

    }, 5000

    )
  },
  mounted(){
    // console.log(this.$parent)
    this.$parent.$el.style.position = 'relative';
    // console.log(this.$parent.$el.style.position)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickOutside)
    this.$parent.$el.style.position = 'static';
  }

}
</script>

<style lang="scss">
@use '../styles/_functions' as *;

  .popover-wrapper {
    position: absolute;
    width: 100%;
    top: calc(100% + 1.875rem);
    left: 70%;
    transform: translate(-50%, 0);
    border-radius: rem(10);
    box-shadow: 0 2px 10px 2px gray;
    background-color: var(--white);
    z-index: 998;
  }

  .popover__header{
    border-bottom: rem(1) solid var(--border-grayish-blue);
  }

  .popover__header,
  .popover__footer,
  .popover__body {
    padding: rem(20) rem(25);
  }
  .popover__footer {
    padding: rem(25);
  }
</style>