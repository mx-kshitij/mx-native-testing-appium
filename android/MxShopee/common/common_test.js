const performLogin = async () => {
    var letsGoBtn = await $('android=new UiSelector().resourceId("introScreen1$buttonDone")');
    await letsGoBtn.waitForDisplayed({ timeout: 30000 });
    await letsGoBtn.click();
    var loginBtn = await $('android=new UiSelector().resourceId("container11")');
    await loginBtn.waitForDisplayed({ timeout: 30000 });
    await loginBtn.click();
    var userNameTextbox = await $('android=new UiSelector().resourceId("textBox3")')
    await userNameTextbox.waitForDisplayed({ timeout: 30000 });
    userNameTextbox.addValue('User');
    var passwordTextbox = await $('android=new UiSelector().resourceId("textBox4")')
    await passwordTextbox.waitForDisplayed({ timeout: 30000 });
    await passwordTextbox.click();
    browser.keys('Password123!');
    var loginPageBtn = await $('android=new UiSelector().resourceId("actionButton2")')
    await loginPageBtn.click();
    var welcomeText = await $('android=new UiSelector().resourceId("text4")')
    await welcomeText.waitForDisplayed({ timeout: 30000 });
};

module.exports = performLogin;