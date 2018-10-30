# Groceries rewrite in Vue.js

Thoughts on how to leverage vue

[x] 1. on page visit, the mongodb is queried for a list of all grocery items

[x] 2. glitch wakes up and responds with the data as json

[x] 3. this data is brought into the vue app and stored as a variable

[x] 4. a v-for is initiated to render out the list of all grocery items into the grocery form, thus rendering the page complete

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

Here's the URL in thecurrent app when the submit buttin is pressed, with no items selected. This is what we are solving/working against/figuring out how to do differently/working toward/trying to achieve/refactoring/the value in switching from express and pug to vue/the challenge/the opportunity in rewriting the app to fix overcome, etc!

We want to not have the following url created, on submit:

`http://localhost:3333/test?a1-sauce-store=target&acorn-squash-store=tj&acorn-squash-tjArea=1&acorn-squash-momsArea=1&apple-cider-vinegar-store=tj&apple-cider-vinegar-tjArea=6&apple-cider-vinegar-momsArea=4&apples-store=tj&apples-tjArea=1&apples-momsArea=1&asparagus-tjArea=1&asparagus-store=moms&asparagus-momsArea=1&balsamic-vinegar-store=tj&balsamic-vinegar-tjArea=6&bananas-store=tj&bananas-tjArea=1&bananas-momsArea=1&barley-store=moms&barley-momsArea=3&beef-stew-meat-store=tj&beef-stew-meat-tjArea=7&beef-stew-meat-momsArea=1&beef-stock-store=tj&beef-stock-tjArea=6&black-pepper-tjArea=6&black-pepper-store=moms&black-pepper-momsArea=3&blue-cheese-store=tj&blue-cheese-tjArea=7&blueberries-store=tj&blueberries-tjArea=1&blueberries-momsArea=1&bran-cereal-store=tj&bran-cereal-tjArea=4&broccoli-store=tj&broccoli-tjArea=1&broccoli-momsArea=1&brown-sugar-store=tj&brown-sugar-tjArea=6&brown-sugar-momsArea=4&butter-store=tj&butter-tjArea=5&butter-momsArea=2&winter-squash-store=tj&winter-squash-tjArea=1&winter-squash-momsArea=1&canola-oil-store=tj&canola-oil-tjArea=6&canola-oil-momsArea=5&carrots-tjArea=1&carrots-store=moms&carrots-momsArea=1&celery-tjArea=1&celery-store=moms&celery-momsArea=1&chicken-stock-store=tj&chicken-stock-tjArea=6&cholula-store=target&cilantro-tjArea=1&cilantro-store=moms&cilantro-momsArea=1&coffee-filters-store=tj&coffee-filters-tjArea=2&conditioner-store=tjMaxx&cream-cheese-store=tj&cream-cheese-tjArea=2&cucumber-store=tj&cucumber-tjArea=1&cucumber-momsArea=1&dark-chocolate-covered-almonds-store=tj&dark-chocolate-covered-almonds-tjArea=3&dish-soap-tjArea=6&dish-soap-store=moms&dish-soap-momsArea=5&dish-soap-seventh-generation-momsArea=6&dish-soap-seventh-generation-store=target&dog-biscuits-store=tj&dog-biscuits-tjArea=6&dog-food-cans-tjArea=7&dog-food-cans-store=howl&dog-food-dry-store=howl&dr--bronners-store=tj&dr--bronners-tjArea=6&dr--bronners-momsArea=5&dried-cherries-store=tj&dried-cherries-tjArea=1&dried-mango-store=tj&dried-mango-tjArea=1&dried-mango-momsArea=3&eggs-store=tj&eggs-tjArea=2&eggs-momsArea=2&feta-cheese-store=tj&feta-cheese-tjArea=7&feta-cheese-momsArea=2&flower-burrito-skins-store=tj&flower-burrito-skins-tjArea=7&frozen-burritos-store=moms&frozen-burritos-momsArea=6&frozen-falafel-store=moms&frozen-falafel-momsArea=9&frozen-lunches-tjArea=3&frozen-lunches-store=moms&frozen-lunches-momsArea=6&frozen-pizza-store=tj&frozen-pizza-tjArea=3&frozen-pizza-momsArea=6&garlic-store=tj&garlic-tjArea=1&garlic-momsArea=1&granola-store=moms&granola-momsArea=2&grapes-store=tj&grapes-tjArea=1&grapes-momsArea=1&green-onions-tjArea=1&green-onions-store=moms&green-onions-momsArea=1&green-peppers-store=tj&green-peppers-tjArea=1&green-peppers-momsArea=1&green-scrubbies-momsArea=8&green-scrubbies-store=target&ground-beef-store=tj&ground-beef-tjArea=7&ground-beef-momsArea=1&half-and-half-store=tj&half-and-half-tjArea=5&half-and-half-momsArea=2&hummus-store=tj&hummus-tjArea=2&ice-cream-tjArea=4&ice-cream-momsArea=9&ice-cream-store=riteAid&jelly-store=tj&jelly-tjArea=6&kale-tjArea=1&kale-store=moms&kale-momsArea=1&kale-chips-tjArea=1&kale-chips-store=moms&kale-chips-momsArea=3&ketchup-store=tj&ketchup-tjArea=6&laundry-detergent-momsArea=4&laundry-detergent-store=target&lemmon-pepper-tjArea=6&lemmon-pepper-store=moms&lemmon-pepper-momsArea=3&lemons-store=tj&lemons-tjArea=1&lemons-momsArea=1&maple-syrup-store=tj&maple-syrup-tjArea=6&monterey-jack-cheese-store=tj&monterey-jack-cheese-tjArea=7&monterey-jack-cheese-momsArea=2&mozzarella-string-cheese-store=tj&mozzarella-string-cheese-tjArea=7&mozzarella-string-cheese-momsArea=2&mustard-store=tj&mustard-tjArea=6&oatmeal-store=tj&oatmeal-tjArea=4&olive-oil-store=tj&olive-oil-tjArea=6&onions-red-store=tj&onions-red-tjArea=1&onions-red-momsArea=1&onions-white-store=tj&onions-white-tjArea=1&onions-white-momsArea=1&pads-store=moms&pads-momsArea=5&parsley-tjArea=1&parsley-store=moms&parsley-momsArea=1&pasta-sauce-store=tj&pasta-sauce-tjArea=6&peanut-butter-tjArea=6&peanut-butter-store=moms&peanut-butter-momsArea=4&pickles-store=tj&pickles-tjArea=6&pickles-momsArea=2&pita`

This means that the `processFormData()` that happens in itemController is what gets refactored into vue components, ie: so that the output of `processFormData()` is what the url would look like, ie: ONLY the items selected and their associated metadata.
