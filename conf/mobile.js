exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    //'./tests/specs/umusic_test.js'
    './tests/specs/test_1.js'
  ],
  exclude: [],

  capabilities: [{
    browserName: 'safari',
    'bstack:options': {
      buildName: 'Functional Testing',
      osVersion : '16',
      deviceName : 'iPhone 14'
    },
  },
  {
    browserName: 'chrome',
    'bstack:options': {
      buildName: 'Functional Testing',
      deviceName : 'Google Pixel 8',
      osVersion : '14.0'
    },
  },
  {
    browserName: 'chrome',
    'bstack:options': {
      buildName: 'Functional Testing',
      deviceName: 'Samsung Galaxy S20',
    },
  },],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  hostname: 'hub.browserstack.com',
  services: [['browserstack', {
    testObservability: true,
    testObservabilityOptions: {
        'projectName': 'Edmunds Test Observability Demo',
        'buildName': 'Functional Testing',
        'buildTag': 'Smoke Test'
    },
}]
  ],

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
