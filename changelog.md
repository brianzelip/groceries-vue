# changelog

Based on git feature branch work and tags.

This document started at v0.7.0, via the `itemForm` branch.

1. Create the `itemForm` component and sub components

- starting branch: `itemForm`
- starting point: v0.70
- creates the ability to add new items to the database
- ending point: v0.8.0

- this blog post helped me figure out using an array for v-model on form checkboxes: https://alligator.io/vuejs/v-model-two-way-binding/

- re: vue forms - you figure out what kind of data the browser would normally make, and then create those data properties.

2. Use vuex instead of props when multiple components receive the same props.

- starting branch: props-to-vuex
- starting point: v0.8.0
- steps:
  - create new state (props) and getter (computed props)
  - create mutations and actions to update state
  - update components
- ending point: v0.8.1

3. Use vuex instead of props for submitting the grocery form

- starting branch: grocery-form-control-vuex
- starting point: v0.8.1
- ending point: v0.8.2
- refactor `TheGroceryForm.vue` and `TheGroceryFormControls.vue` to use vuex to submit form from the form controls instead of using custom events to submit via the form parent.
