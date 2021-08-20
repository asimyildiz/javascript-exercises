/**
 * Write a JavaScript function that checks whether the `input` is an array or not
 * Example: isArray([]) => true
 * Example: isArray(0) => false
 * @param {*} input - any value
 * @returns {boolean} - true if it is an array, false if not
 */
const isArray = (input) => {
  return Array.isArray(input);
};

/**
 * Write a JavaScript function that clones an array and return cloned array.
 * Cloned array should not be updated when input array is updated!
 * Example: cloneArray([1, 2, 3]) => [1, 2, 3]
 * @param {Array<*>} array - input array
 * @returns {Array<*>} - cloned array
 */
const cloneArray = (array) => {
  return [...array];
};

/**
 * Write a JavaScript function that returns the first element of an array.
 * Passing a parameter 'n' will return the first 'n' elements of the array.
 * Example: first([1, 2, 3]) => [1]
 * Example: first([1, 2, 3], 2) => [1, 2]
 * @param {Array<*>} array - input array
 * @param {number} n - number of items from start
 * @returns {Array<*>} - returned array
 */
const getFirstItems = (array, n = 1) => {
  return array.slice(0, n);
};

/**
 * Write a JavaScript function that returns the last element of an array.
 * Passing a parameter 'n' will return the last 'n' elements of the array.
 * Example: last([1, 2, 3]) => [3]
 * Example: last([1, 2, 3], 2) => [2, 3]
 * @param {Array<*>} array - input array
 * @param {number} n - number of items from finish
 * @returns {Array<*>} - returned array
 */
const getLastItems = (array, n = 1) => {
  return array.slice(array.length - n);
};

/**
 * Write a JavaScript function that joins all elements of the input array
 * with a given seperator into a string and return that string.
 * (Hint: The parameter "seperator" is optional)
 * Example: joinArrayIntoString([1, 2, 3]) => "1,2,3"
 * Example: joinArrayIntoString([1, 2, 3], '+') => "1+2+3"
 * @param {Array<*>} array - input array
 * @param {string} seperator - separator
 * @returns {string} - returned string
 */
const joinArrayIntoString = (array, seperator = ",") => {
  return array.join(seperator);
};

/**
 * Write a JavaScript function that accepts a string (number) as input and insert dash (-)
 * between each two even numbers
 * Example: insertDashBetweenEachTwoEvenNumbers(025468) => 0-254-6-8
 * @param {string} input - input number
 * @returns {string} - returned string
 */
const insertDashBetweenEachTwoEvenNumbers = (input) => {
  return input
    .split("")
    .map((item, index) =>
      item % 2 === 0 && input[index + 1] % 2 === 0 ? `${item}-` : item
    )
    .join("");
};

/**
 * Write a JavaScript function that returns sorted items of an array.
 * Example: sortItemsOfArray([3, 1, 2]) => [1, 2, 3]
 * @param {Array<*>} array - input array
 * @returns {Array<*>} - sorted array
 */
const sortItemsOfArray = (array) => {
  return array.sort();
};

/**
 * Write a JavaScript function that finds the most frequent item of an array
 * and returns that item and count of that item
 * Example: findMostFrequentItemOfArray([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) => a (5 times)
 * @param {Array<*>} array - input array
 * @returns {string} - returned string
 */
const findMostFrequentItemOfArray = (array) => {
  const sorted = array.slice().sort();
  let most = [undefined, 0];
  let counter = 0;

  sorted.reduce(function (old, chr) {
    old == chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1);
    return chr;
  });

  return `${most[0]} (${most[1]} times)`;
};

/**
 * Write a JavaScript function that accepts a string as input
 * and swaps the case of each character.
 * Example: swapCaseOfEachCharacter('The Quick Brown Fox') => 'tHE qUICK bROWN fOX'
 * @param {string} input - input text
 * @returns {string} - case switched text
 */
const swapCaseOfEachCharacter = (input) => {
  return input
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
};

/**
 * Write a JavaScript function that returns the elements of the following array as a string.
 * Note: Use nested for loops.
 * Example: createStringFrom2dArray([[1, 2, 1, 24], [8, 11, 9, 4]]) => row0: 1,2,1,24 - row1: 8,11,9,4
 * @param {Array<Array<*>>} array - input array
 * @returns {string} - returned string
 */
const createStringFrom2dArray = (array) => {
  return array.map((item, index) => `row${index}: ${[...item]}`).join(" - ");
};

/**
 * Write a JavaScript function that returns the sum of squares of a numeric array
 * Example: calculateSumOfSquares([1, 2, 3]) => 14
 * @param {Array<number>} array - input array
 * @returns {number} - sum of squares
 */
const calculateSumOfSquares = (array) => {
  return array.reduce(
    (previous, current) => (previous += Math.pow(current, 2))
  );
};

/**
 * Write a JavaScript function that computes the sum and product of an array of integers
 * and returns as a string in this format "Sum: x, Product: y".
 * Example: findSumAndProductOfArray([1, 2, 3]) => "Sum: 6, Product: 6"
 * @param {Array<number>} array - input array
 * @returns {string} - returned string
 */
const findSumAndProductOfArray = (array) => {
  return `Sum: ${array.reduce(
    (previous, current) => (previous += current)
  )}, Product: ${array.reduce((previous, current) => (previous *= current))}`;
};

/**
 * Write a JavaScript function that adds items within a comma seperated string
 * into a blank array and returns that array.
 * Example: convertItemToArray('a,b,c') => ['a', 'b', 'c']
 * @param {string} input - input string
 * @returns {Array<string>} - returned array
 */
const convertItemToArray = (input) => {
  return input.split(",").map((item) => item.trim());
};

/**
 * Write a JavaScript function that removes the duplicate items
 * from an array (ignore case sensitivity).
 * Example: removeDuplicates(['a', 'A', 'b']) => ['a', 'b']
 * @param {Array<string>} array - input array
 * @returns {Array<string>} - returned array
 */
const removeDuplicates = (array) => {
  return [...new Set(array)].sort();
};

const getNumberWithOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

/**
 * Write a JavaScript function that returns the colors
 * in a comma seperated string with ordinals
 * Example: findPositionOfColors(["Blue", "Green", "Red"]) => 1st choice is Blue, 2nd choice is Green, 3rd choice is Red
 * @param {Array<string>} colors - colors
 * @returns {string}
 */
const findPositionOfColors = (colors) => {
  return colors
    .map(
      (item, index) => `${getNumberWithOrdinal(index + 1)} choice is ${item}`
    )
    .join(", ");
};

const isLeapYear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

/**
 * Write a JavaScript function that returns the leap years
 * in a given range of years as an array.
 * Note: start and end parameters are included
 * Example: getLeapYears(2000, 2012) => [2000, 2004, 2008, 2012]
 * @param {number} start - starting year
 * @param {number} end - ending year
 * @returns {Array<number>} - returned array
 */
const getLeapYears = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => (isLeapYear(start + idx) ? start + idx : null))
    .filter((n) => n);
};

/**
 * Write a JavaScript function that sorts the following array of objects by title property
 * and return sorted array as a string.
 * Example: const library = [
 *  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
 *  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
 * ];
 * sortArrayOfObjectsByTitle(library) => "[{ author: "Bill Gates", libraryID: 1254, title: "The Road Ahead" }, { author: "Steve Jobs", libraryID: 4264, title: "Walter Isaacson" }]"
 * @param {Array<Object>} input - input array
 * @returns {string} - returned string
 */
const sortArrayOfObjectsByTitle = (input) => {
  return input.sort((a, b) => ("" + a.title).localeCompare(b.title));
};

/**
 * Write a JavaScript program that finds a pair of elements (indices of the two numbers)
 * from an given array whose sum equals a specific target number.
 * Example: findSumOfTwo([10, 20, 10, 40, 50, 60, 70], 50) => 2, 3
 * @param {Array<number>} array - input array
 * @param {number} target - summed value
 * @returns {string} - indices of items
 */
const findSumOfTwo = (array, target) => {
  return [
    ...new Set(
      array
        .map((input, index) =>
          array.indexOf(target - input) > -1 ? index : null
        )
        .filter((n) => n)
    ),
  ].join(", ");
};

/**
 * Write a JavaScript function that merges two arrays and
 * removes all duplicates elements and return result as a new array.
 * Example: mergeAndRemoveDuplicates([1, 2, 3], [2, 30, 1]) => [3, 2, 30, 1]
 * @param {Array<*>} array1 - input array
 * @param {Array<*>} array2 - input array
 * @returns {Array<*>} - returned array
 */
const mergeAndRemoveDuplicates = (array1, array2) => {
  return [...new Set([...array1, ...array2])];
};

/**
 * Write a JavaScript function that removes a specific element
 * from an array and return result as a new array.
 * Example: removeElementFromArray([2, 5, 9, 6], 5) => [2, 9, 6]
 * @param {Array<*>} array - input array
 * @param {*} itemToBeRemoved - item to remove
 * @returns {Array<*>} - returned array
 */
const removeElementFromArray = (array, itemToBeRemoved) => {
  return array
    .map((item) => (item === itemToBeRemoved ? null : item))
    .filter((n) => n);
};

/**
 * Write a JavaScript function that finds if an array contains
 * a specific element and return boolean result.
 * Example: contains([2, 5, 9, 6], 5) => true
 * @param {Array<*>} array - input array
 * @param {*} target - target to find
 * @returns {boolean} - is target found or not
 */
const contains = (array, target) => {
  return array.indexOf(target) > -1;
};

/**
 * Write a JavaScript function to get nth largest element from an unsorted array.
 * Example: findNthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4) => 89
 * @param {Array<number>} array - input array
 * @param {number} n - nth largest item
 * @returns {number} - found item
 */
const findNthLargest = (array, n) => {
  return array.sort((a, b) => a - b)[n];
};

/**
 * Write a JavaScript function that moves an array element
 * from one position to another and returns a new result array.
 * Example: move([10, 20, 30, 40, 50], 0, 2) => [20, 30, 10, 40, 50]
 * @param {Array<*>} array - input array
 * @param {number} from - index of item for switch
 * @param {number} to - index of item to switch
 * @returns {Array<*>} - returned array
 */
const move = (array, from, to) => {
  [array[to], array[from]] = [array[from], array[to]];
  return array;
};

/**
 * Write a JavaScript function that filters false, null, 0 and blank values
 * from an array and returns a new result array
 * Example: filterArrayValues([58, '', 'abcd', true, null, false, 0]) => [58, "abcd", true]
 * @param {Array<*>} array - input array
 * @returns {Array<*>} - filtered array
 */
const filterArrayValues = (array) => {
  return array.filter((n) => n);
};

/**
 * Write a JavaScript function that finds the unique elements
 * from two arrays and returns a new result array as string
 * Example: mergeUnique([1, 2, 3], [100, 2, 1, 10]) => ["1", "2", "3", "10", "100"]
 * @param {Array<*>} array1 - input array
 * @param {Array<*>} array2 - input array
 * @returns {Array<*>} - unique array
 */
const mergeUnique = (array1, array2) => {
  return [
    ...new Set([...array1.flat(Infinity), ...array2.flat(Infinity)]),
  ].sort((a, b) => a - b);
};

module.exports = {
  isArray,
  cloneArray,
  getFirstItems,
  getLastItems,
  joinArrayIntoString,
  insertDashBetweenEachTwoEvenNumbers,
  sortItemsOfArray,
  findMostFrequentItemOfArray,
  swapCaseOfEachCharacter,
  createStringFrom2dArray,
  calculateSumOfSquares,
  findSumAndProductOfArray,
  convertItemToArray,
  removeDuplicates,
  findPositionOfColors,
  getLeapYears,
  sortArrayOfObjectsByTitle,
  findSumOfTwo,
  mergeAndRemoveDuplicates,
  removeElementFromArray,
  contains,
  findNthLargest,
  move,
  filterArrayValues,
  mergeUnique,
};
