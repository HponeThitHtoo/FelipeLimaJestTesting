it("anything", () => {
  expect({ val: "1" }).toEqual({
    val: expect.anything(),
  });
});

it("any", () => {
  expect({ val: 1 }).toEqual({ val: expect.any(Number) });
});

it("arrayContaining", () => {
  expect(["A", "B"]).toEqual(expect.arrayContaining(["A"]));
});

it("assertions", async () => {
  expect.assertions(1);
  try {
    // await Promise.resolve();
    await Promise.reject(new Error("error"));
  } catch (error) {
    expect(error.message).toBe("error");
  }
});

it("hasAssertions", async () => {
  expect.hasAssertions();

  try {
    // await Promise.resolve();
    await Promise.reject(new Error("error"));
  } catch (error) {
    expect(error.message).toBe("error");
  }
});

it("not.arrayContaining", () => {
  expect(["A", "B"]).toEqual(expect.not.arrayContaining(["C"]));
});

it("objectContaining", () => {
  const full = { a: "a", b: "b" };
  // expect(full).toEqual(expect.objectContaining({ a: "a" }));
  expect(full).toEqual(expect.objectContaining({ a: expect.any(String) }));
});

it("not.objectContaining", () => {
  const full = { a: "a", b: "b" };
  expect(full).toEqual(expect.not.objectContaining({ c: expect.any(String) }));
});

it("not.stringContaining", () => {
  expect("ScaffoldHub").toEqual(expect.not.stringContaining("Google"));
});

it("stringContaining", () => {
  expect("ScaffoldHub").toEqual(expect.stringContaining("Scaffold"));
});

it("not.stringMatching", () => {
  // expect("ScaffoldHub").toEqual(expect.not.stringMatching("Google"));
  expect("ScaffoldHub").toEqual(expect.not.stringMatching(/G/));
});

it("stringMatching", () => {
  // expect("ScaffoldHub").toEqual(expect.stringMatching("Scaffold"));
  expect("ScaffoldHub").toEqual(expect.stringMatching(/Scaffold/));
});

const customSerializer = {
  serialize(val, config, indentation, depth, refs, printer) {
    return "Pretty foo: " + val;
  },

  test(val) {
    return val;
  },
};

it("addSnapshotSerializer", () => {
  // expect.addSnapshotSerializer(customSerializer);
  expect("some text").toMatchInlineSnapshot(`"some text"`);
});

it("resolves", () => {
  return expect(Promise.resolve("a")).resolves.toBe("a");
});

it("rejects", () => {
  return expect(Promise.reject("a")).rejects.toBe("a");
});

const can = {
  name: "pamplemousse",
  ounces: 12,
};

it("to be", () => {
  expect("a").toBe("a");
  expect({ a: "a" }).not.toBe({ a: "a" });
  expect(["a"]).not.toBe(["a"]);
  expect(0.1 + 0.2).not.toBe(0.3);
});

describe("the can", () => {
  test("has 12 ounces", () => {
    expect(can.ounces).toBe(12);
  });

  it("has a sophisticated name", () => {
    expect(can.name).toBe("pamplemousse");
  });
});

it("toHaveBeenCalled", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
});

it("toHaveBeenCalledTimes", () => {
  const mockFn = jest.fn();
  mockFn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
});

it("toHaveBeenCalledWith", () => {
  const mockFn = jest.fn();
  mockFn(1);
  mockFn();
  expect(mockFn).toHaveBeenCalledWith(1);
});

it("toHaveBeenCalledWith", () => {
  const mockFn = jest.fn();
  mockFn();
  mockFn(1);
  expect(mockFn).toHaveBeenLastCalledWith(1);
});

it("toHaveBeenNthCalledWith", () => {
  const mockFn = jest.fn();
  mockFn();
  mockFn("a");
  mockFn();
  expect(mockFn).toHaveBeenNthCalledWith(2, "a");
});

it("toHaveReturned", () => {
  const mockFn = jest.fn((ok) => {
    if (ok) return;

    throw new Error("error");
  });

  try {
    mockFn(true);
    mockFn(false);
    mockFn(false);
  } catch (error) {
    // ignore
  }

  expect(mockFn).toHaveReturned();
});

it("toHaveReturnedTimes", () => {
  const mockFn = jest.fn((ok) => {
    if (ok) return;

    throw new Error("error");
  });

  try {
    mockFn(true);
    mockFn(false);
  } catch (error) {
    // ignore
  } finally {
    mockFn(true);
  }

  expect(mockFn).toHaveReturnedTimes(2);
});

it("toHaveReturnedWith", () => {
  const mockFn = jest.fn((arg) => arg);

  mockFn(1);
  mockFn(2);

  expect(mockFn).toHaveReturnedWith(1);
});

it("toHaveLastReturnedWith", () => {
  const mockFn = jest.fn((arg) => arg);

  mockFn(1);
  mockFn(2);

  expect(mockFn).toHaveLastReturnedWith(2);
});

it("toHaveNthReturnedWith", () => {
  const mockFn = jest.fn((arg) => arg);

  mockFn(1);
  mockFn(2);
  mockFn(3);

  expect(mockFn).toHaveNthReturnedWith(2, 2);
});

it("toHaveLength", () => {
  expect([1, 2, 3]).toHaveLength(3);
  expect("abc").toHaveLength(3);
  expect({
    length: 3,
  }).toHaveLength(3);
  expect("").not.toHaveLength(5);
});

it("toHaveProperty", () => {
  // Object containing house features to be tested
  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      area: 20,
      wallColor: "white",
      "nice.oven": true,
    },
    "ceiling.height": 2,
  };

  // Example Referencing
  expect(houseForSale).toHaveProperty("bath");
  expect(houseForSale).toHaveProperty("bedrooms", 4);

  expect(houseForSale).not.toHaveProperty("pool");

  // Deep referencing using dot notation
  expect(houseForSale).toHaveProperty("kitchen.area", 20);
  expect(houseForSale).toHaveProperty("kitchen.amenities", [
    "oven",
    "stove",
    "washer",
  ]);

  expect(houseForSale).not.toHaveProperty("kitchen.open");

  // Deep referencing using an array containing the keyPath
  expect(houseForSale).toHaveProperty(["kitchen", "area"], 20);
  expect(houseForSale).toHaveProperty(
    ["kitchen", "amenities"],
    ["oven", "stove", "washer"]
  );
  expect(houseForSale).toHaveProperty(["kitchen", "amenities", 0], "oven");
  expect(houseForSale).toHaveProperty(["kitchen", "nice.oven"]);
  expect(houseForSale).not.toHaveProperty(["kitchen", "open"]);

  // Referencing keys with dot in the key itself
  expect(houseForSale).toHaveProperty(["ceiling.height"], 2);
});

test("toBeCloseTo", () => {
  // expect(0.2 + 0.1).toBe(0.3);
  // expect(0.2 + 0.1).toBeCloseTo(0.3);
  expect(1.01).toBeCloseTo(1.02, 1);
});

it("toBeDefined", () => {
  expect(null).toBeDefined();
  expect(undefined).not.toBeDefined();
});

it("toBeFalsy", () => {
  expect(0).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
  expect(NaN).toBeFalsy();
});

it("toBeGreaterThan", () => {
  expect(10).toBeGreaterThan(9);
});

it("toBeGreaterThanOrEqual", () => {
  expect(10).toBeGreaterThanOrEqual(10);
});

it("toBeLessThan", () => {
  expect(9).toBeLessThan(10);
});

it("toBeLessThanOrEqual", () => {
  expect(10).toBeLessThanOrEqual(10);
});

it("toBeInstanceOf", () => {
  class A {}

  expect(new A()).toBeInstanceOf(A);
  expect(() => {}).toBeInstanceOf(Function);
  expect(new A()).not.toBeInstanceOf(Function);
});

test("toBeNull", () => {
  expect(null).toBeNull();
});

it("toBeTruthy", () => {
  expect(1).toBeTruthy();
  expect("1").toBeTruthy();
  expect(true).toBeTruthy();
});

test("toBeUndefined", () => {
  const mockFn = jest.fn();
  expect(undefined).toBeUndefined();
  expect(mockFn()).toBeUndefined();
});

test("toBeNaN", () => {
  expect(Number("test")).toBeNaN();
  expect(NaN).toBeNaN();
});

it("toContain", () => {
  expect(["a", "b"]).toContain("a");
  expect([["a"], ["b"]]).not.toContain(["a"]);
});

it("toContainEqual", () => {
  expect(["a", "b"]).toContainEqual("a");
  expect([["a"], ["b"]]).toContainEqual(["a"]);
});

test("toEqual", () => {
  expect([["a"], ["b"]]).toEqual([["a"], ["b"]]);
  expect({ a: "a", b: "b" }).toEqual({ a: "a", b: "b" });
});

it("toMatch", () => {
  expect("ScaffoldHub").toMatch(/Scaffold/);
  expect("ScaffoldHub").toMatch("Scaffold");
});

it("toMatchObject", () => {
  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      area: 20,
      wallColor: "white",
    },
  };
  const desiredHouse = {
    bath: true,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      wallColor: expect.stringMatching(/white|yellow/),
    },
  };

  // the house has my desired features
  expect(houseForSale).toMatchObject(desiredHouse);

  // toMatchObject applied to arrays
  expect([{ foo: "bar" }, { baz: 1 }]).toMatchObject([
    { foo: "bar" },
    { baz: 1 },
  ]);

  // toMatchObject is called for each elements, so extra object properties are okay
  expect([{ foo: "bar" }, { baz: 1, extra: "quux" }]).toMatchObject([
    { foo: "bar" },
    { baz: 1 },
  ]);
});

it("toMatchSnapshot", () => {
  expect({
    age: 25,
    name: "Felipe",
  }).toMatchSnapshot(
    {
      age: expect.any(Number),
    },
    "Person snapshot"
  );
});

it("toMatchInlineSnapshot", () => {
  expect({
    age: 25,
    name: "Felipe",
  }).toMatchInlineSnapshot(
    {
      age: expect.any(Number),
    },
    `
    Object {
      "age": Any<Number>,
      "name": "Felipe",
    }
  `
  );
});

it("toStrictEqual", () => {
  expect({ a: undefined, b: 2 }).toEqual({ b: 2 });
  expect({ a: undefined, b: 2 }).not.toStrictEqual({ b: 2 });

  expect([, 1]).toEqual([undefined, 1]);
  expect([, 1]).not.toStrictEqual([undefined, 1]);

  class A {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  }

  expect(new A("a", "b")).toEqual({ a: "a", b: "b" });
  expect(new A("a", "b")).not.toStrictEqual({ a: "a", b: "b" });
});

test("toThrow", () => {
  class DestructiveError extends Error {}

  const destructiveFn = () => {
    throw new DestructiveError("Boom");
  };

  expect(destructiveFn).toThrow();
  expect(destructiveFn).toThrow(DestructiveError);
  expect(destructiveFn).toThrow(/oom/);
  expect(destructiveFn).toThrow("Boom");
});

test("toThrowErrorMatchingSnapshot", () => {
  class DestructiveError extends Error {}

  const destructiveFn = () => {
    throw new DestructiveError("Boom");
  };

  expect(destructiveFn).toThrowErrorMatchingSnapshot("Boom");
});

test("toThrowErrorMatchingInlineSnapshot", () => {
  class DestructiveError extends Error {}

  const destructiveFn = () => {
    throw new DestructiveError("Boom");
  };

  expect(destructiveFn).toThrowErrorMatchingInlineSnapshot(`"Boom"`);
});
