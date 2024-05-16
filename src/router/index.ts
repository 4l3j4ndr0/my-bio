import { route } from "quasar/wrappers";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import routes from "./routes";
import { useUserStore } from "src/stores/User";
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const user = useUserStore();
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory("/login"),
  });

  Router.beforeEach(async (to, from, next) => {
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
  });

  return Router;
});
