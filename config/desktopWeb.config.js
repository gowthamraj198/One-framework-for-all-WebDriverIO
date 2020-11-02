const {config} = require('./wdio.conf');

config.specs = [
    './src/specs/desktopWeb/**/*.js'
];

config.services = ['chromedriver']


config.capabilities = [
    {

            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', "--no-sandbox", '--window-size=1280,800']
              }
    }
]

config.baseUrl = 'https://www.agoda.com'

exports.config = config;
