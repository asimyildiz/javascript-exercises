const methods = require("./object");

describe("object method tests", function () {
  it("should test getObjectProperties method", function () {
    const student = {
      name: "David Rayy",
      sclass: "VI",
      rollno: 12,
    };

    expect(methods.getObjectProperties(student)).toBe("name,sclass,rollno");
  });

  it("should test getLengthOfObject method", function () {
    const student = {
      name: "David Rayy",
      sclass: "VI",
      rollno: 12,
    };

    expect(methods.getLengthOfObject(student)).toBe(3);
  });

  it("should test getReadingStatus method", function () {
    const library = [
      {
        title: "Bill Gates",
        author: "The Road Ahead",
        readingStatus: true,
      },
      {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: true,
      },
      {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false,
      },
    ];

    expect(methods.getReadingStatus(library)).toBe(
      "Already read 'Bill Gates' by The Road Ahead. Already read 'Steve Jobs' by Walter Isaacson. You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins"
    );
  });
});
