import VueRouter from 'vue-router';
import store from './store.js';

import TheGroceryForm from './src/components/GroceryForm/TheGroceryForm.vue';
import TheItemFormContainer from './src/components/ItemForm/TheItemFormContainer.vue';
import TheSubmittedList from './src/components/SubmittedList/TheSubmittedList.vue';

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
    props: { heading: 'add item' }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: TheItemFormContainer,
    props: { heading: 'edit' }
  },
  {
    path: '/submit',
    name: 'submit',
    component: TheSubmittedList,
    props: { userSelectedItems: store.state.userSelectedItems }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
