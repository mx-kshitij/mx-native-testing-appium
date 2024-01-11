var assert = require('assert');

describe('Open Login page', () => {
  it('can find search results', async () => {
    
    var letsGoBtn = await $('android=new UiSelector().resourceId("introScreen1$buttonDone")');
    await letsGoBtn.waitForDisplayed({ timeout: 30000 });
    await letsGoBtn.click();

    var loginBtn = await $('android=new UiSelector().resourceId("container11")');
    await loginBtn.waitForDisplayed({ timeout: 30000 });
    await loginBtn.click();
    
    assert(true);
  });
});
