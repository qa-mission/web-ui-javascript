import { By, until, Key } from 'selenium-webdriver';
import Config from '../config/Config';

export class Page {
    constructor(driver) {
        this.driver = driver;
        this.wait = driver.wait.bind(driver);
        this.config = Config.getInstance(); 
    }

    async getAllRegexpFrom(inputText, regexp) {
        const pattern = new RegExp(regexp, 'g'); // 'g' for global match
        return inputText.match(pattern) || [];
    }

    async scrollToTheTop() {
        await this.driver.executeScript("window.scrollTo(0, 0)");
    }

    async scrollToTheBottom() {
        await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }

    async moveToLocator(locator) {
        const element = await this.driver.wait(until.elementLocated(By.css(locator)), this.config.getPauseInTest());
        await this.moveToElement(element);
    }

    async moveToElement(element) {
        await this.driver.actions().move({ origin: element }).perform();
    }

    async scrollToLocator(locator) {
        const element = await this.driver.wait(until.elementLocated(By.css(locator)), this.config.getPauseInTest());
        await this.scrollToElement(element);
    }

    async scrollToElement(element) {
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
        await this.wait(until.elementIsVisible(element), this.config.getPauseInTest());
    }

    async scrollToPoint(point) {
        const script = `window.scrollTo(${point.x},${point.y});`;
        await this.driver.executeScript(script);
    }

    async scrollByPixels(length) {
        const command = `window.scrollBy(0,${length})`;
        await this.driver.executeScript(command);
    }

    async containsText(text) {
        const pageSource = await this.driver.getPageSource();
        return pageSource.includes(text);
    }

    async pause(millis) {
        return new Promise(resolve => setTimeout(resolve, millis));
    }
}
