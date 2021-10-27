<template>
    <div class="app__container">
        <main class="">
            <Nav />
            <!-- <Counter v-model="count"/>
            <Button v-model="count">
                <template v-slot:prefix-icon>
                    <svg width="22" height="20" viewBox="-3 -3 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                </template>
            </Button>
            <Price v-bind="product.price" /> -->
        </main>
        <!-- <footer class="attribution">
            <Attribution />
        </footer> -->
        <router-view></router-view>
    </div>
</template>

<script>
import Attribution from "./components/Attribution.vue"
import Counter from "./components/Counter.vue"
import Button from "./components/Button.vue"
import Price from "./components/Price.vue"
import Nav from "./components/Nav.vue"
import Overlay from "./components/Overlay.vue"
import Popover from "./components/Popover.vue"

export default {
    components: {
        Attribution,
        Counter,
        Price,
        Nav,
        Overlay,
        Popover,
        Button
    },
    data() {
        return {
            count: 0,
            product: {
                brand: `Sneaker Company`,
                title: `Fall Limited Edition Sneakers`,
                description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
                price: {
                    mrp: 325,
                    discount: 15
                }
            },
            nav: [ 'Collections', 'Men', 'Women', 'About', 'Contact' ]
        }
    },
    methods: {},
    computed: {}
}
</script>

<style>

</style>