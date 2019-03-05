<template>
  <input
    @click.prevent="postData"
    class="mt2 btn btn-primary bg-blue fw400"
    type="submit"
    value="Save →"
  >
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["api", "itemFormItem"])
  },
  methods: {
    postData() {
      this.$route.name === "add" ? this.create() : this.update();
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
    }
  }
};
</script>
