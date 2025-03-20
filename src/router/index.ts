import { route } from "quasar/wrappers";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { Cookies } from "quasar";
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

export default route(async function (
  /* { store, ssrContext } */ { ssrContext }
) {
  const user = useUserStore();
  let hostname = window.location.hostname;
  if (ssrContext) {
    hostname = ssrContext?.req?.headers?.host || "app.localhost";
  }

  const parts = hostname.split(".");
  const subdomain = parts.length > 2 ? parts[0] : "app";

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
    const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies;
    const token: any = cookies.get("token");

    if (subdomain === "app") {
      if (to.path === "/login") {
        if (token && token.idToken) {
          next({
            path: "/",
          });
        } else {
          next();
        }
      } else {
        if (to.path !== "/login") {
          if (!token) {
            next({
              path: "/login",
            });
          }
          next();
        }
      }
    } else {
      next();
    }
  });

  return Router;
});
