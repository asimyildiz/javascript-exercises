// global variable
let myMap;

/**
 * Create a empty Map() object and assign to the map
 * @returns {Map}
 */
const createMap = () => {
  return new Map();
};
myMap = createMap();

/**
 * Add all persons from "reqdata" by key:first_name value:email to the map
 * (Eg: 'ali' => 'aliveli@gmail.com')
 * @param {Array<Object>} list - person list
 * @returns {Map}
 */
const addPersons = (list) => {
  list.map((item) => myMap.set(item.first_name, item.email));
  return myMap;
};

/**
 * count number of elements from the map
 * @returns {number} - number of elements
 */
const count = () => {
  return myMap.size;
};

/**
 * Search for item inside the map by key
 * @param {string} key - key to search
 * @returns {boolean} - true if found, false if not
 */
const searchKey = (key) => {
  return myMap.has(key);
};

/**
 * Search for item inside the map by value
 * @param {string} value - value to search
 * @returns {boolean} - true if found, false if not
 */
const searchValue = (value) => {
  return [...myMap.values()].indexOf(value) > -1;
};

/**
 * Remove Item by key from the map
 * @param {string} key - key to search
 * @returns {boolean} - true if removed, false if not
 */
const removeItem = (key) => {
  return myMap.delete(key);
};

/**
 * Creates an array which consists of names
 * @returns {Array<string>} - list of names
 */
const createNameList = () => {
  return [...myMap.keys()];
};

/**
 * Creates an array which consists of emails
 * @returns {Array<string>} - list of emails
 */
const createEmailList = () => {
  return [...myMap.values()];
};

// Module Exports
module.exports = {
  createMap,
  addPersons,
  count,
  searchKey,
  searchValue,
  removeItem,
  createNameList,
  createEmailList,
};
