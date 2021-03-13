import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

import ElementUI from './utils/Element.config';   //将elementUI重新定义, 方便统一设置elementUI样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.path == "/") {
    next({ path: "/login" });
  } else {
    next();
  }
  // next()
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
