import VueRouter from 'vue-router'
import layout from '@/views/layout/layout.vue'
import login from '@/views/login/login.vue'

import home from '@/views/layout/content/home/home.vue'
const ProductList = () => import('@/views/layout/content/product/list.vue')
const ProductCategory = () => import('@/views/layout/content/product/Category.vue')
const OrderList = () => import('@/views/layout/content/order/OrderList.vue')
const OrderSum = () => import('@/views/layout/content/order/Summary.vue')
const AdList = () => import('@/views/layout/content/advertise/AdList.vue')
const addProduct = () => import('@/views/layout/content/product/addProduct.vue')
const Product = () => import('@/views/layout/content/product/index.vue')

const routes = [
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '/',
                component: home,
            },
            {
                path: '/Product',
                name: 'Product',
                component: Product,
                children: [
                    {
                        path: 'ProductList',
                        name: 'ProductList',
                        component: ProductList,

                    },
                    {
                        path: 'addProduct',
                        name: 'addProduct',
                        component: addProduct,
                        meta: { routeNest: '/Product/ProductList' }
                    }
                ]
            },
            , {
                path: '/ProductCategory',
                name: 'ProductCategory',
                component: ProductCategory
            }, {
                path: '/OrderList',
                name: 'OrderList',
                component: OrderList,
            }, {
                path: '/OrderSum',
                name: 'OrderSum',
                component: OrderSum
            }, {
                path: '/AdList',
                name: 'AdList',
                component: AdList
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: login
    }
]



const router = new VueRouter(
    {
        mode: 'history',
        base: process.env.BASE_URL,   //什么意思
        routes
    }
)

export default router
