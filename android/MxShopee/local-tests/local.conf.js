exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  services: [
    [
      'browserstack',
      { 
        buildIdentifier: '${BUILD_NUMBER}',
        browserstackLocal: true, 
        opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-android-repo" },
        app: process.env.BROWSERSTACK_APP_PATH || 'C:/Users/Kshitij.Karandikar/Documents/Github/mx-native-testing-appium/android/MxShopee/mxshopee-appstore-release.apk'
      }
    ]
  ],

  capabilities: [{
    'bstack:options': {
      projectName: "BrowserStack Samples",
      buildName: 'browserstack build',
      sessionName: 'BStack local webdriverio-appium',
      deviceName: 'Google Pixel 3',
      osVersion: "9.0",
      debug: true,
      networkLogs: true,
      source: 'webdriverio:appium-sample-sdk:v1.0'
    }
  }],

  updateJob: false,
  specs: [
    './MxShopee/local-tests/specs/local_test.js'
  ],
  exclude: [],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
