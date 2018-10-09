<template lang="pug">
  main
    TheHeader
    ItemList
    TheFooter
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import AddItem from './components/AddItem.vue';
import ItemList from './components/ItemList.vue';

export default {
  data() {
    return {};
  },
  components: {
    TheHeader,
    TheFooter,
    AddItem,
    ItemList
  }
};
</script>
