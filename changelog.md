# changelog

Based on git feature branch work and tags.

This document started at v0.7.0, via the `itemForm` branch.

1. Create the `itemForm` component and sub components

- starting branch: `itemForm`
- starting point: v0.70

- this blog post helped me figure out using an array for v-model on form checkboxes: https://alligator.io/vuejs/v-model-two-way-binding/

- re: vue forms - you figure out what kind of data the browser would normally make, and then create those data properties.

So, in the case of TheItemForm.vue:

- name (string)
- stores (array of strings)
- default store (string)
- if ${tj/moms} then ${tj/moms} area (number)

TODO:

- Refactor the future `TheItemStoresSelector.vue` to control `stores` array and `defaultStore` string.
