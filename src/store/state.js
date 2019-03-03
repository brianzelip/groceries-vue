export const allPossibleGroceryItems = [];

export const userSelectedItems = {};

export const storesRef = {
  tj: { name: 'TJ', order: 0 },
  moms: { name: 'Moms', order: 1 },
  wineSource: { name: 'Wine Source', order: 2 },
  howl: { name: 'Howl', order: 3 },
  farmersMarket: { name: 'Farmers Market', order: 4 },
  target: { name: 'Target', order: 5 },
  tjMaxx: { name: 'TJ Maxx', order: 6 },
  riteAid: { name: 'Rite Aid', order: 7 },
  noStore: { name: null, order: 99 }
};

export const storesWithAreas = ['tj', 'moms'];

export const storesAreasRef = {
  tjAreas: {
    '1': 'raw nuts, fruit, vegetables',
    '2': 'hummus, eggs, soy milk, oj, cream cheese, sour cream',
    '3':
      'frozen pizza, frozen stuff, cookies and chocolate covered stuff, frozen fish, etc',
    '4': 'crackers, cereal, tortilla chips, cheetos',
    '5': 'whole milk, cream, butter',
    '6':
      'dog biscuits, broth, pasta, pasta sauce, sponges, tooth paste, tissue, syrup, tahini, soy, olive oil, etc',
    '7': 'bread, raw meat, cheese, water'
  },
  momsAreas: {
    '1': 'vegetables, fruit, raw meat',
    '2': 'yougurt, milk, cream, cheese, pickles, bulk granola, bulk beans',
    '3': 'bread, dried fruit'
  }
};

export const newItem = {
  name: '',
  stores: [],
  tjArea: null,
  momsArea: null,
  defaultStore: ''
};

export const itemFormStoresTjIsSelected = false;

export const itemFormStoresMomsIsSelected = false;
