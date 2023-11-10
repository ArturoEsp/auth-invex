import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createMetaManager } from 'vue-meta'
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { LaQuestionCircleSolid } from "oh-vue-icons/icons";
import "./css/index.css";
import router from "./router";
import useAuthStore from "./store/auth.store";

addIcons(LaQuestionCircleSolid);

createApp(App)
  .use(VueQueryPlugin)
  .use(useAuthStore)
  .use(router)
  .use(createMetaManager(false, {
    meta: { tag: 'meta', nameless: true },
  }))
  .component("v-icon", OhVueIcon)
  .mount("#app");
