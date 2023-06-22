/**
 * Mock Implementations
 */

test("mockImplementaion", () => {
  const myMockFn = jest.fn((cb) => cb(null, true));

  myMockFn((err, val) => console.log(val));
  // > true
});

test("mockImplementationOnce", () => {
  const myMockFn = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "first call")
    .mockImplementationOnce(() => "second call");

  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
});

test("return this", () => {
  const myObj = {
    myMetohd: jest.fn().mockReturnThis(),
  };

  // is the same as
  const otherObj = {
    myMetohd: jest.fn(function () {
      return this;
    }),
  };

  console.log(myObj.myMetohd());
  console.log(otherObj.myMetohd());
});

/**
 * Mock Names
 */
test("mockName", () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockImplementation((scalar) => 42 + scalar)
    .mockName("add42");

  // expect(myMockFn).toBeCalled();
});

/**
 * Custom Matchers
 */

test("custom matchers", () => {
  const mockFunc = jest.fn();

  const arg1 = "arg1";
  const arg2 = "arg2";

  mockFunc(arg1, arg2);

  // The mock function was called at least once
  expect(mockFunc).toHaveBeenCalled();

  // The mock function was called at least once with the specified args
  expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

  // The last call to the mock function was called with the specified args
  expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

  // All calls and the name of the mock is written as a snapshot
  expect(mockFunc).toMatchSnapshot();
});

test("custom matchers", () => {
  const mockFunc = jest.fn().mockName("a mock name");

  const arg1 = 42;
  const arg2 = "arg2";

  mockFunc(arg1, arg2);

  // The mock function was called at least once
  expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

  // The mock function was called at least once with the specified args
  expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

  // The last call to the mock function was called with the specified args
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
    arg1,
    arg2,
  ]);

  // The first arg of the last call to the mock function was `42`
  // (note that there is no sugar helper for this specific of an assertion)
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

  // A snapshot will check that a mock was invoked the same number of times,
  // in the same order, with the same arguments. It will also assert on the name.
  expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
  expect(mockFunc.getMockName()).toBe("a mock name");
});
