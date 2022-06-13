import { usersList } from "./db";
import { isAuth } from "./utils";

export class Login {
  constructor() {
    this.userNameField = document.getElementById("login-username");
    this.passwordField = document.getElementById("login-password");
    this.btnLogin = document.getElementById("btn-login");
    this.loginForm = document.getElementById("login-form");
    this.usersList = JSON.parse(localStorage.getItem("usersList"));
    this.auth = { isAdmin: false, isAuth: false, login: "" };
  }

  authorize() {
    if (!this.usersList) {
      localStorage.setItem("usersList", JSON.stringify(usersList));
      this.usersList = JSON.parse(localStorage.getItem("usersList"));
    }
    this.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (isAuth(this.usersList, this.userNameField.value, this.passwordField.value)) {
        if (this.isAdmin()) {
          this.auth.isAdmin = true;
          this.auth.isAuth = true;
          this.auth.login = this.userNameField.value;
          localStorage.setItem("auth", JSON.stringify(this.auth));
          alert("Welcome administrator!");
          document.location.pathname = "/index.html";
        } else {
          this.auth.isAdmin = false;
          this.auth.isAuth = true;
          this.auth.login = this.userNameField.value;
          localStorage.setItem("auth", JSON.stringify(this.auth));
          alert(`Welcome ${this.userNameField.value}!`);
          document.location.pathname = "/index.html";
        }
      } else {
        this.auth.isAdmin = false;
        this.auth.isAuth = false;
        this.auth.login = "";
        localStorage.setItem("auth", JSON.stringify(this.auth));
        alert("Please register!");
      }
    });
  }

  logOut() {
    this.auth.isAdmin = false;
    this.auth.isAuth = false;
    this.auth.login = "";
    localStorage.setItem("auth", JSON.stringify(this.auth));
    document.location.pathname = "/login-page.html";
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
