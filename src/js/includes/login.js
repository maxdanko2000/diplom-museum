import { usersList } from "./db";
import { isAuth } from "./utils";
export class Login {
  constructor() {
    this.userNameField = document.getElementById("login-username");
    this.passwordField = document.getElementById("login-password");
    this.btnLogin = document.getElementById("btn-login");
    this.loginForm = document.getElementById("login-form");
    this.btnUserPage = document.getElementById("user-page-btn");
    this.btnAdminPage = document.getElementById("admin-page-btn");
    this.btnLoginPage = document.getElementById("login-page-btn");
    this.btnRegisterPage = document.getElementById("register-page-btn");
  }
  authorize() {
    this.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (isAuth(usersList, this.userNameField.value, this.passwordField.value)) {
        if (this.isAdmin()) {
          alert("Welcome SENSEI");
          // document.location.pathname = "/admin-page.html";
        } else {
          alert(`Welcome ${this.userNameField.value}!`);
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

  renderBtnList() {
    this.hideBtn(this.btnUserPage, this.btnLoginPage, this.btnRegisterPage, this.btnAdminPage);
    if (this.isAdmin()) {
      this.showBtn(this.btnAdminPage);
    }
  }

  showBtn(...btns) {
    for (const btn of btns) {
      btn.style.display = "flex";
    }
  }

  hideBtn(...btns) {
    for (const btn of btns) {
      btn.style.display = "none";
    }
  }
}
