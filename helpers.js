/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// inserting an SVG
exports.icon = name => fs.readFileSync(`./icons/${name}.svg`);

// Some details about the site
exports.site = {
  name: 'groceries',
  css: '/css/groceries.min.css',
  author: 'Brian Zelip',
  authorUri: 'http://zelip.me',
  description: `Family groceries web app.`,
  byline: 'Make a list and send it',
  keywords: ['Node.js', 'Express.js', 'MongoDB', 'groceries']
};

const stores = {
  tj: { name: 'TJ', order: 0 },
  moms: { name: 'Moms', order: 1 },
  wineSource: { name: 'Wine Source', order: 2 },
  howl: { name: 'Howl', order: 3 },
  farmersMarket: { name: 'Farmers Market', order: 4 },
  target: { name: 'Target', order: 5 },
  tjMaxx: { name: 'TJ Maxx', order: 6 },
  riteAid: { name: 'Rite Aid', order: 7 }
};
exports.stores = stores;

const tjAreas = {
  '1': 'raw nuts, fruit, vegetables',
  '2': 'hummus, eggs, soy milk, oj, cream cheese, sour cream',
  '3':
    'frozen pizza, frozen stuff, cookies and chocolate covered stuff, frozen fish, etc',
  '4': 'crackers, cereal, tortilla chips, cheetos',
  '5': 'whole milk, cream, butter',
  '6':
    'dog biscuits, broth, pasta, pasta sauce, sponges, tooth paste, tissue, syrup, tahini, soy, olive oil, etc',
  '7': 'bread, raw meat, cheese, water'
};
exports.tjAreas = tjAreas;

const momsAreas = {
  '1': 'vegetables, fruit, raw meat',
  '2': 'yougurt, milk, cream, cheese, pickles, bulk granola, bulk beans',
  '3': 'bread, dried fruit'
};
exports.momsAreas = momsAreas;

const storesAreas = [['TJ areas', tjAreas], ['Moms areas', momsAreas]];
exports.storesAreas = storesAreas;

exports.storesWithThisItem = obj => {
  const result = [];
  Object.keys(stores).forEach(store => {
    typeof obj.stores[store] === 'boolean'
      ? obj.stores[store]
        ? result.push(store)
        : null
      : obj.stores[store].hasItem
        ? result.push(store)
        : null;
  });
  return result;
};

const emailDict = {
  [process.env.AZ]: 'Abbie',
  [process.env.BZ]: 'Brian'
};

exports.emailDict = emailDict;

exports.getEmailRecipients = variable => {
  let result = [];
  if (typeof variable === 'string') {
    result.push(emailDict[variable]);
  } else if (Array.isArray(variable)) {
    variable.forEach(item => {
      result.push(emailDict[item]);
    });
  } else {
    return "SORRY SOMETHING's GONE TERRIBLY WRONG!";
  }
  return result;
};

exports.itemHasStore = (itemObject, storeName) => {
  return itemObject.stores && itemObject.stores.includes(storeName);
};
