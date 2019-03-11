<template>
  <router-link :to="`/edit/${_id}`">View item →</router-link>
</template>

<script>
export default {
  props: ["_id"]
};
</script>

