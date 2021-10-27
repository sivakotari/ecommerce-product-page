import { reactive, computed, ref } from 'vue';

const cart = reactive({
    // 'sku1': {
    //     product: {
    //         brand: '',
    //         title: '',
    //         sku: '',
    //         stock: '',
    //         image: '',
    //         price: {
    //             mrp: '',
    //             discounted_price: '',
    //             discount: ''
    //         }
    //     },
    //     quantity: 2
    // },
    // 'sku2': {
    //     product: {
    //         title: '',
    //         sku: '',
    //         brand: '',
    //         stock: '',
    //         image: '',
    //         price: {
    //             mrp: '',
    //             discounted_price: '',
    //             discount: ''
    //         }
    //     },
    //     quantity: 1
    // },
});

const showPopover = ref(false)

const getters = {
    totalCartItems() {
        let total = null;
        for(const product in cart) {
            total += cart[product].quantity;
        }

        return total;
    }
}

const mutations = {
    setAddToCart({ product, quantity }) {
        const {sku} = product;
        if(cart[sku]) {
            cart[sku].quantity += quantity
        }
        else {
            cart[sku] = { product, quantity}
        }
    },
    togglePopover() {
        showPopover.value = !showPopover.value
    }
}

const actions = {
    addToCart({product, quantity}) {
        mutations.setAddToCart({product, quantity})
    }
}

export { cart, getters, actions, mutations, showPopover };