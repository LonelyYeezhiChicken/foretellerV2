import { createRouter, createWebHistory } from "vue-router";
import { RouterMap } from "../models/define";
import { account } from "../store"


const routes = [
    {
        path: RouterMap.Home,
        name: RouterMap.Home.toString(),
        component: () => import("../views/Home.vue")
    },
    {
        path: RouterMap.Login,
        name: RouterMap.Login.toString(),
        component: () => import("../views/Login.vue")
    },
    {
        path: RouterMap.CarKind,
        name: RouterMap.CarKind.toString(),
        component: () => import("../views/CarKind.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

let test = false;

router.beforeEach(async (to, from, next) => {
    console.log(account().isAuth)
    if (account().isAuth || to.name === RouterMap.Login.toString()) {
        next();
    } else {
        next({ name: RouterMap.Login.toString() })
    }
    console.log(to.name)
})
export default router