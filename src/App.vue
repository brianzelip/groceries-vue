<template>
  <div>
    <h1>This is the App</h1>
    <hello>
      <div style="border: 1px solid red; width: 50%; margin: 0 auto">
        Hello world
      </div>
    </hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  data() {
    return {
      msg: 'Hello world!'
    };
  },
  components: {
    hello: Hello
  }
};
</script>
