test("transform-me", () => {
  /* expect(require("./transform-me.not-test")).toMatch(
    /transform-me.not-test.js/
  ); */
  expect(require("./transform-me.not-test")).toMatch(/To be transformed/);
});

test("ignore-me", () => {
  expect(require("./ignore-me.not-test")).toBe("To be ignored");
});
