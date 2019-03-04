import VueRouter from 'vue-router';

import TheGroceryForm from './components/GroceryForm/TheGroceryForm.vue';
import TheItemFormContainer from './components/ItemForm/TheItemFormContainer.vue';
import TheSubmittedList from './components/SubmittedList/TheSubmittedList.vue';

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
    props: { routeName: 'add' }
  },
  {
    path: '/edit/:_id',
    name: 'edit',
    component: TheItemFormContainer,
    props: { routeName: 'edit' }
  },
  {
    path: '/submit',
    name: 'submit',
    component: TheSubmittedList
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
