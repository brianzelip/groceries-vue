<template>
  <div>
    <h1>The Submitted List</h1>
    <pre>{{ userSelectedItems }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['userSelectedItems']
};
</script>
