import VueRouter from 'vue-router';

import TheGroceryForm from './src/components/GroceryForm/TheGroceryForm.vue';
import TheItemFormContainer from './src/components/ItemForm/TheItemFormContainer.vue';

const routes = [
  {
    path: '/',
    component: TheGroceryForm
  },
  {
    path: '/add',
    component: TheItemFormContainer,
    props: { heading: 'add item' }
  },
  {
    path: '/edit/:id',
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
