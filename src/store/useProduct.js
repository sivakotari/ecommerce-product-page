import { reactive } from 'vue';

const productsList = reactive([
    {
        brand: `Sneaker Company`,
        title: `Fall Limited Edition Sneakers`,
        description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        price: {
            mrp: 325,
            discount: 15
        },
        sku: 'sku1',
        stock: 10,
        images: {
            main: {
                1: 'image-product-1',
                2: 'image-product-2',
                3: 'image-product-3',
                4: 'image-product-4'
            },
            thumbnails: {
                1: 'image-product-1-thumbnail',
                2: 'image-product-2-thumbnail',
                3: 'image-product-3-thumbnail',
                4: 'image-product-4-thumbnail'
            },
        }
    }
])


const getters = {
    getProduct(sku) {
        const product = productsList.find(item => {
            return sku === item.sku
        })
        return product
    },
    getCount() {
        return 1
    }
}

// const loading = ref(false)
// const products = ref([])

// async function search (params) {
//     loading.value = true
//     products.value = await fetchProduct(params)
//     loading.value = false
// }

export { productsList, getters };