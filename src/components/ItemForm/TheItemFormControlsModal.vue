<template>
  <aside
    class="top-0 left-0 bottom-0 right-0 fixed vh100 flex-center justify-center bg-tint"
    id="modal"
  >
    <form
      class="col-12 sm-col-6 p3 flex flex-center justify-between rounded bg-light-grey"
      id="delete-confirmation-form"
    >
      <p class="m0">
        Sure you want to delete
        <strong>{{ name }}</strong>?
      </p>
      <div>
        <button
          class="btn btn-outline red hover-bg-red fw400"
          for="delete-confirmation-form"
          id="confirm-button"
          type="button"
        >Confirm</button>
        <button
          class="btn btn-outline hover-bg-blue ml2 fw400"
          id="cancel-delete"
          type="button"
        >Cancel</button>
      </div>
    </form>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentItemFormItem"]),
    name() {
      return this.currentItemFormItem.name;
    }
  }
};
</script>
