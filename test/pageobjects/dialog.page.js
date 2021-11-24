const Page = require("./page");

class Dialog extends Page {
  /**
   * Define Elements
   */
  get cookieSaveBtn() {
    return $(
      "#overlay>.container>.modal-dialog>.modal-body>.confirm-buttons>button.ok"
    );
  }
  //find continue button
  get loginPageTitle() {
    return $("h1.title");
  }

  //find email address input field
  get emailAddressField() {
    return $("#mat-input-0");
  }
  //find login button
  get loginBtn() {
    return $(".formContainer>button");
  }

  //find error message field
  get errorMessageField() {
    return $(".mat-error");
  }
  open() {
    return super.open("login-register");
  }
}
module.exports = new Dialog();
