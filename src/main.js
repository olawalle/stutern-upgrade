import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// BOOTSTRAP IMPORTS
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// ANIMATE ON SCROLL
import AOS from 'aos'
import 'aos/dist/aos.css'

// VUE SCROLL TO
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

new Vue({
  router,
  store,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount("#app");
