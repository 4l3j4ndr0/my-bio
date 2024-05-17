import { route } from "quasar/wrappers";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import routes from "./routes";
import routesUser from "./routesUser";
import { useUserStore } from "src/stores/User";
import { useGeneralStore } from "src/stores/General";
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(async function (/* { store, ssrContext } */) {
  const user = useUserStore();
  const hostname: any = window.location.hostname;
  const parts = hostname.split(".");
  const subdomain = parts.length > 2 ? parts.length[0] : "app";
  console.log(subdomain);

  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: subdomain === "app" ? routes : routesUser,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory("/"),
  });

  Router.beforeEach(async (to, from, next) => {
    if (subdomain === "app") {
      if (to.path === "/login") {
        const token = await user.currentSession();
        if (token && token.idToken) {
          next({
            path: "/",
          });
        } else {
          next();
        }
      } else {
        if (to.path !== "/login") {
          if (!user.token) {
            next({
              path: "/login",
            });
          }
          next();
        } else {
          if (user.token) {
            next({
              path: "/",
            });
          }
        }
      }
    } else {
      next();
    }
  });

  return Router;
});
