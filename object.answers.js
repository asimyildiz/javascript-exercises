/**
 * Write a JavaScript function that lists the properties of a JavaScript object and returns the output as a string.
 * Example: getObjectProperties({name: 'David', class: '5A', rollno: 12}) => 'name,class,rollno'
 * @param {Object} obj - input object
 * @returns {string} - returned string
 */
const getObjectProperties = (obj) => {
  return Object.keys(obj).join();
};

/**
 * Write a JavaScript function that gets the length of a JavaScript object and returns the output as an integer.
 * Example: getLengthOfObject({name: 'David', class: '5A', rollno: 12}) => 3
 * @param {Object} obj
 * @returns {number}
 */
const getLengthOfObject = (obj) => {
  return Object.keys(obj).length;
};

/**
 * Write a JavaScript function that displays the reading status (i.e. display book name, author name and reading status)
 * of the following books and returns the output as a string.
 * Example: const library = [
 *  {
 *      author: 'Bill Gates',
 *      title: 'The Road Ahead',
 *      readingStatus: true
 *  },
 *  {
 *      author: 'Steve Jobs',
 *      title: 'Walter Isaacson',
 *     readingStatus: true
 *  },
 *  {
 *      author: 'Suzanne Collins',
 *      title:  'Mockingjay: The Final Book of The Hunger Games',
 *      readingStatus: false
 *  }
 * ];
 * getReadingStatus(library) => "Already read 'Bill Gates' by The Road Ahead. Already read 'Steve Jobs' by Walter Isaacson. You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins."
 * @param {Array<Object>} array
 */
const getReadingStatus = (array) => {
  return array
    .map(
      (item) =>
        `${item.readingStatus ? "Already read" : "You still need to read"} '${
          item.title
        }' by ${item.author}`
    )
    .join(". ");
};

module.exports = {
  getObjectProperties,
  getLengthOfObject,
  getReadingStatus,
};
