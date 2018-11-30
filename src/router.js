import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import cancelTokenSources from './api';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }
  ]
});

router.afterEach(() => { // 路由跳转杀请求
  for (const [cancelToken, cancel] of cancelTokenSources) {
    cancel(cancelToken); // cancel 正在pending的请求
  }
});

export default router;
