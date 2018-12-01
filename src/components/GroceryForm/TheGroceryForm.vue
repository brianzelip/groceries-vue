<template>
  <form method="POST">
    <ol class="list-reset border rounded">
      <template v-for="item in allPossibleGroceryItems">
        <GroceryFormItem
          :item="item"
          :key="item._id"
        ></GroceryFormItem>
      </template>
    </ol>
    <TheGroceryFormControls v-on:form-submitted="processForm"></TheGroceryFormControls>
  </form>
</template>

<script>
  import axios from "axios";
  import { mapGetters, mapActions } from "vuex";

  import GroceryFormItem from "./GroceryFormItem.vue";
  import TheGroceryFormControls from "./TheGroceryFormControls.vue";

  export default {
    data() {
      return {};
    },
    components: {
      GroceryFormItem,
      TheGroceryFormControls
    },
    computed: {
      ...mapGetters(["allPossibleGroceryItems", "userSelectedItems"]),
      USI() {
        return this.$store.getters.userSelectedItems;
      }
    },
    methods: {
      ...mapActions(["setAllPossibleGroceryItems"]),
      processForm() {
        console.log("now `processForm()` is in control!");
        this.$router.push("/submit");
      },
      postDataForEmail() {
        axios
          .post(
            "https://groceries-vue-api.glitch.me/submit",
            this.$store.getters.userSelectedItems
          )
          .then(console.log("axios.post just worked!"))
          .catch(error => {
            console.log("ERROR! ->", error);
          });
      }
    },
    created() {
      this.setAllPossibleGroceryItems();
    }
  };
</script>
