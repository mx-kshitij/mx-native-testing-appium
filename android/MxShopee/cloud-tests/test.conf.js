exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  hostname: 'hub.browserstack.com',

  services: [
    [
      'browserstack',
      {
        app: 'bs://1b8b6f3ee395a6eca42acdb4c990f1ec5104a809',
        browserstackLocal: true
      },
    ]
  ],

  capabilities: [{
    'bstack:options': {
      deviceName: 'Google Pixel 8 Pro',
      platformVersion: '14.0',
      platformName: 'android',
    }
  },
  // {
  //   'bstack:options': {
  //     deviceName: 'Samsung Galaxy S23 Ultra',
  //     platformVersion: '13.0',
  //     platformName: 'android',
  //   } }
  ],

  commonCapabilities: {
    'bstack:options': {
      projectName: "MxShoppe",
      buildName: 'browserstack build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true,
      source: 'webdriverio:appium-sample-sdk:v1.0'
    }
  },

  maxInstances: 10,

  updateJob: false,
  specs: [
    './MxShopee/cloud-tests/specs/single_test.js',
    './MxShopee/cloud-tests/specs/login_test.js',
    './MxShopee/cloud-tests/specs/order_test.js',
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
    timeout: 80000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(let key in exports.config.commonCapabilities) 
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
});
