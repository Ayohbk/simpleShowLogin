const dialog = require("../pageobjects/dialog.page.js");

describe("My Login page", () => {
  it("should notify user of invalid email address entered", async () => {
    //Selenium opens browser
    await dialog.open();
    //This set additional time wait for the cookie consent page to load
    await browser.setTimeout({ implicit: 5000 });
    //This clicks the "save settings" button on the cookie consent page
    await dialog.cookieSaveBtn.click();
    //Verify user is on login page
    await expect(dialog.loginPageTitle).toHaveText("Login to simpleshow");
    //User types invalid email
    await dialog.emailAddressField.setValue("TE5T123");
    //
    await dialog.emailAddressField.setValue("Tab");
    //await driver.keys("Enter");
    await expect(dialog.errorMessageField).toHaveText("Invalid e-mail address");
    expect(dialog.loginBtn).toBeDisabled;
  });
});
