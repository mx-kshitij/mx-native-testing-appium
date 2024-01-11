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

// var path = require('path');
// var assert = require('assert');

// describe('BrowserStack Local Testing', () => {
//   it('can check tunnel working', async () => {
//     var searchSelector = await $('android=new UiSelector().resourceId("com.example.android.basicnetworking:id/test_action")');
//     await searchSelector.waitForDisplayed({ timeout: 30000 });
//     await searchSelector.click();

//     var insertTextSelector = await $(`android.widget.TextView`);
//     await insertTextSelector.waitForDisplayed({ timeout: 30000 });

//     var testElement = null;

//     try {
//       var textElement = await $('android=new UiSelector().textContains("active connection is")');
//       await textElement.waitForDisplayed({ timeout: 30000 });
//       testElement = textElement;
//     }
//     catch {
//       var screenshotPath = path.resolve(__dirname, 'screenshot.png');
//       await browser.saveScreenshot(screenshotPath);
//       console.log('Screenshot stored at ' + screenshotPath);
//       throw new Error('Cannot find the needed TextView element from app');
//     }

//     var matchedString = await testElement.getText();
//     console.log(matchedString);
//     assert(matchedString.indexOf('The active connection is wifi') !== -1);
//     assert(matchedString.indexOf('Up and running') !== -1);
//   });
// });
