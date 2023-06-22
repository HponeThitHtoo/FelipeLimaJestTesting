module.exports = class CustomWatchPlugin {
  // Add hooks to Jest lifecycle events
  apply(jestHooks) {
    jestHooks.shouldRunTestSuite((testSuiteInfo) => {
      return testSuiteInfo.testPath.includes("/ok.test");
    });
  }

  // Get the prompt information for interactive plugins
  getUsageInfo(globalConfig) {}

  // Executed when the key from `getUsageInfo` is input
  run(globalConfig, updateConfigAndRun) {}
};
