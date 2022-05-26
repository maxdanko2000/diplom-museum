import { usersList } from "./db";
import { isAuth } from "./utils";
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
      if (isAuth(usersList, this.userNameField.value, this.passwordField.value)) {
        if (this.isAdmin()) {
          alert("Welcome SENSEI");
          this.clearFields();
        } else {
          alert(`Welcome ${this.userNameField.value}!`);
          this.clearFields();
        }
      } else {
        alert("Please register!");
      }
    });
  }

  clearFields() {
    this.userNameField.value = "";
    this.passwordField.value = "";
  }

  isAdmin() {
    if (this.userNameField.value === "admin" && this.passwordField.value === "admin") {
      for (const item of usersList) {
        return item.isAdmin;
      }
    } else return false;
  }
}
