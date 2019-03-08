<template>
  <section class="mt2">
    <input
      @click.prevent="postData"
      class="btn btn-primary bg-blue fw400"
      type="submit"
      value="Save →"
    >
    <button
      @click="showModal = true"
      class="ml2 btn btn-primary bg-grey fw400 hover-bg-red"
      id="delete-btn"
      type="button"
      v-if="isEditRoute"
    >Delete</button>
    <TheItemFormControlsModal
      v-if="showModal"
      v-on:close="showModal = false"
    ></TheItemFormControlsModal>
  </section>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

import TheItemFormControlsModal from "./TheItemFormControlsModal.vue";

export default {
  data() {
    return {
      showModal: false
    };
  },
  props: ["isEditRoute"],
  components: {
    TheItemFormControlsModal
  },
  computed: {
    ...mapState(["api", "itemFormItem"])
  },
  methods: {
    ...mapActions(["addFlash"]),
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
        .post(`${this.api}/edit/${this.itemFormItem._id}`, this.itemFormItem)
        .then(
          this.addFlash({
            type: "success",
            msg: `Successfully updated <strong>${
              this.itemFormItem.name
            }</strong>!`
          })
        )
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
