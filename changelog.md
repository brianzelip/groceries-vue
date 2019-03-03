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
