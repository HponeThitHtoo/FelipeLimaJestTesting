/* const empty1 = require("../empty-1");
const empty2 = require("../empty-2");
const virtual = require("../virtual"); */

jest.doMock("../empty-1");
jest.doMock("../empty-2", () => {
  return jest.fn(() => 42);
});
jest.doMock(
  "../virtual",
  () => {
    return jest.fn(() => 43);
  },
  {
    virtual: true,
  }
);

const empty1 = require("../empty-1");
const empty2 = require("../empty-2");
const virtual = require("../virtual");

test("automaticMock", () => {
  expect(empty1()).toBeUndefined();
});

test("factory", () => {
  expect(empty2()).toBe(42);
});

test("virtual", () => {
  expect(virtual()).toBe(43);
});
