<template>
    <div class="cart-wrapper">
        <button
            type="button"
            class="cart"
            aria-label="open cart"
            @click="togglePopover"
        >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
            <span class="quantity" v-if="totalCartItems">{{ totalCartItems }}</span>
        </button>
        <Popover v-if="showPopover" @clickoutside="togglePopover">
            <template v-slot:header>
                <h4 class='popover__header'>Cart</h4>
            </template>
            <div class="popover__body">
                <div class="cart__item" v-for="(prop, obj) in cart" :key="prop">
                    <img src="images/image-avatar.png" alt="picture of cart item">
                    <div class="cart__item_details">
                        <span>{{obj}}</span>
                        <span class="cart__item_title">{{ cart[obj].product.title }}</span>
                        <span class="cart__item_price_quantity">{{ cart[obj].product.price.discounted_price }} x {{ obj.quantity }}</span>
                        <span class="cart__item_price_total">{{ cart[obj].product.price.discounted_price * obj.quantity }}</span>
                    </div>
                </div>
            </div>

            <template v-slot:footer>
                <div class="popover__footer">
                    <Button @onBtnClick="onBtnClick">
                        Checkout
                    </Button>
                </div>
            </template>
        </Popover>
    </div>
</template>



<script>
import { computed } from 'vue';
import { cart, getters, actions, mutations, showPopover } from '../store/useCart';
import Popover from "./Popover.vue";
import Button from "./Button.vue";

export default {
    setup() {
        const totalCartItems = computed(() => getters.totalCartItems())
        const addToCart = computed(() => actions.addToCart)
        const togglePopover = computed(() => mutations.togglePopover)
        return { cart, totalCartItems, addToCart, showPopover, togglePopover };
    },
    components : {
        Popover,
        Button
    },
    methods: {
        handleclickoutside() {
            console.log(this.showPopover)
        },
        onBtnClick() {
            console.log(this.totalCartItems)
            console.log('btn click')

        }
    }
}
</script>



<style lang="scss">
@use "../styles/_functions" as *;

.cart-wrapper {
    margin-inline-start: auto;
    margin-bottom: rem(10);
    transition: color .1s ease-in-out;
    &:hover,
    &:active,
    &:focus {
        path {
            fill: var(--black);
        }
    }
}

.cart {
    display: grid;
    grid-template-columns: 10px 10px 10px;
    grid-template-rows: 3px 3px 4px 4px 4px 8px;
    
    svg {
        grid-column: 1 / span 2;
        grid-row: 3 / span 7;
    }
}

.quantity {
    background-color: var(--orange);
    color: var(--white);
    font-weight: 700;
    font-size: rem(10);
    border-radius: rem(25);
    padding: 0 rem(6);

    grid-column: 2 / span 3;
    grid-row: 1 / span 3;
}

</style>