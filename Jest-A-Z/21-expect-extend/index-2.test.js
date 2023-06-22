// const {toMatchSnapshot} = require('jest-snapshot');
import { toMatchSnapshot } from "jest-snapshot";

expect.extend({
  toMatchTrimmedSnapshot(received, length) {
    return toMatchSnapshot.call(
      this,
      received.substring(0, length),
      "toMatchTrimmedSnapshot"
    );
  },
});

it("stores only 10 characters", () => {
  expect("extra long string oh my gerd").toMatchTrimmedSnapshot(10);
});

/*
Stored snapshot will look like:

exports[`stores only 10 characters: toMatchTrimmedSnapshot 1`] = `"extra long"`;
*/
