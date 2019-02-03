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

export const emailTemplate = (store, items) => {
  return `
    <h1 style="font-size: 1.25rem; font-weight: 400;">${
      store !== 'noStore' ? storesRef[store].name.toLowerCase() : 'other'
    }</h1>
    <ol style="margin-bottom: 2rem; padding-left: 0; list-style: none;">
      ${items
        .map(
          item =>
            `<li>
          <input
            type="checkbox"
            value="${item.name}"
            id="${item.name}"
            name="item"
          >
          <label for="${item.name}">
            ${item.name}${item.qty ? ` (x${item.qty})` : ''}
          </label>
        </li>          
      `
        )
        .join('')}
    </ol>
  `;
};
