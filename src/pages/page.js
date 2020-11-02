/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const moment = require('moment');
const path = require('path');
const fs = require("fs-extra");

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        browser.url('https://master.qagw.agoda.com/')
        return browser.url('/')
    }

    selector (selectorDesktop, selectorMweb) {
        const selector = driver.isChrome ? selectorDesktop : selectorMweb
        return $(`${selector}`)
    }
    
    wait (element) {      
        element.waitForExist({ timeout: 15000 });
        element.waitForClickable({ timeout: 15000 });
    }

    // takeScreenshot(message) {
    //     const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
    //     fs.ensureDirSync('reports/html-reports/screenshots/');
    //     const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
    //     browser.saveScreenshot(filepath);
    //     this.logMessage(message) ;
    //     process.emit('test:screenshot', filepath);
    //     return this;
    // }

}
