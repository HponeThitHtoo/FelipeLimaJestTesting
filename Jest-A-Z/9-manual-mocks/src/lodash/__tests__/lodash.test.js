const lodash = require("lodash");

// jest.unmock("lodash");

test("repeat", () => {
  // expect(lodash.repeat("A", 3)).toBe("AAA");
  expect(lodash.repeat("A")).toBe("BBB");
});

test("upperCase", () => {
  expect(lodash.upperCase("bbb")).toBe("BBB");
  expect(lodash.head([2, 3])).toEqual(2);
});
