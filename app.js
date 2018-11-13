import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './src/router.js';
import store from './src/store/store.js';
import Meta from 'vue-meta';

import App from './src/App.vue';

Vue.use(VueRouter);
Vue.use(Meta);

new Vue({
  el: '[data-vue="app"]',
  router,
  store,
  render: h => h(App)
});
