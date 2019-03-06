<template>
  <section class="mt2">
    <input
      @click.prevent="postData"
      class="btn btn-primary bg-blue fw400"
      type="submit"
      value="Save →"
    >
    <button
      @click="deleteItem"
      class="ml2 btn btn-primary bg-grey fw400 hover-bg-red"
      id="delete-btn"
      type="button"
      v-if="isEditRoute"
    >Delete</button>
  </section>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  props: ["isEditRoute"],
  computed: {
    ...mapState(["api", "itemFormItem"])
  },
  methods: {
    postData() {
      this.isEditRoute ? this.update() : this.create();
    },
    create() {
      axios
        .post(`${this.api}/create`, this.itemFormItem)
        .then(this.$router.push("/"))
        .catch(error => {
          console.log("ERROR!:::", error);
        });
    },
    update() {
      if (this.$route.params._id != this.itemFormItem._id) {
        console.log(
          `RATS!\n\n${this.$route.params._id} != ${this.itemFormItem._id} :(`
        );
        return;
      }
      axios
        .post(`${this.api}/edit/${this.$route.params._id}`, this.itemFormItem)
        .then(
          this.$router.push({
            name: "home",
            params: {
              flash: `Successfully updated <strong>${
                this.itemFormItem.name
              }</strong>!`
            }
          })
        )
        .catch(error => {
          console.log("ERROR!:::", error);
        });
    },
    deleteItem() {
      axios
        .post(`${this.api}/delete/${this.$route.params._id}`)
        .then(
          this.$router.push({
            name: "home",
            params: {
              flash: `Successfully deleted <strong>${
                this.itemFormItem.name
              }</strong>!`
            }
          })
        )
        .catch(error => {
          console.log("ERROR!:::", error);
        });
    }
  }
};
</script>
