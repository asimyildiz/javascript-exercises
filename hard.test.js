const methods = require("./hard");
/**
 * check whether a number is interesting, boring or awesome
 * @param {number} value 
 * @param {Array<number>} list 
 * @param {number} result 
 */
const testInterestingNumber = function (value, list, result) {
  expect(methods.isInterestingNumber(value, list)).toBe(result);
};

describe("hard method tests", function () {
  it("should test checkEvenness method", function () {
    expect(
      methods.checkEvenness(
        "88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46"
      )
    ).toBe(3);
    expect(methods.checkEvenness("100 99 100")).toBe(1);
    expect(methods.checkEvenness("5 3 2")).toBe(2);
    expect(methods.checkEvenness("43 28 1 91")).toBe(1);
    expect(
      methods.checkEvenness(
        "20 94 56 50 10 98 52 32 14 22 24 60 4 8 98 46 34 68 82 82 98 90 50 20 78 49 52 94 64 36"
      )
    ).toBe(25);
    expect(methods.checkEvenness("2 4 7 8 10")).toBe(2);
    expect(methods.checkEvenness("1 2 2")).toBe(0);
    expect(
      methods.checkEvenness(
        "79 27 77 57 37 45 27 49 65 33 57 21 71 19 75 85 65 61 23 97 85 9 23 1 9 3 99 77 77 21 79 69 15 37 15 7 93 81 13 89 91 31 45 93 15 97 55 80 85 83"
      )
    ).toBe(47);
    expect(methods.checkEvenness("100 100 1")).toBe(2);
    expect(
      methods.checkEvenness(
        "9 31 27 93 17 77 75 9 9 53 89 39 51 99 5 1 11 39 27 49 91 17 27 79 81 71 37 75 35 13 93 4 99 55 85 11 23 57 5 43 5 61 15 35 23 91 3 81 99 85 43 37 39 27 5 67 7 33 75 59 13 71 51 27 15 93 51 63 91 53 43 99 25 47 17 71 81 15 53 31 59 83 41 23 73 25 91 9"
      )
    ).toBe(31);
  });

  it("should test makeSuperString method", function () {
    expect(methods.makeSuperString("digiturk000")).toBe("digiturk001");
    expect(methods.makeSuperString("digiturk999")).toBe("digiturk1000");
    expect(methods.makeSuperString("digiturk00999")).toBe("digiturk01000");
    expect(methods.makeSuperString("digiturk")).toBe("digiturk1");
    expect(methods.makeSuperString("digiturk001")).toBe("digiturk002");
    expect(methods.makeSuperString("digiturk1")).toBe("digiturk2");
    expect(methods.makeSuperString("1")).toBe("2");
    expect(methods.makeSuperString("009")).toBe("010");
  });

  it('should handle "boring" numbers', function () {
    testInterestingNumber(1, [], 0);
    testInterestingNumber(30, [], 0);
    testInterestingNumber(88, [], 0);
    testInterestingNumber(97, [], 0);
    testInterestingNumber(7382, [], 0);
    testInterestingNumber(99919911, [], 0);
  });

  it('should handle ordered yet still "boring" numbers', function () {
    testInterestingNumber(7540, [], 0);
    testInterestingNumber(1590, [], 0);
  });

  it('should handle "awesome" big numbers', function () {
    testInterestingNumber(100, [], 2);
    testInterestingNumber(7000, [], 2);
    testInterestingNumber(800000, [], 2);
  });

  it('should handle "awesome" monotone numbers', function () {
    testInterestingNumber(111, [], 2);
    testInterestingNumber(444, [], 2);
    testInterestingNumber(9999999, [], 2);
  });

  it('should handle "awesome" numbers exist inside the number list', function () {
    testInterestingNumber(1337, [1337, 256], 2);
    testInterestingNumber(80085, [80085], 2);
    testInterestingNumber(256, [1337, 256, 376006], 2);
  });

  it('should handle "awesome" palindromic numbers', function () {
    testInterestingNumber(101, [], 2);
    testInterestingNumber(11011, [], 2);
    testInterestingNumber(7473747, [], 2);
  });

  it('should handle "awesome" incrementing numbers', function () {
    testInterestingNumber(123, [], 2);
    testInterestingNumber(1234, [], 2);
    testInterestingNumber(67890, [], 2);
    testInterestingNumber(234567890, [], 2);
  });

  it('should handle "awesome" decrementing numbers', function () {
    testInterestingNumber(3210, [], 2);
    testInterestingNumber(654, [], 2);
    testInterestingNumber(8765, [], 2);
    testInterestingNumber(987654321, [], 2);
  });

  it('should handle "interesting" upcoming big numbers', function () {
    testInterestingNumber(98, [], 1);
    testInterestingNumber(99, [], 1);
    testInterestingNumber(6998, [], 1);
    testInterestingNumber(799999, [], 1);
  });

  it('should handle "interesting" upcoming monotone numbers', function () {
    testInterestingNumber(109, [], 1);
    testInterestingNumber(110, [], 1);
    testInterestingNumber(442, [], 1);
    testInterestingNumber(9999997, [], 1);
  });

  it('should handle "interesting" upcoming numbers exist inside the number list', function () {
    testInterestingNumber(1335, [1337, 256], 1);
    testInterestingNumber(255, [1337, 256], 1);
    testInterestingNumber(80083, [80085], 1);
    testInterestingNumber(254, [1337, 256, 376006], 1);
  });

  it('should handle "interesting" upcoming palindromic numbers', function () {
    testInterestingNumber(119, [], 1);
    testInterestingNumber(120, [], 1);
    testInterestingNumber(7473745, [], 1);
  });

  it('should handle "interesting" upcoming incrementing numbers', function () {
    testInterestingNumber(122, [], 1);
    testInterestingNumber(1232, [], 1);
    testInterestingNumber(67888, [], 1);
    testInterestingNumber(234567889, [], 1);
  });

  it('should handle "interesting" upcoming decrementing numbers', function () {
    testInterestingNumber(3208, [], 1);
    testInterestingNumber(3209, [], 1);
    testInterestingNumber(987654319, [], 1);
    testInterestingNumber(987654320, [], 1);
  });
});