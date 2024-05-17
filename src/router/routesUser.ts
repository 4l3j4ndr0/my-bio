import { RouteRecordRaw } from "vue-router";

const routesUser: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("pages/IndexUsersPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routesUser;
