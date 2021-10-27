<template>
    <div class="product_price">
        <div class="discounted_price">${{ discounted_price.toFixed(2) }}</div>
        <div class="discount">{{ discount }}%</div>
        <div class="mrp"><s>${{ mrp.toFixed(2) }}</s></div>
    </div>
</template>

<script>
export default {
    props: {
        mrp: Number,
        discount: Number
    },
    computed: {
        discounted_price() {
            return this.mrp - this.mrp * this.discount / 100
        }
    }
}
</script>

<style lang="scss">
@use '../styles/_functions' as *;

    .product_price {
        display: flex;
        // padding: rem(20);
        column-gap: rem(16);
        align-items: center;
        flex-wrap: wrap;
    }
    .discounted_price {
        font-weight: 700;
        font-size: rem(30);
        color: var(--black);
    }
    .discount {
        font-weight: 700;
        color: var(--orange);
        background-color: var(--pale-orange);
        padding: rem(1) rem(10);
        border-radius: rem(5);
    }
    .mrp {
        font-weight: 700;
        color: var(--grayish-blue);
        margin-left: auto;
    }

    @media screen and (min-width: 376px) {
        .mrp {
            width: 100%;
        }
    }
</style>