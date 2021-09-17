import axios from "axios";
import Vue from "nativescript-vue";
import App from "./components/App";
import store from "./store";

Vue.config.silent = TNS_ENV === "production";
Vue.prototype.$axios = axios;

new Vue({
  store,
  render: (h) => h("frame", [h(App)]),
}).$start();
