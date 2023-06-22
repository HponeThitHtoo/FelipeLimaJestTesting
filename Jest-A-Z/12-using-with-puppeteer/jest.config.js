/* module.exports = {
  preset: "jest-puppeteer",
};
 */

module.exports = {
  globalSetup: "./setup.js",
  globalTeardown: "./teardown.js",
  testEnvironment: "./puppeteer_environment.js",
};
