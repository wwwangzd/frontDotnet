import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes: [
        {
            path: "/manager/user",
            name: 'user',
            component: () => import("@v/user/page.vue")
        },
        {
            path: "/",
            name: 'user',
            component: () => import("@v/user/ManagerHome.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@v/login/newLogin.vue"),
        },
        // {
        //     path: "/",
        //     name: "login",
        //     component: () => import("@v/login/login.vue"),
        // },
    ], // `routes: routes` 的缩写
});

export default router