var performLogin = require('../../common/common_test');

var assert = require('assert');

describe('Order Product', () => {
    it('login and order a product', async () => {
        await performLogin();

        var shoppingItem = await $('android=new UiSelector().resourceId("container7")');
        await shoppingItem.waitForDisplayed({ timeout: 30000 });
        await shoppingItem.click();

        var productBuyNowBtn = await $('android=new UiSelector().text("Buy now")');
        await productBuyNowBtn.waitForDisplayed({ timeout: 30000 });
        await productBuyNowBtn.click();

        var quantityTextBox = await $('android=new UiSelector().resourceId("textBox1")');
        await quantityTextBox.waitForDisplayed({ timeout: 30000 });
        await quantityTextBox.setValue('15');

        var selectNewAddressRadio = await $('android=new UiSelector().resourceId("radio-button-New_address")');
        await selectNewAddressRadio.waitForDisplayed({ timeout: 30000 });
        await selectNewAddressRadio.click();

        var titleTextBox = await $('android=new UiSelector().resourceId("textBox2")');
        await titleTextBox.waitForDisplayed({ timeout: 30000 });
        await titleTextBox.setValue('Dummy Title');

        var addressLine1Box = await $('android=new UiSelector().resourceId("textBox3")');
        await addressLine1Box.waitForDisplayed({ timeout: 30000 });
        await addressLine1Box.setValue('Address 1');

        assert(true);
    })
});
