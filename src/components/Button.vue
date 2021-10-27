<template>
  <button class="add_to_cart" @click="$emit('btnClick')">
      <slot name="prefix-icon"></slot>
      <slot>Add to cart</slot>
  </button>
</template>

<script>
export default {
    emits: ['btnClick']
}
</script>

<style lang="scss">
@use '../styles/_functions' as *;

    button.add_to_cart {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: rem(14);
        border-radius: rem(10);
        background-color: var(--orange);
        color: var(--white);
        font-size: rem(16);
        font-weight: 700;
        padding: rem(18);
        &:active,
        // &:focus,
        &:hover {
            opacity: 0.75;
        }
        svg {
            transform: scale(0.8);
            path{
                fill: var(--white);
            }
        }
        box-shadow: rgb(255 125 26 / 5%) 0px 4px 1px,
                    rgb(255 125 26 / 5%) 0px 10px 2px -4px,
                    rgb(255 125 26 / 10%) 0px 22px 4px -12px,
                    rgb(255 125 26 / 8%) 0px 38px 8px -20px,
                    rgb(255 125 26 / 6%) 0px 44px 16px -24px;
        // box-shadow: rgb(255 0 0) 0px 2px 1px,
        //             rgb(0 255 0) 0px 4px 2px -1px,
        //             rgb(0 0 255) 0px 10px 4px -2px,
        //             rgb(255 255 0) 0px 24px 8px -4px,
        //             rgb(0 255 255) 0px 44px 16px -16px;
        // box-shadow:red 0px 4px 1px -1px,
        //         lime 0px 10px 2px -4px,
        //         blue 0px 22px 4px -12px,
        //         yellow 0px 38px 8px -20px,
        //         cyan 0px 48px 16px -24px
    }
</style>