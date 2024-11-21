exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    //'./tests/specs/*.js'
    //'./tests/specs/test_google.js'
    './tests/specs/test.js'
    //'./tests/features/sample.feature'
  ],
  exclude: [],
  
  maxInstances: 10,

  capabilities: [
    
 /*    {
       'browserName' : 'safari',
      // 'appium:platformVersion' : '16',
      // 'appium:deviceName' : 'iPhone 14 Pro',
      'bstack:options': {
        os: 'ios',
        osVersion: '16',
        deviceName:'iPhone 14',
        buildName: 'Apple Pay Testing',
        //enableApplePay: true
      },
    } */
    {
      'browserName': 'safari',
      'browser_version': 'latest',
      'build': 'Functional Testing',
      'os': 'OS X',
      'os_version': 'Ventura',
      'browserstack.console': 'errors',
      'browserstack.local': true,
      'idleTimeout': 30
    },
    {
      "browserName": "Chrome",
      "os": "Windows",
      "os_version": "10",
      "browser_version": "latest",
      'idleTimeout': 30
    },
    {
      "browserName" : "safari",
      'bstack:options' : {
        "osVersion" : "17",
        "deviceName" : "iPhone 15",
       
     }
   },
   {
    "browserName" : "Edge",
    'bstack:options' : {
      "os" : "Windows",
      "osVersion" : "11",
      "browserVersion" : "latest",
      
   }
 },
  {
  "browserName" : "chrome",
  'bstack:options' : {
    "osVersion" : "14.0",
    "deviceName" : "Samsung Galaxy S24",
    "consoleLogs" : "info",
 }
} 
,
 {
  "browserName" : "chrome",
  'bstack:options' : {
    "osVersion" : "13.0",
    "deviceName" : "Samsung Galaxy Tab S9",
    "consoleLogs" : "info",
 }
}/*,
{
  "browserName" : "safari",
  'bstack:options' : {
    "osVersion" : "16",
    "deviceName" : "iPad 10th",
    
 }
},
{
  "browserName" : "Firefox",
  'bstack:options' : {
    "os" : "Windows",
    "osVersion" : "11",
    "browserVersion" : "latest",
   
 } 
}*/
    /* {
    browserName: 'chrome',
    browser_version: 'latest',
    build: 'Functional Testing',
    os: 'Windows',
    os_version: '11'
    //browserstack.console: 'errors'
      //enableApplePay: true
     "browserName" : "Chrome",
      "os" : "Windows",
      "os_version" : "11",
      "browser_version" : "latest",
      "browserstack.console" : "errors",
      "project" : "test project",
      "build" : "test build",
      "name" : "test session" 
    }, */
  
  /*{
    browserName: 'safari',
    browserVersion: 'latest',
    'bstack:options': {
      buildName: 'Functional Testing',
      os: 'OS X',
      osVersion: 'Big Sur',
    },
  },
  {
    browserName: 'chrome',
    'bstack:options': {
      buildName: 'Functional Testing',
      deviceName: 'Samsung Galaxy S20',
    },
  } */,],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 100000,
  connectionRetryTimeout: 240000,
  connectionRetryCount: 3,
  hostname: 'hub.browserstack.com',
  services: [/* [
    'safaridriver', {
      outputDir: './logs',
      logFileName: 'wdio-safaridriver.log'
  }
  ], */
  ['browserstack', {
    testObservability: true,
    testObservabilityOptions: {
        'projectName': 'Test proxy Demo',
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
  //framework: 'cucumber',
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },
  /* cucumberOpts: {
    require: ['./tests/specs/steps/StepDefs.js'], // Path to step definitions
    timeout: 60000
} */
}
