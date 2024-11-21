const { config: baseConfig } = require("./base.conf.js");

const localConfig = {
  // Adding browserstackLocal to browserstack-service to initiate local binary
  //services: [['@wdio/browserstack-service', { browserstackLocal: true, forcelocal: false, proxyHost: "127.0.0.1", proxyPort: "8000", "use-ca-certifcate": "/Users/venkatesh/Downloads/charles-ssl-proxying-certificate.pem" }]],
  capabilities: [{

    'bstack:options' : {
      "os" : "Windows",
      "osVersion" : "10",
      "buildName": "Pre Prod Testing",
      "resolution":"1920x1080",
      "local": true
      },
      "browserName" : "Chrome",
      "browserVersion" : "98"
    /* build: 'browserstack-build-1',
    osVersion : "14",
    deviceName : "iPhone 12",
    realMobile : "true",
    browserName : "safari" */
  },
  {
    browserName: 'safari',
    browserVersion: 'latest',
    'bstack:options': {
      buildName: 'Pre Prod Testing',
      os: 'OS X',
      osVersion: 'Big Sur',
      "local": true
    },
  },
  {
    browserName: 'chrome',
    'bstack:options': {
      buildName: 'Pre Prod Testing',
      deviceName: 'Samsung Galaxy S20',
      "local": true
    },
  }],
  specs: ['./tests/specs/local_test.js'],
  services: [['browserstack', {
    testObservability: true,
    testObservabilityOptions: {
        'projectName': 'Edmunds Test Observability Demo',
        'buildName': 'Pre Prod Testing',
        'buildTag': 'E2E Test'
    },
    browserstackLocal: true, forcelocal: true
    //, proxyHost: "127.0.0.1", proxyPort: "8000", "use-ca-certifcate": "/Users/venkatesh/Downloads/charles-ssl-proxying-certificate.pem"
}]
  ],
};

exports.config = { ...baseConfig, ...localConfig };
