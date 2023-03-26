import VueRouter from 'vue-router'
import layout from '@/views/layout/Index.vue'
import login from '@/views/login/Index.vue'




const routes = [
    {
        path:'/',
        component:layout
    },
    {
        name:'login',
        path:'/login',
        component:login
    }
]



const router = new VueRouter(
    {
        mode:'history',
        base:process.env.BASE_URL,
        routes
    }
)

export default router
