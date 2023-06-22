/**
 * Mock Implementations
 */

// foo.test.js
jest.mock("./foo"); // this happens automatically with automocking
const foo = require("./foo");

test("mockImplementaion of own module", () => {
  // foo is a mock function
  foo.mockImplementation(() => 42);
  expect(foo()).toBe(42);
  // > 42
});
