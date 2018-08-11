const { createField } = require("../index");

describe("createField()", () => {
  it("should returns new field object", () => {
    const data = {
      tableID: "id-1",
      name: "field",
      type: "STRING"
    };

    const expected = {
      id: expect.any(String),
      ...data
    };

    const result = createField(data);

    expect(result).toEqual(expected);
  });
});
