const { config: baseConfig } = require("./base.conf.js");

const parallelConfig = {
  
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    //'./tests/specs/umusic_test.js'
    './tests/specs/medalia_test.js'
  ],

  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack build',
      source: 'webdriverio:sample-master:v1.2'
    }
  }, 
  capabilities: [  
    {
      browserName: 'chrome',
      'bstack:options': {
        buildName: 'browserstack build',
        deviceName: 'Samsung Galaxy S22',
        osVersion: '12.0',
        consoleLogs: 'verbose',
        debug: true,
        networkLogs: true,
        cameraInjection: true,
        cameraInjectionUrl:'media://1853e1c9f3effe0b2a2400d817ff35482aa864ae'
      },
      'goog:chromeOptions': {
        prefs: {
          // 0 - Default, 1 - Allow, 2 - Block
          "profile.managed_default_content_settings.media_stream_camera.'https://somewebsite.com:443,'.setting" : 1,
          "profile.managed_default_content_settings.media_stream_mic.'https://somewebsite.com:443,'.setting":1
        }
      }
    },
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
