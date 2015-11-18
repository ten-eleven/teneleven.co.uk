var Server = require("../../../Server")
require('ts-node/register')

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: '../../../selenium/chromedriver',
  baseUrl: "http://localhost:3001/",
  framework: 'jasmine',
  specs: [
    '../specs/*.ts'
  ],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    Server.start(true)
  }

};
