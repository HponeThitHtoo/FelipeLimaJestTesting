test("image.png", () => {
  expect(require("image.png")).toBe("image-stub");
  expect(require("./image.png")).toBe("image-stub");
});
