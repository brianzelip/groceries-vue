<template>
  <aside
    class="top-0 left-0 bottom-0 right-0 fixed vh100 flex flex-center justify-center bg-tint"
    id="modal"
  >
    <div class="col-12 sm-col-6 p3 flex flex-center justify-between rounded bg-light-grey">
      <p class="m0">
        Sure you want to delete
        <strong>{{ name }}</strong>?
      </p>
      <div>
        <button
          class="btn btn-outline red hover-bg-red fw400"
          id="confirm-delete-btn"
          type="button"
        >Confirm</button>
        <button
          class="btn btn-outline hover-bg-blue ml2 fw400"
          id="cancel-delete-btn"
          type="button"
        >Cancel</button>
      </div>
    </div>
  </aside>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["api", "itemFormItem"]),
    name() {
      return this.itemFormItem.name;
    }
  },
  methods: {
    deleteItem() {
      if (this.$route.params._id != this.itemFormItem._id) {
        console.log(
          `RATS!\n\n${this.$route.params._id} != ${this.itemFormItem._id} :(`
        );
        return;
      }
      axios
        .post(`${this.api}/delete/${this.itemFormItem._id}`)
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
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>
