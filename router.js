import VueRouter from 'vue-router';

import TheGroceryForm from './src/components/GroceryForm/TheGroceryForm.vue';
import TheItemFormContainer from './src/components/ItemForm/TheItemFormContainer.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheGroceryForm
  },
  {
    path: '/add',
    name: 'add',
    component: TheItemFormContainer,
    props: {
      heading: 'add item'
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: TheItemFormContainer,
    props: {
      heading: 'edit'
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
