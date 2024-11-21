const { config: baseConfig } = require("./base.conf.js");

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack build',
      source: 'webdriverio:sample-master:v1.2'
    }
  }, 
  capabilities: [ 
     /*'bstack:options' : {
      "osVersion" : "12.0",
      //"deviceName" : "iPhone 14",
      "local" : "false",
      //"safari": { "enablePopups": true ,"autoAcceptAlerts": true} ,
      "idleTimeout": 120,
      //"nativeWebTap":"true",
      "consoleLogs":"verbose"
      },*/
      
      //"browserName" : "android",
      
      /* "os_version" : "16",
    "device" : "iPhone 14",
    "browserstack.local" : "false",
    "browserName" : "safari",
    "autoAcceptAlerts" : "true",
    "browserstack.safari.enablePopups" : "true",
    "nativeWebTap":"true",
    'browserstack.debug': 'true',
    "browserstack.useW3C":"false",
    "browserstack.idleTimeout": 120
       */
    //safariAllowPopups

    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        buildName: 'browserstack build',
        os: 'Windows',
        osVersion: '10',
      },
    },
    /* {
      browserName: 'safari',
      browserVersion: 'latest',
      'bstack:options': {
        buildName: 'browserstack build',
        os: 'OS X',
        osVersion: 'Big Sur',
      },
    },
    {
      browserName: 'chrome',
      'bstack:options': {
        buildName: 'browserstack build',
        deviceName: 'Samsung Galaxy S20',
      },
    }, */
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
