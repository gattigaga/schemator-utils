const { createOption } = require("../index");

describe("createOption()", () => {
  it("should returns new option object without checked", () => {
    const data = {
      id: "id",
      label: "ID"
    };

    const expected = {
      ...data,
      isChecked: false
    };

    const result = createOption(data);

    expect(result).toEqual(expected);
  });

  it("should returns new option object", () => {
    const data = {
      id: "id",
      label: "ID",
      isChecked: true
    };

    const expected = data;
    const result = createOption(data);

    expect(result).toEqual(expected);
  });
});
