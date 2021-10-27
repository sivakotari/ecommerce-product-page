import { reactive, computed } from 'vue';

const state = reactive({
  isCartModalOpen: false,
  cart: {
    items: [
      {
        product: {
          title: '',
          sku: '',
          brand: '',
          stock: '',
        },
        quantity: 2
      }
    ]
  }
});

const isCartModalOpen = computed(() => state.isCartModalOpen);
const toggleCartModal = () => {
  state.isCartModalOpen = !state.isCartModalOpen;
};

const cart = computed(() => state.cart);
const setCart = (cart) => { state.cart = cart };

export { cart, isCartModalOpen, setCart, toggleCartModal };