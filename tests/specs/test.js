//const percySnapshot = require('@percy/webdriverio');
const { percyScreenshot } = require('@percy/selenium-webdriver');
//const {percyCheck} = reqire('tests/specs/percyScreenshotCheck.js');
describe("Testing with Bstackdemo", () => {
  it("add product to cart", async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("https://bstackdemo.com/");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
    );

    
    const productOnScreen = await $('//*[@id="1"]/p');
    const productOnScreenText = await productOnScreen.getText();

    const addToCart = await $('//*[@id="1"]/div[4]');
    await addToCart.click();

    const productInCart = await $('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]');

    await browser.waitUntil(async () => (
      await productInCart.getText()).match(productOnScreenText), 
      { timeout: 5000 }
    );

    const intervalId = setInterval(() => {
      console.log('Waiting for the sync results from Percy');
      browser.getTimeouts();
    }, 5000); // Print every 5 seconds

    
    //await percySnapshot(browser, 'Bstack Demo Home Page');
    //await percyScreenshot(browser, 'Bstack Demo Home Page');
    const screenshot = await percyScreenshot(browser, 'Bstack Demo Home Page', { sync: true });

    

    //await browser.pause(120000); 

    clearInterval(intervalId);

    await console.log('screenshot response: ', screenshot);

  
    
  });
});
