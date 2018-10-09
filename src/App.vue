<template lang="pug">
  main
    Header
    ItemList
    TheFooter
</template>

<script>
import Header from './components/Header.vue';
import TheFooter from './components/TheFooter.vue';
import AddItem from './components/AddItem.vue';
import ItemList from './components/ItemList.vue';

export default {
  data() {
    return {};
  },
  components: {
    Header,
    TheFooter,
    AddItem,
    ItemList
  }
};
</script>
