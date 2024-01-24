const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com"
  },
  retries: {
    runMode: 1,// 실패시 한번 더 하는 것을 추천함

  },
  projectId: "hbygf7",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
    // specPattern: 'cypress/integration/examples/*.js',// 모든 스팩 파일을 사용
    specPattern: [
      'cypress/integration/examples/Test9.js',
      'cypress/integration/examples/Test10.js',
      'cypress/integration/examples/Test11.js'
    ],// 모든 스팩 파일을 사용
  },
});
