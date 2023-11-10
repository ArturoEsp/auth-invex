import { RouteRecordRaw } from "vue-router";
import HomePageVue from "../pages/home/Home.page.vue";
import { routesList } from "../constants";
import NotFoundPageVue from "../pages/not-found/NotFound.page.vue";
import LogoutPageVue from "../pages/logout/Logout.page.vue";

const Routes: RouteRecordRaw[] = [
  {
    path: "",
    name: "Home",
    component: HomePageVue,
    meta: { requiresAuth: true },
  },
  {
    path: routesList.LOGOUT,
    name: "Logout",
    component: LogoutPageVue,
  },
  {
    path: routesList.NOT_FOUND,
    name: "NotFound",
    component: NotFoundPageVue,
  },

];

export default Routes;
