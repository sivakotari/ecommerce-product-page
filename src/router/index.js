import { createRouter, createWebHistory } from 'vue-router'

// replace this with product page
import Nav from '../components/Nav.vue';
import ProductDetails from '../components/ProductDetails.vue';

const routes = [
    {
        path: '/',
        redirect: '/product-details' // replace redirect links with product page
    },
    {
        path: '/collections',
        redirect: '/product-details'
    },
    {
        path: '/product-details',
        component: ProductDetails
    },
    {
        path: '/about',
        redirect: '/product-details'
    },
    {
        path: '/men',
        redirect: '/product-details'
    },
    {
        path: '/women',
        redirect: '/product-details'
    },
    {
        path: '/contact',
        redirect: '/product-details'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router