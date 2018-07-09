import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './src/App.vue';

Vue.use(VueResource);

new Vue({
  el: '[data-vue="app"]',
  render: h => h(App)
});
