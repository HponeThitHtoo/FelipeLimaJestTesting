// const sleep = require("util").promisify(setTimeout);
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

expect.extend({
  toBeScaffoldHub(received) {
    console.log("isNot", this.isNot);
    console.log("isPromise", this.promise);
    console.log("expand", this.expand);

    const expected = "ScaffoldHub";
    const pass = Object.is(received, expected);

    const failMessage = pass
      ? () => `expected ${received} NOT to be ${expected}`
      : () => `expected ${received} to be ${expected}`;

    return { pass, message: failMessage };
  },

  async toBeScaffoldHubAsync(received) {
    await sleep(100);

    const expected = "ScaffoldHub";
    const pass = Object.is(received, expected);

    const failMessage = pass
      ? () => `expected ${received} NOT to be ${expected}`
      : () => `expected ${received} to be ${expected}`;

    return { pass, message: failMessage };
  },

  toBeScaffoldHubObject(received) {
    const expected = { name: "ScaffoldHub" };
    const pass = this.equals(received, expected);

    const failMessage = pass
      ? () =>
          `expected ${JSON.stringify(received)} NOT to be ${JSON.stringify(
            expected
          )}`
      : () =>
          `expected ${JSON.stringify(received)} to be ${JSON.stringify(
            expected
          )}`;

    return { pass, message: failMessage };
  },
});

describe.only("toBeScaffoldHub", () => {
  it("", () => {
    expect("Google").toBeScaffoldHub();
  });

  it("", () => {
    expect("ScaffoldHub").toBeScaffoldHub();
  });

  it("not", () => {
    expect("Google").not.toBeScaffoldHub();
  });

  it("resolve", () => {
    expect(Promise.resolve("Google")).resolves.not.toBeScaffoldHub();
  });

  it("reject", () => {
    expect(Promise.reject("Google")).rejects.not.toBeScaffoldHub();
  });
});

describe("toBeScaffoldHubAsync", () => {
  it("", () => {
    return expect("Google").toBeScaffoldHubAsync();
  });

  it("", () => {
    return expect("ScaffoldHub").toBeScaffoldHubAsync();
  });

  it("not", () => {
    return expect("Google").not.toBeScaffoldHubAsync();
  });
});

describe("toBeScaffoldHubObject", () => {
  it("", () => {
    expect({ name: "Google" }).toBeScaffoldHubObject();
  });

  it("", () => {
    expect({ name: "ScaffoldHub" }).toBeScaffoldHubObject();
  });

  it("not", () => {
    expect({ name: "Google" }).not.toBeScaffoldHubObject();
  });
});
