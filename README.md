# Groceries rewrite in Vue.js

Thoughts on how to leverage vue

- [x] on page visit, the mongodb is queried for a list of all grocery items

- [x] glitch wakes up and responds with the data as json

- [x] this data is brought into the vue app and stored as a variable

- [x] a v-for is initiated to render out the list of all grocery items into the grocery form, thus rendering the page complete

4a. the list is only comprised of grocery item name, not any more metadata! This is not true on the current version, where each list item contains all of the item metadata such as default store, and possible stores, etc

- [] 5. when a user selects the item, only then does the item metadata appear via the appropriate user interfaces, ie: qty select, possible stores, default store

- [] 6. if a user clicks on the edit button for an item, the app still takes them to an "edit item" page with the appropriate item data.

  6a. when the user is finished editing the item data, the app does whatever it currently does

- [] 7. all checked grocery items and associated data:

7a. are stored in a Vue variable, and is the data that is rendered in email to the shopper
7b. are compiled and listed in a Vue component shown to the user to keep track of what's been selected

- [] 8. if a user clicks the `+ adhoc item` button:

8a. the following interfaces appear (note that moms and tj area numbers are not available in adhoc add):

8a.1. name text input

8a.2. qty select

8a.3. store to get it from select

8a.4. default store to get it from select

8b. the item gets added to the all checked grocery items Vue variable

8c. the item gets data gets POSTED to the mongodb, maybe as an array of data in case other items are added

- [] 9. the user can select one or more emails to send the list to

- [] 10. when the user clicks submit:

  10a. the all items checked variable is rendered into an html string and email to the selected recipient(s)

  10b. any adhoc items that were entered are POSTED to the db

---

## Handling form data in `TheGroceryForm.vue`

- [] The initial DOM only sees a list of items with checkboxes (`v-if`).

- [] If an item's checkbox is checked, then vue shows the qty selector and store selector with the item's default store of choice, if available, marked.

- [] Vue _also_ knows about the item's `tj` and `moms` `Area`s if available.

- [] When form is submitted, only the items selected, plus each selected item's qty and store metadata are available to send back to the server or to Vue for further processing.

### where to now since qtySelector and storesSelector have been vue-ified

Now that vue is handling the data for each `GroceryFormItem`, I have to figure out a way to get each selected grocery item data up to `TheGroceryForm`.

The thing I'm unsuccessfully trying to figure out is:

> can you leverage the `$emit` functionality from within a component's `methods`, or can you only leverage `$emit` from inside a component's template?

UPDATE: The answer to the above question is YES - see similar call to `$store` in `GroceryFormItem.vue`.

ie: how do I emit from each `GroceryFormItem` that:

- its `isSelected` has been set to `true`, AND
- its remaining data props values are made available to `TheGroceryForm`, AND
- any time any of its remaining data props change this info is made available to `TheGroceryForm`

- [] add `textarea` for any additional grocery notes, ie, i needed to buy a dishrack today, but thats so seldom that it doesnt need to be on the real list, but an additional notes section wiuld be great to have for these cases.

- [] associate added ad hoc textarea note with a given store, which would make the note item appear in the output store section with all the other same store stuff.

- [x] TODO: reset `userSelectedItems` when header is clicked

---

2018-11-06
where now?

recent achivements:

- vue form handling is going well
- use of `$router` and `$store` going well
- am understanding the concepts and use protocols well

TODO:

- [] refactor all raw state mutations in favor of`$store`, so maybe one or more mutations are left, and at least one action (the initial axios call)
- [] update data api with email handler (see `itemController.processFormData` and `itemController.outputGroceryList` in the original groceries app api)

---

### mvc vs vue

With Vue, i'm getting leaner cleaner data earlier. Sor for example, in the mvc groceries app, `req.body.groceryListData` takes a bit of code to create (see `itemController.processFormData`). Whereas in vue, `this.$store.getters.userSelectedItems` is the comporable data object, and it is always current / updated on user input.

---

### about the app's output data

the user selects:

- which item(s) they want
- how many of the item (optional)
- where from the item (optional)

the output process:

- [x] figures out the order of stores to go to for the shopping trip
  - get `uniqueSortedStores`
- [] figures out the order of items to get per store
  - get all items from a store
    - get all items from a store with a storeArea
    - get all items from a store without a storeArea
- sorts all the items that don't have a store
  - alphabetically?
- lists the qty to get per item
  - provided via item data

---

Move the action dispatch from `GroceryFormItem` to each child component where the action event actually happens.

- `GroceryFormItemCheckboxLabel`: dispatches`pushItemToUserSelectedItems` (takes `item` object as arg)
- `GroceryFormItemQtySelector`: dispatches `updateItemQty` (takes item `id` and `qty` as args)
- `GroceryFormItemStoresSelector`: dispatches `updateItemStore` (takes item `id` and `store` and if `store` = "tj" or "moms" AND there's a `${store}Area`, then update `storeArea`)

Just made a new branch, `action-dispatch-refactor`

Everything seems to be working OK right now as is, before making any changes in the new branch. Any funny business / bugs I see tend to include the ffdev vue dev tools. Before implementing the thoughts above, I'm going to render out the store data on the form page to see how vue, not the devtools, is handling real time data.
