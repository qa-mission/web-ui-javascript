import {Builder, By, Key, until, Capabilities} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export default class ChromeDriverFactory {
    static getChromeOptions() {
        let chromeOptions = new chrome.Options();
        chromeOptions.acceptInsecureCerts;
        chromeOptions.setPageLoadStrategy('normal');
        chromeOptions.addArguments('--disable-extensions');
        chromeOptions.excludeSwitches("disable-popup-blocking", "enable-automation"); 
        return chromeOptions;
    }

    static async createChromeDriver() {
        let driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(ChromeDriverFactory.getChromeOptions())
            .build();
        return driver;
    }

    static async createRemoteChromeDriver(hub) {
        let driver = await new Builder()
            .forBrowser('chrome')
            .usingServer(hub)
            .setChromeOptions(ChromeDriverFactory.getChromeOptions())
            .build();
        return driver;
    }
}