<template>
  <main class="product__detils-wrapper">
    <section class="product__images">
      <Carousel :data="product.images"/>
    </section>
    <section class="product__details">
      <div class="product__brand">{{ product.brand }}</div>
      <h1 class="product__title" @click="handleClick">{{ product.title }}</h1>
      <p class="product__description">{{ product.description }}</p>
      <div class="product__price__wrapper">
        <Price v-bind="product.price"/>
      </div>
      <div class="product__item__counter">
        <Counter v-model="count"/>
      </div>
      <div class="product__action__button">
        <Button @btnClick='btnClickHandler'>
          <span>Add to cart</span>
          <template v-slot:prefix-icon>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
          </template>
        </Button>
      </div>
    </section>
  </main>
</template>

<script>
import { computed } from  'vue'
import { getters } from '../store/useProduct'
import { actions } from '../store/useCart'
import Counter from "./Counter.vue"
import Price from "./Price.vue"
import Button from "./Button.vue"
import Carousel from './Carousel.vue'

export default {
  setup() {
    const product = computed(() => getters.getProduct('sku1'))
    const addToCart = computed(() => actions.addToCart)

    return { product, addToCart }
  },
  components: {
    Counter,
    Price,
    Button,
    Carousel
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    btnClickHandler() {
      this.addToCart({product: this.product, quantity: this.count})
      this.count = 0;
      
    }
  }
}
</script>

<style lang="scss">
@use '../styles/_functions.scss' as *;

  .product {
    &__images {
      height: rem(300);
    }
    &__details {
      padding: rem(20) rem(24);
      *+* {
        // margin-top: rem(20);
      }
    }
    &__brand {
      text-transform: uppercase;
      color: var(--orange);
      font-size: rem(14);
      font-weight: 700;
    }
    &__title {
      font-size: rem(28);
      line-height: rem(34);
      margin-top: rem(10);
    }
    &__description {
      font-size: rem(15);
      margin-top: rem(16);
      line-height: rem(24);
      color: var(--dark-grayish-blue);
    }
    &__price__wrapper {
      margin-top: rem(22);
    }
    &__item__counter {
      margin-top: rem(18);
    }
    &__action__button {
      margin-top: rem(12);
    }
  }
</style>
<style lang="scss" scoped>
  .product {
    &price__wrapper {
      margin-top: 20px;
    }
  }
</style>