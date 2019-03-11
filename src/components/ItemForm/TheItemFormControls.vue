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
    ...mapActions(["addFlash", "setItemFormItem", "resetItemFormItem"]),
    postData() {
      this.isEditRoute ? this.edit() : this.create();
    },
    create() {
      axios
        .post(`${this.api}/create`, this.itemFormItem)
        // .then(payload => {
        //   this.setItemFormItem(payload.data);
        // })
        .then(payload => {
          const data = payload.data;
          this.addFlash({
            flashType: "success",
            formType: "add",
            name: data.name,
            _id: data._id,
            flashId: Date.now()
          });
          return data;
        })
        .then(() => {
          this.resetItemFormItem();
          this.$router.push("/add");
        })
        .catch(error => {
          console.log("ERROR!:::", error);
        });
    },
    edit() {
      if (this.$route.params._id != this.itemFormItem._id) {
        console.log(
          `RATS!\n\n${this.$route.params._id} != ${this.itemFormItem._id} :(`
        );
        return;
      }
      axios
        .post(`${this.api}/edit/${this.itemFormItem._id}`, this.itemFormItem)
        // .then(handle response to post here
        // response = item data object to use as payload
        // in setItemFormItem)
        .then(
          this.addFlash({
            type: "success",
            msg: `Successfully edited <strong>${
              this.itemFormItem.name
            }</strong>! <a href="/edit/${
              this.itemFormItem._id
            }">View item →</a>`,
            id: Date.now()
          })
        )
        .then(
          this.$router.push({
            name: "home",
            params: {
              flash: `Successfully edited <strong>${
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
