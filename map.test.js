const map = require("./map");
const reqdata = require("./request");

describe("map method tests", function () {
  it("should test createMap method", function () {
    expect(map.createMap()).toEqual(new Map());
  });

  it("should test addPersons method", function () {
    const obj = Object.fromEntries(map.addPersons(reqdata).entries());
    expect(obj).toEqual({
      Byron: "byron.fields@reqres.in",
      George: "george.edwards@reqres.in",
      Lindsay: "lindsay.ferguson@reqres.in",
      Michael: "michael.lawson@reqres.in",
      Rachel: "rachel.howell@reqres.in",
      Tobias: "tobias.funke@reqres.in",
    });
  });

  it("should test count method", function () {
    expect(map.count()).toBe(6);
  });

  it("should test searchKey method", function () {
    expect(map.searchKey("Byron")).toBe(true);
  });

  it("should test searchValue method", function () {
    expect(map.searchValue("lindsay.ferguson@reqres.in")).toBe(true);
  });

  it("should test removeItem method", function () {
    expect(map.removeItem("Rachel")).toBeTruthy();
    expect(map.count()).toEqual(5);
  });

  it("should test createNameList method", function () {
    expect(map.createNameList()).toEqual([
      "Michael",
      "Lindsay",
      "Tobias",
      "Byron",
      "George",
    ]);
  });

  it("should test createEmailList method", function () {
    expect(map.createEmailList()).toEqual([
      "michael.lawson@reqres.in",
      "lindsay.ferguson@reqres.in",
      "tobias.funke@reqres.in",
      "byron.fields@reqres.in",
      "george.edwards@reqres.in",
    ]);
  });
});
