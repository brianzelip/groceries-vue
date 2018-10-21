import VueRouter from 'vue-router';

import TheGroceryForm from './src/components/GroceryForm/TheGroceryForm.vue';
import TheItemFormContainer from './src/components/ItemForm/TheItemFormContainer.vue';

const routes = [
  { path: '/', component: TheGroceryForm },
  {
    path: '/add',
    component: TheItemFormContainer,
    props: { title: 'add item' }
  },
  {
    path: '/edit/:id',
    component: TheItemFormContainer,
    props: { title: 'edit item' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
