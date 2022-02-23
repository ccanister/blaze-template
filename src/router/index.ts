import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import SimpleTable from "@/views/table/simple/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "导航页",
    component: Layout,
    redirect: "/table/simple",
    children: [
      {
        path: "table/simple",
        component: SimpleTable,
        name: "简易表格",
      },
    ],
  },

  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
