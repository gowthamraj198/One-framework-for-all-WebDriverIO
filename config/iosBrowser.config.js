const {config} = require('./wdio.conf');
const iosInfo = require('./ios.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        automationName: 'XCUITest',
        browserName: 'Safari',
        maxInstances: 1,
        deviceName: iosInfo.deviceName,
        platformVersion: iosInfo.platformVersion,
        acceptInsecureCerts: true,
        acceptSslCerts: true
    }
];

config.services = ['appium'],
config.appium = {
    command: 'appium',
    args: {},
}

config.specs = [
    './src/specs/mobileBrowser/**/*.js'
];

config.baseUrl = 'https://www.agoda.com'

exports.config = config;
