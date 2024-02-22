import { By, until } from 'selenium-webdriver';
import Config from '../../config/Config'; // Adjust the path as necessary
import { ChromeDriverFactory } from '../../driver/ChromeDriverFactory';

describe('ChromeDriverFactory Integration Test', () => {
  let driver;
  let configInstance = new Config("linux");

  beforeAll(async () => {
    //driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
    driver = await ChromeDriverFactory.createChromeDriver();
    await driver.manage().window().maximize();
  }, 30000); // Increase timeout if necessary

  afterAll(async () => {
    await driver.quit();
  });

  test('Start Chrome Driver and navigate to URL', async () => {
    await driver.get("https://www.loblaws.ca/");

    // Wait for elements to be present
    const wait = driver.wait.bind(driver);
    await wait(until.elementLocated(By.css(".logo")), configInstance.getPauseInTest());
    await wait(until.elementLocated(By.id("site-content")), configInstance.getPauseInTest());
    await wait(until.elementLocated(By.css("div.booking-selector")), configInstance.getPauseInTest());

    // Assert text of a specific element
    const element = await driver.findElement(By.css("div.booking-selector"));
    const elementText = await element.getText();
    expect(elementText).toEqual("GLEN ERIN DRIVE"); // Adjust the text as necessary
  }, 30000); // Increase timeout if necessary
});
