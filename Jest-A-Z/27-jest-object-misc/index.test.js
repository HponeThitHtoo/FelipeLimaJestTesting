jest.setTimeout(5);

test("setTimeout", (done) => {
  // never gets called
});

jest.retryTimes(3);

test.only("retryTimes", () => {
  console.log("retryTimes fail");
  expect(true).toBe(false);
});
