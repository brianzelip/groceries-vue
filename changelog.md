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

4. Use `ItemForm` to display existing item data (ie: use ItemForm not just to add a new item to the db, but to display an existing item's data)

- starting branch: show-item-data-in-item-form
- starting v: v0.8.2
- ending v: v0.9.0
- steps:
  - create new getter that returns a function that accepts an item \_id, and uses the \_id to query all grocery items to return the current item to display in the edit item route.
  - change the scope of the item form state via its name, ie: `newItem` to `itemFormItem`. Whereas the former scope is only about new items, the latter allows for both new and existing items.
  - need to reset `itemFormItem` state on route change (reset when go to '/')

5. Reset `itemFormItem` state when route changes

- starting v: v0.9.0
- ending v: v0.10.0
- steps:
  - I thought i could just register the `resetItemFormItem` action inside the `AddItemBtn.vue` component, then dispatch that action on button click. But this didn't work for some reason.
  - So i searched for 'vue watch route change', and found [this reddit post](https://www.reddit.com/r/vuejs/comments/77i8vh/vuerouter_how_to_react_to_url_changes/donk0pd), which helped to decipher whats going on [in the VueRouter docs about watching the route](https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes), ie:

```js
// To react to params changes in the same component, you can simply watch the $route object:

const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // react to route changes...
    }
  }
};
```

But then I also read the rest of the comment, which reads:

> Though a better solution would be to use the route as a passed parameter as a prop to the component such that the profile has a prop called userId and then put a watcher on the userId and if it changes, refetch the new data. This would also allow you to use your profile component regardless of the route.

This provided the insight to delete `TheItemFormContainer` entirely, since i was using a `created()` and a `watch` in it as well as in `TheItemForm`.

The solution I went with leaves only one set of created/watch, and simplifies the application.

6. Send itemFormItem data to API to update item data in the data base

- branch name: update-item-via-api
- starting point: v0.10.1
- ending point: v0.11.0

7. Delete an item from the data base

- branch name: delete-item
- starting point: v0.11.0
- ending point: v0.12.0
- steps:
  - add button to template
  - wire up button to post item \_id to api

8. Ask the user to confirm deletion of an item

- branch name: confirm-delete
- starting point: v0.12.0
- ending point: v0.13.0
- steps:
  - make current delete button open confirm modal
  - add confirm modal

9. Control who gets emailed the submitted grocery list

- branch name: grocery-form-email
- starting point: v0.13.0
- ending point: v0.14.0
- steps:
  - wire up data fields to form inputs
  - send email receipients to api along with submitted list

> > > > > possible conflict 10. Pass flash messages when appropriate

- branch name: flash
- starting point: v0.14.0
- ending poing: v0.15.0
- steps:
  - see [#24](https://github.com/brianzelip/groceries-vue/issues/24) for details

> > > > > possble conflict 11. Show spinner when fetching all possible grocery items data

- branch name: spinner
- starting point: 0.14.0
- ending point: 0.15.0
- steps:
  - see [How to Create a CSS Loader](https://www.w3schools.com/howto/howto_css_loader.asp) via w3schools!
  - make a boolean state variable that holds the on/off state of whether or not to show spinner
  - you'll need to set it to false, then back to true again for the next time, so there's always a cylce context that needs closure.
    - so maybe, since the spinner needs to be enabled in time for every `actions.setAllPossibleGroceryItems`, set this boolean state to true as the first order of business in `actions.setAllPossibleGroceryItems`, and later down the funtion, set the state to false
