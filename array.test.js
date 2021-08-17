const methods = require("./array");

describe("array method tests", function () {
  it("should test isArray method", function () {
    expect(methods.isArray([])).toBe(true);
    expect(methods.isArray(null)).toBe(false);
    expect(methods.isArray("1")).toBe(false);
  });

  it("should test cloneArray method", function () {
    const input = [1, 2, 3, "a", { title: "test" }];
    const result = methods.cloneArray(input);
    expect(result).toStrictEqual([1, 2, 3, "a", { title: "test" }]);

    input[0] = 5;
    expect(result).toStrictEqual([1, 2, 3, "a", { title: "test" }]);
  });

  it("should test getFirstItems method", function () {
    expect(methods.getFirstItems([1, 2, 3])).toStrictEqual([1]);
    expect(methods.getFirstItems([1, 2, 3], 2)).toStrictEqual([1, 2]);
  });

  it("should test getLastItems method", function () {
    expect(methods.getLastItems([1, 2, 3])).toStrictEqual([3]);
    expect(methods.getLastItems([1, 2, 3], 2)).toStrictEqual([2, 3]);
  });

  it("should test joinArrayIntoString method", function () {
    expect(methods.joinArrayIntoString([1, 2, 3])).toBe("1,2,3");
    expect(methods.joinArrayIntoString([1, 2, 3], "+")).toBe("1+2+3");
  });

  it("should test insertDashBetweenEachTwoEvenNumbers method", function () {
    expect(methods.insertDashBetweenEachTwoEvenNumbers("025468")).toBe(
      "0-254-6-8"
    );
  });

  it("should test sortItemsOfArray method", function () {
    expect(methods.sortItemsOfArray([3, 1, 2])).toStrictEqual([1, 2, 3]);
  });

  it("should test findMostFrequentItemOfArray method", function () {
    expect(
      methods.findMostFrequentItemOfArray([
        3,
        "a",
        "a",
        "a",
        2,
        3,
        "a",
        3,
        "a",
        2,
        4,
        9,
        3,
      ])
    ).toBe("a (5 times)");
  });

  it("should test swapCaseOfEachCharacter method", function () {
    expect(methods.swapCaseOfEachCharacter("The Quick Brown Fox")).toBe(
      "tHE qUICK bROWN fOX"
    );
  });

  it("should test createStringFrom2dArray method", function () {
    expect(
      methods.createStringFrom2dArray([
        [1, 2, 1, 24],
        [8, 11, 9, 4],
      ])
    ).toBe("row0: 1,2,1,24 - row1: 8,11,9,4");
  });

  it("should test calculateSumOfSquares method", function () {
    expect(methods.calculateSumOfSquares([1, 2, 3])).toBe(14);
  });

  it("should test findSumAndProductOfArray method", function () {
    expect(methods.findSumAndProductOfArray([1, 2, 3])).toBe(
      "Sum: 6, Product: 6"
    );
  });

  it("should test convertItemToArray method", function () {
    expect(methods.convertItemToArray("a, b, c")).toStrictEqual([
      "a",
      "b",
      "c",
    ]);
  });

  it("should test removeDuplicates method", function () {
    expect(
      methods.removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6])
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should test findPositionOfColors method", function () {
    expect(
      methods.findPositionOfColors(
        ["Blue", "Green", "Red"],
        ["th", "st", "nd", "rd"]
      )
    ).toBe("1st choice is Blue, 2nd choice is Green, 3rd choice is Red");
  });

  it("should test getLeapYears method", function () {
    expect(methods.getLeapYears(2000, 2012)).toStrictEqual([
      2000, 2004, 2008, 2012,
    ]);
  });

  it("should test sortArrayOfObjectsByTitle method", function () {
    const library = [
      { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
      { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
      {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
      },
    ];
    expect(methods.sortArrayOfObjectsByTitle(library)).toStrictEqual([
      {
        author: "Suzanne Collins",
        libraryID: 3245,
        title: "Mockingjay: The Final Book of The Hunger Games",
      },
      { author: "Bill Gates", libraryID: 1254, title: "The Road Ahead" },
      { author: "Steve Jobs", libraryID: 4264, title: "Walter Isaacson" },
    ]);
  });

  it("should test findSumOfTwo method", function () {
    expect(methods.findSumOfTwo([10, 20, 10, 40, 50, 60, 70], 50)).toBe("2, 3");
  });

  it("should test mergeAndRemoveDuplicates method", function () {
    expect(
      methods.mergeAndRemoveDuplicates([1, 2, 3], [2, 30, 1])
    ).toStrictEqual([1, 2, 3, 30]);
  });

  it("should test removeElementFromArray method", function () {
    expect(methods.removeElementFromArray([2, 5, 9, 6], 5)).toStrictEqual([
      2, 9, 6,
    ]);
  });

  it("should test contains method", function () {
    expect(methods.contains([2, 5, 9, 6], 5)).toBe(true);
  });

  it("should test findNthLargest method", function () {
    expect(methods.findNthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)).toBe(
      89
    );
  });

  it("should test move method", function () {
    expect(methods.move([10, 20, 30, 40, 50], 0, 2)).toStrictEqual([
      30, 20, 10, 40, 50,
    ]);
  });

  it("should test filterArrayValues method", function () {
    expect(
      methods.filterArrayValues([58, "", "abcd", true, null, false, 0])
    ).toStrictEqual([58, "abcd", true]);
  });

  it("should test mergeUnique method", function () {
    expect(methods.mergeUnique([1, 2, 3], [100, 2, 1, 10])).toStrictEqual([
      1, 2, 3, 10, 100,
    ]);
    expect(
      methods.mergeUnique([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])
    ).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(methods.mergeUnique([1, 2, 3], [100, 2, 1, 10])).toStrictEqual([
      1, 2, 3, 10, 100,
    ]);
  });
});
