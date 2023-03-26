import VueRouter from 'vue-router'
import layout from '@/views/layout/layout.vue'
import login from '@/views/login/login.vue'

import home from '@/views/layout/content/home/home.vue'
const ProductList = () => import('@/views/layout/content/product/list.vue')
const ProductCategory = () => import('@/views/layout/content/product/Category.vue')

const routes = [
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '/',
                component: home,
            }, {
                path: '/ProductList',
                name: 'ProductList',
                component: ProductList
            }, {
                path: '/ProductCategory',
                name: 'ProductCategory',
                component: ProductCategory
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
