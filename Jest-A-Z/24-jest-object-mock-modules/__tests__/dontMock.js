jest.dontMock("../auth");

const auth = require("../auth");

jest.enableAutomock();
// jest.dontMock("../auth");

test("dontMock", () => {
  expect(auth.authorize()).toBe("original");
});
