const { createTable } = require("../index");

describe("createTable()", () => {
  it("should returns new table object", () => {
    const data = {
      name: "User",
      timestamp: expect.any(Number),
      position: { x: 128, y: 128 },
      options: [{ id: "id", label: "ID", isChecked: true }]
    };

    const expected = {
      id: expect.any(String),
      ...data
    };

    const result = createTable(data);

    expect(result).toEqual(expected);
  });
});
