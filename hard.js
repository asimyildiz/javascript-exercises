/**
 * You are given a list of numbers where you need to find which one of the given numbers is different than others based on "evenness".
 *
 * You need to write a program that accepts a "String" argument
 * that includes a list of numbers, where we expect from you
 * to find the different number and return it's position.
 *
 * Examples :
 * checkEvenness("4 6 7 8 10") => 2
 * Third number is odd, while the rest of the numbers are even
 *
 * checkEvenness("3 2 3 3") => 1
 * Second number is even, while the rest of the numbers are odd
 */
const checkEvenness = (input) => {
  // Write your code here
};

/**
 * You are given a string which may have some number appended to it where you need to increment that number part by 1.
 * The number part, if exists, will always be at the end of this string (not in the center, or beginning of the string, but a string can be consisted only from numbers).
 * If there is no number at the end of the string, then number "1" shall be appended to the string.
 * Please also keep the amount of digits if the number part has leading zeros.
 *
 * Examples :
 * makeSuperString('digiturk') => digiturk1
 * There is no number part, so just append 1 to the string
 *
 * makeSuperString('digiturk23') => digiturk24
 * Increase the number part by 1
 *
 * makeSuperString('1') => 2
 * Increase the number part by 1
 *
 * makeSuperString('digiturk0042') => digiturk0043
 * Increase the number part by 1 while keeping the amount of leading zeros
 *
 * makeSuperString('digiturk0099') => digiturk0100
 * Increase the number part by 1 while keeping the amount of leading zeros
 */
const makeSuperString = (input) => {
  // Write your code here
};

/**
 * You are given a number and a list of numbers where you need to classify the number as "boring", "interesting" or "awesome".
 * The conditions to classify the number as "awesome" will be as such :
 * Number is only be interesting if greater than 99
 * Number if starts with a number (1-9) and followed by only 0 => (100, 90000)
 * Number if consists by only the same number (1-9) => (111111)
 * Number if is incrementing => (1234, 56789)
 * Number if is decrementing => (4321, 98765)
 * Number if is pallindrome => (1221, 73837)
 * Number if exists inside the array passed to the method
 *
 * If a number satisfies one of these conditions as it is then it will be an "awesome" number => 2
 * If a number satisfies one of these conditions on within 2 more tries only, then it will be an "interesting" number => 1
 * If a number does not satisfy any of these conditions on within 2 more tries, then it will be a "boring" number => 0
 *
 * Input will always be between 0-1.000.000.000
 * List of numbers passed to the method can be empty
 * The output SHALL only be 0, 1, 2
 * While incrementing 0 may come only after number 9, 7890
 * While decrementing 0 may come only after number 1, 3210
 *
 * Examples :
 * isInterestingNumber(1, [1337, 256]) => 0
 * 1 is a boring number, because it does not satisfy any of these conditions within 2 more tries
 * It is not greater than 99
 *
 * isInterestingNumber(88, [1337, 256]) => 0
 * 88 is a boring number, because it does not satisfy any of these conditions within 2 more tries
 * It is not greater than 99
 *
 * isInterestingNumber(11210, []) => 1
 * 11210 is an interesting number because it satisfies a condition within 2 more tries.
 * It is greater than 99
 * 11210 does not satisfy any condition
 * 11211 satisfies condition 6 (pallindrome)
 *
 * isInterestingNumber(9999997, []) => 1
 * 9999997 is an interesting number because it satisfies a condition within 2 more tries.
 * It is greater than 99
 * 9999997 does not satisfy any condition
 * 9999998 does not satisfy any condition
 * 9999999 satisfies condition 3 (all same number)
 *
 * isInterestingNumber(654, []) => 2
 * 654 is an awesome number because it satisfies a condition as it is
 * It is greater than 99
 * 654 satisfies condition 5 (decrementing)
 *
 * isInterestingNumber(1337, [1337, 256]) => 2
 * 1337 is an awesome number because it satisfies a condition as it is
 * It is greater than 99
 * 1337 satisfies condition 7 (exists inside the array)
 */
const isInterestingNumber = (number, numberList = []) => {
  // Write your code here
};

module.exports = {
  checkEvenness,
  makeSuperString,
  isInterestingNumber,
};
