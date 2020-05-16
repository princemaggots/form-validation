import { set } from 'lodash';

export function onInputChangedFactory(charData, path) {
  return event => {
    set(charData, path, event.currentTarget.value);
    console.log(charData);
    console.log(JSON.stringify(charData));
    localStorage.setItem('charData', JSON.stringify(charData));
  };
}


export function getCharDataFromStorage() {
  let charData;
  try {
    charData = JSON.parse(localStorage.getItem('charData')) || {};
  } catch (e) {
    charData = {};
  }
  return charData;
}

export function cleanCharData(entries) {
  const newEntries = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const entry of entries) {
    if (Object.values(entry).length > 0) {
      const newIds = [];
      if (entry.Ids) {
        // eslint-disable-next-line no-restricted-syntax
        for (const id of entry.Ids) {
          if (Object.values(id).length > 0) {
            newIds.push(id);
          }
          if (newIds.length) {
            entry.Ids = newIds;
          } else {
            delete entry.Ids;
          }
        }
      }
      if (Object.values(entry).length > 0) {
        newEntries.push(entry);
      }
    }
  }
  return newEntries;
}