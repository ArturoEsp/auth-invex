import { createRouter, createWebHistory } from "vue-router";
import Routes from "./routes";
import { EnvConstants } from "../constants";

const router = createRouter({
  history: createWebHistory(EnvConstants.HOME_PAGE),
  routes: Routes,
});

/* router.beforeEach((to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!useAuthStore.state.token) {
      next({ path: routesList.LOGIN });
    } else if (
      to.matched.some((record) => record.name === "Login") &&
      useAuthStore.state.token
    ) {
      next({ path: routesList.HOME });
    } else {
      next();
    }
  } else {
    next();
  }
}); */

export default router;
