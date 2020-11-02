# WebdriverIO-appium-mocha

A sample project to run native and browser for android and ios using mocha with page object pattern.

## Based on

- WebdriverIO v6
- Mocha v6
- Node version 10.16 or higher
- Appium
- chromedriver

## Supports
- Native Android and iOS apps
- Android Chrome browser 
- iOS Safari browser 
- Supports Page Object Model
- Contains sample test scenarios in mocha
- Supports eslint
- Supports html reporting

## Running sample test
Follow the below commands -

- Install dependencies using `npm i` in the terminal.

- Update the deviceName and platFormVersion in `config/android.info.js` and `config/ios.info.js` respectively.

- Execute `npm run ios` to run ios native app

- Execute `npm run iosBrowser` to run ios safari browser

- Execute `npm run android` to run android native app

- Execute `npm run androidBrowser` to run android chrome browser
