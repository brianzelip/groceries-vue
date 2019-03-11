# flash ⚡

## Q & A

- Q: What's the reason for a flash?
- A: Tell the user something happened.
  - Q: What kind of something can happen?
  - A: An error event, and a success event
    - Q: When does an error event happen?
    - A: On the grocery form:
      - A: when the form is submitted w/out selecting at least one email recipient
        - Q: Where is this error flash rendered?
        - A: On the grocery form
      - A: when the form is submitted w/out selecting at least one item
        - Q: Where is this error flash rendered?
        - A: On the grocery form
    - A: On the add item form:
      - A: when form is submitted with out an item name
        - Q: Where is this error flash rendered?
        - A: On the add item form
    - A: On the edit item form:
      - A: when the form is submitted with out an item name
        - Q: Where is this error flash rendered?
        - A: On the edit item form
    - Q: When does a success event happen?
    - A: On the add item form:
      - A: when an item is added successfully
        - Q: Where is this success flash rendered?
        - A: On the add item form (ie: adding an item takes you right back to the add item form. this prioritizes data entry over grocery list making)
    - A: On the edit item form:
      - A: when an item is edited successfully
        - Q: Where is this success flash rendered?
        - A: On the grocery form (ie: editing an item takes you back to the home page)

## Implications

```js
const flash = {
  msg: '',
  type: '',
  id: '',
  routeWhereInitiated: '',
  routeWhereRendered: ''
};
```

### Examples:

```js
// The var names below are for example only;
// the objects themselves are what get committed to state.

// add and edit item success flashes need to wait to get response
// from the server
const addItemSuccessFlash = {
  type: 'success',
  msg: `Successfully added <strong>${item.name}</strong>! <a href="/edit/${
    item._id
  }">View item →</a>`,
  id: unixTimeStamp,
  routeWhereInitiated: 'add item form',
  routeWhereRendered: 'add item form'
};

const editItemSuccessFlash = {
  type: 'success',
  msg: `Successfully updated <strong>${item.name}</strong>! <a href="/edit/${
    item._id
  }">View item</a>.`,
  id: unixTimeStamp,
  routeWhereInitiated: 'add item form',
  routeWhereRendered: 'grocery form'
};

const groceryFormSelectErrorFlash = {
  type: 'error',
  msg: `Select something will ya!`,
  id: unixTimeStamp,
  routeWhereInitiated: 'grocery form',
  routeWhereRendered: 'grocery form'
};

const groceryFormEmailErrorFlash = {
  type: 'error',
  msg: `Send the list to someone will ya!`,
  id: unixTimeStamp,
  routeWhereInitiated: 'grocery form',
  routeWhereRendered: 'grocery form'
};
```
