# Groceries rewrite in Vue.js

Thoughts on how to leverage vue

[x] on page visit, the mongodb is queried for a list of all grocery items

[x] glitch wakes up and responds with the data as json

[x] this data is brought into the vue app and stored as a variable

[x] a v-for is initiated to render out the list of all grocery items into the grocery form, thus rendering the page complete

4a. the list is only comprised of grocery item name, not any more metadata! This is not true on the current version, where each list item contains all of the item metadata such as default store, and possible stores, etc

[] 5. when a user selects the item, only then does the item metadata appear via the appropriate user interfaces, ie: qty select, possible stores, default store

[] 6. if a user clicks on the edit button for an item, the app still takes them to an "edit item" page with the appropriate item data.

    6a. when the user is finished editing the item data, the app does whatever it currently does

[] 7. all checked grocery items and associated data:

7a. are stored in a Vue variable, and is the data that is rendered in email to the shopper
7b. are compiled and listed in a Vue component shown to the user to keep track of what's been selected

[] 8. if a user clicks the `+ adhoc item` button:

8a. the following interfaces appear (note that moms and tj area numbers are not available in adhoc add):

8a.1. name text input

8a.2. qty select

8a.3. store to get it from select

8a.4. default store to get it from select

8b. the item gets added to the all checked grocery items Vue variable

8c. the item gets data gets POSTED to the mongodb, maybe as an array of data in case other items are added

[] 9. the user can select one or more emails to send the list to

[] 10. when the user clicks submit:

    10a. the all items checked variable is rendered into an html string and email to the selected recipient(s)

    10b. any adhoc items that were entered are POSTED to the db

---

## Handling form data in `TheGroceryForm.vue`

[] The initial DOM only sees a list of items with checkboxes (`v-if`).

[] If an item's checkbox is checked, then vue shows the qty selector and store selector with the item's default store of choice, if available, marked.

[] Vue _also_ knows about the item's `tj` and `moms` `Area`s if available.

[] When form is submitted, only the items selected, plus each selected item's qty and store metadata are available to send back to the server or to Vue for further processing.
