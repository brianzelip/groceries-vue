import VueRouter from 'vue-router';

import TheGroceryForm from './components/GroceryForm/TheGroceryForm.vue';
import TheItemForm from './components/ItemForm/TheItemForm.vue';
import TheSubmittedList from './components/SubmittedList/TheSubmittedList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheGroceryForm,
    props: true
  },
  {
    path: '/add',
    name: 'add',
    component: TheItemForm
  },
  {
    path: '/edit/:_id',
    name: 'edit',
    component: TheItemForm
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
