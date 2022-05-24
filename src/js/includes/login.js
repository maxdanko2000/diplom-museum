import { usersList } from "./db";
export class Login {
  constructor() {
    this.userNameField = document.getElementById("login-username");
    this.passwordField = document.getElementById("login-password");
    this.btnLogin = document.getElementById("btn-login");
    this.loginForm = document.getElementById("login-form");
  }
  authorize() {
    this.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.isAuthorize()) {
        console.log("Authorized");
        if (this.isAdmin()) {
          alert("Welcome SENSEI");
        } else {
          alert(`Welcome ${this.userNameField.value}`);
        }
      } else {
        console.log("Please register");
      }
    });
  }
  clearFields() {
    this.userNameField.value = "";
    this.passwordField.value = "";
  }

  isAuthorize() {
    console.log();
    return (
      usersList.filter(
        (item) =>
          item.name === this.userNameField.value && item.password === this.passwordField.value
      ).length > 0
    );
  }

  isAdmin() {
    for (const item of usersList) {
    }
  }
}
