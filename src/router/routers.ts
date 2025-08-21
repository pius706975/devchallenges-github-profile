import Layout from "@/layouts/Layout.vue";
import { createRouter, createWebHistory } from "vue-router";
import page from "@/pages/index..vue";

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "",
                component: page,
                meta: { title: "Search Github Profile - By Pius Restiantoro" },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
    const defaultTitle = "Search Github Profile - By Pius Restiantoro";
    document.title = (to.meta?.title as string) || defaultTitle;
});

export default router;
