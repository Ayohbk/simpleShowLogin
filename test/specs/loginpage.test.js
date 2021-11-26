const dialog = require("../pageobjects/dialog.page.js");

describe("Invalid Login attempt", () => {
  before(async () => {
    //Selenium opens browser
    await dialog.open();
    //This clicks the "save settings" button on the cookie consent page
    await dialog.cookieSaveBtn.click();
    //Verify user is on login page
    await expect(dialog.loginPageTitle).toHaveText("Login to simpleshow");
    //User types invalid email
    await dialog.emailAddressField.setValue("TE5T123");
    //User moves the cursor to the password field
    await dialog.emailAddressField.setValue("Tab");
  });
  it("should notify user of invalid email address entered", async () => {
    await expect(dialog.errorMessageField).toHaveText("Invalid e-mail address");
  });
  it("Login button should be disabled", async () => {
    expect(dialog.loginBtn).toBeDisabled;
  });
});
