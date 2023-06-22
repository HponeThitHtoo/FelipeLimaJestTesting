test("resetModules 1", () => {
  const stateful = require("./stateful");
  expect(stateful.getValue()).toBe(0);
  stateful.setValue(1);
  expect(stateful.getValue()).toBe(1);
});

test("resetModule 2", () => {
  const stateful = require("./stateful");
  expect(stateful.getValue()).toBe(0);
});
