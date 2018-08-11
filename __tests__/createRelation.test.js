const { createRelation } = require("../index");

describe("createRelation()", () => {
  it("should returns new relation object", () => {
    const data = {
      fieldID: "1",
      fromTableID: "2",
      toTableID: "1"
    };

    const expected = {
      id: expect.any(String),
      ...data
    };

    const result = createRelation(data);

    expect(result).toEqual(expected);
  });
});
