import { createRouter, createWebHistory } from "vue-router";

// import login from '@/views/common/login/login.vue'
let routes= [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "orbit" */ '../views/orbitManage.vue'),
    },
    {
        path: '/status',
        component: () => import(/* webpackChunkName: "status" */ '../views/statusManage.vue'),
    },

]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 导出
export default router 